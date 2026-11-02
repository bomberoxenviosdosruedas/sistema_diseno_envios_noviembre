const fs = require('fs');
const path = require('path');

const propuestaDir = path.join(__dirname, '..', 'propuesta');
const files = fs.readdirSync(propuestaDir).filter(f => f.endsWith('.html'));

const pages = files.map(file => {
  const content = fs.readFileSync(path.join(propuestaDir, file), 'utf-8');
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  const title = titleMatch ? titleMatch[1].trim() : file;
  const desc = descMatch ? descMatch[1].trim() : '';
  const sizeKb = (Buffer.byteLength(content, 'utf-8') / 1024).toFixed(1);
  return { file, title, desc, sizeKb };
});

console.log(JSON.stringify(pages, null, 2));
