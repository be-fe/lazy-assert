var npath = require('path');

try {
    var fs = require('fs');
}
catch (ex) {

}

/**
 * @start-def: utils: {}
 */
var utils = {
    /**
     * @def: .j: ...pathParts => path
     *
     *  // path.resolve( path.join( ... ) )
     *  pathParts: [part]
     *      part: string
     *
     *  // 返回的解析后的路径
     *  path: string
     */
    j: function (/* pathParts */) {
        return npath.resolve(npath.join.apply(npath, arguments));
    },

    /**
     * ///
     * 确保 target 的父级 folder 存在, 如果不存在, 则递归确保其父级的父级存在, 并创建父级 folder
     * ///
     * @def: .ensureFolder: target => undefined, throws isFileError
     *  target: string          // 一个 path, 可能是一个文件或文件夹
     *  isFileError: Exception  // 如果父级文件夹为 "一个文件" 则抛出该错误
     *      type: 'folder-is-a-file'
     */
    ensureFolder: function (target) {
        var dirname = npath.dirname(target);

        if (!fs.existsSync(dirname)) {
            utils.ensureFolder(dirname);
            fs.mkdirSync(dirname);
        }
        else if (fs.statSync(dirname).isFile()) {
            throw utils.newError('folder-is-a-file', dirname + ' is a file, cannot create folder');
        }
    },

    /**
     *
     * @def: .write: path, value => undefined throws #@.ensureFolder.isFileError
     *  path: string    // 目标的写入的文件路径
     *  value: string   // 欲写入的文件内容 (in text)
     */
    write: function (path, value) {
        utils.ensureFolder(path);

        fs.writeFileSync(path, value);
    },

    /**
     *
     * @def: .read: path, defaultValue => value throws noFileError | isFolderError | isFileError
     *  path: string    // 读取的文件的路径
     *  defaultValue: string    // 如果没有找到文件, 则返回该内容, 且将该内容 #@.write 到目标文件中
     *
     *  value: string   // 文件内容 (in text)
     *  noFileError: Error
     *      type: 'no-such-file'
     *
     *  isFolderError: Error
     *      type: 'is-folder'
     *
     *  isFileError: #@.ensureFolder.isFileError
     */
    read: function (path, defaultValue) {
        if (!fs.existsSync(path)) {
            if (defaultValue) {
                utils.write(path, defaultValue);
                return defaultValue;
            }
            else {
                throw utils.newError('no-such-file', 'Target does not exist.');
            }
        }
        else if (fs.statSync(path).isDirectory()) {
            throw utils.newError('is-folder', 'The target is a folder.');
        }
        else {
            return fs.readFileSync(path).toString();
        }
    },

    /**
     *
     * @def: .newError: type, message => error
     *  type: string        // 这个是为了让 assert 可以检验 error type (不用手建一个新的 NewTypeError)
     *  message: string     // 主题错误消息
     *  error: Error        // 返回的 error instance
     *      message: string     // 拼接为 '@error-type: error-message' 的形式
     */
    newError: function (type, message) {
        return new Error(type ? '@' + type + ': ' + message : message);
    },

    extend: function (target, extra) {
        for (var key in extra) {
            if (extra.hasOwnProperty(key)) {
                target[key] = extra[key];
            }
        }
    },

    /**
     * // remove the leading/following whitespaces
     * @def: .trim: string => string
     */
    trim: function(string) {
        string = string || '';
        return string.replace(/^\s+/, '').replace(/\s+$/, '');
    },

    isArray: function (target) {
        return Object.prototype.toString.call(target) === '[object Array]';
    },

    isRegExp: function (target) {
        return Object.prototype.toString.call(target) === '[object RegExp]';
    }
};

module.exports = utils;