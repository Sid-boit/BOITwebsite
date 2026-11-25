"""Local-only MIA preview server. Set OPENAI_API_KEY before starting."""
import json, os, ssl, urllib.request, urllib.error
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
ROOT = Path(__file__).parent / 'outputs/boit-preview'
class Handler(SimpleHTTPRequestHandler):
 def do_GET(self):
  if self.path == '/api/mia/status':
   self.send_response(200); self.send_header('Content-Type','application/json'); self.send_header('Cache-Control','no-store'); self.end_headers()
   self.wfile.write(json.dumps({'ready': bool(os.environ.get('OPENAI_API_KEY'))}).encode()); return
  super().do_GET()
 def do_POST(self):
  if self.path != '/api/mia/token': self.send_error(404); return
  if self.headers.get('Origin') not in ('http://127.0.0.1:8765','http://localhost:8765'): self.send_error(403); return
  key=os.environ.get('OPENAI_API_KEY')
  if not key: self.send_error(503,'OpenAI API key is not configured'); return
  body={'session':{'type':'realtime','model':os.environ.get('MIA_REALTIME_MODEL','gpt-realtime-2.1'),'audio':{'output':{'voice':'marin'}},'instructions':"You are MIA, pronounced MEE-uh, BOIT's AI website guide. Speak warmly and concisely in English unless asked otherwise. BOIT serves banking and insurance. Planned products: Motor360 for motor claims, Medical360 for medical evidence and claims review, Life360 for onboarding and policy servicing. You have no live case access, browsing or transaction tools. Never invent case details, claim regulatory compliance is guaranteed, or imply you can execute financial transactions. Explain when information is not available. You are an AI assistant."}}
  request=urllib.request.Request('https://api.openai.com/v1/realtime/client_secrets',data=json.dumps(body).encode(),headers={'Authorization':'Bearer '+key,'Content-Type':'application/json'},method='POST')
  try:
   with urllib.request.urlopen(request,timeout=25) as response: data=response.read()
   self.send_response(200);self.send_header('Content-Type','application/json');self.send_header('Cache-Control','no-store');self.end_headers();self.wfile.write(data)
  except urllib.error.HTTPError as error:
   messages={401:'OpenAI rejected the API key. Check that the key is valid.',403:'This API project does not have access to the voice service.',404:'The configured realtime model is unavailable to this project.',429:'OpenAI quota or rate limit reached. Check API billing and limits.'}
   self.voice_error(messages.get(error.code,'OpenAI rejected the voice session (HTTP '+str(error.code)+').'))
  except urllib.error.URLError as error:
   reason=error.reason
   self.voice_error('Python could not verify the OpenAI TLS certificate. Configure trusted certificates for Python.' if isinstance(reason,ssl.SSLCertVerificationError) else 'The server could not reach OpenAI. Check its internet connection.')
  except TimeoutError: self.voice_error('OpenAI connection timed out. Try again.')
 def voice_error(self,message):
  self.send_response(502);self.send_header('Content-Type','application/json');self.end_headers();self.wfile.write(json.dumps({'error':message}).encode())
if __name__ == '__main__':
 ThreadingHTTPServer(('127.0.0.1',8765),partial(Handler,directory=str(ROOT))).serve_forever()
