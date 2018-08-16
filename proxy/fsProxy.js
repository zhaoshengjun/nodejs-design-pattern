class FSProxy {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }
  readFile(path, format, callback) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error("can only read markdwon file"));
    }

    this.fs.readFile(path, format, (err, contents) => {
      if (err) {
        console.error(err);
        return callback(err);
      }
      return callback(contents);
    });
  }
}

module.exports = FSProxy;
