interface ObjectLiteral {
  [key: string]: any;
};


const configuration: ObjectLiteral = {
  paths: {
    content: 'content',
    dist: 'dist'
  },
  server: {
    port: 1337, 
    root: 'dist',
    open: false,
    file: 'index.html',
    wait: 250
  }
};


export { configuration };