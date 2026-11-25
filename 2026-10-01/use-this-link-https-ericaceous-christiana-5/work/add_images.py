from pathlib import Path
import re,zipfile
p=Path('outputs/boit-preview/index.html');s=p.read_text()
alts={'motor':'Blue car on a winding road beneath a teal protective arc','medical':'Medical professional with a tablet beside a modern clinic','life':'Family enjoying a garden beneath a blue and purple protective arc'}
for slug,alt in alts.items():
 pattern=r'(<article id="product-'+slug+r'" class="product-card '+slug+r'"><div class="product-art">)(.*?)(</div><div class="product-content">)'
 m=re.search(pattern,s)
 if not m:raise RuntimeError('Product artwork not found: '+slug)
 label=re.search(r'<span class="art-label">.*?</span>',m.group(2)).group(0)
 number=re.search(r'<span class="art-number">.*?</span>',m.group(2)).group(0)
 s=s[:m.start()]+m.group(1)+f'<img class="product-illustration" src="assets/{slug}-illustration.png" alt="{alt}" width="1536" height="1024" loading="lazy">'+label+number+m.group(3)+s[m.end():]
p.write_text(s)
p=Path('outputs/boit-preview/README.md');p.write_text(p.read_text()+'\nProduct illustrations were generated with the built-in image-generation tool. The complete prompts are saved in IMAGE-PROMPTS.md. Images are bundled locally in assets/.\n')
