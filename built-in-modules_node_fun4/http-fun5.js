const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    
    res.end('<h1>This is the home page</h1>');
  }
  if(req.url === '/about') {
    
    res.end('<h1>This is the about page</h1>');
  }
  res.end(`<h1>Oops! this page doesn't exist</h1>`);
})

const port = 5000;

const moduleFn = (  ) => {
  server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})
}


module.exports = moduleFn;