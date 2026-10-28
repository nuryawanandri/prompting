'use strict';
// Optional preview server; the app itself runs directly from index.html.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const allowed = new Map([
  ['/', ['index.html','text/html; charset=utf-8']],
  ['/index.html', ['index.html','text/html; charset=utf-8']],
  ['/styles.css', ['styles.css','text/css; charset=utf-8']],
  ['/app.js', ['app.js','text/javascript; charset=utf-8']]
]);
const port = Number(process.env.PORT || 4173);
const server = http.createServer((request,response) => {
  let pathname;
  try { pathname = new URL(request.url,'http://localhost').pathname; }
  catch { response.writeHead(400); response.end('Permintaan tidak valid.'); return; }
  const entry = allowed.get(pathname);
  if(!entry || !['GET','HEAD'].includes(request.method)) { response.writeHead(404); response.end('Tidak ditemukan.'); return; }
  fs.readFile(path.join(__dirname,entry[0]),(error,contents) => {
    if(error) { response.writeHead(500); response.end('File belum dapat dibaca.'); return; }
    response.writeHead(200,{'Content-Type':entry[1],'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
    response.end(request.method === 'HEAD' ? undefined : contents);
  });
});
server.on('error',error => { console.error(`Pratinjau tidak dapat dimulai: ${error.message}`); process.exitCode=1; });
server.listen(port,'127.0.0.1',()=>console.log(`Pratinjau: http://127.0.0.1:${port}`));
