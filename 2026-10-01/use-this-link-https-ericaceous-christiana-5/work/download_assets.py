from pathlib import Path
from urllib.request import Request, urlopen
import re,json
base='https://ericaceous-christiana-proscribable.ngrok-free.dev'
out=Path('outputs/boit-preview'); (out/'assets').mkdir(exist_ok=True)
for name,url in [('global','/src/styles/global.css'),('header','/src/components/Header.css'),('deck','/src/components/ScrollDeck.css')]:
    content=urlopen(Request(base+url,headers={'ngrok-skip-browser-warning':'1'})).read().decode()
    match=re.search(r'const __vite__css = ("(?:\\.|[^"\\])*")',content)
    (out/'assets'/f'{name}.css').write_text(json.loads(match.group(1)) if match else content)
for name,url in [('logo.png','/src/assets/new_logo_boit-removebg-preview.png'),('logo-short.png','/src/assets/new_logo_short_boit-removebg-preview.png')]:
    (out/'assets'/name).write_bytes(urlopen(Request(base+url,headers={'ngrok-skip-browser-warning':'1'})).read())
fontcss=urlopen('https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap').read().decode()
for i,url in enumerate(dict.fromkeys(re.findall(r'url\((https://[^)]+)\)',fontcss))):
    name=f'font-{i}.woff2';(out/'assets'/name).write_bytes(urlopen(url).read());fontcss=fontcss.replace(url,name)
(out/'assets/fonts.css').write_text(fontcss)
print('Downloaded original styles, logos, and fonts.')
