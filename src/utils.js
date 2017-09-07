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
     * ///
     * 遍历 baseDir 下的所有文件,
     *
     * 产生一个平级列表:
     *
     * 例如:
     *
     * ```
     * base -
     *      | a - b.js
     *          | c - d.js
     *          |   | e.js
     *          | f.js
     * ```
     *
     * 输出:
     *
     * ```
     * /a/b.js
     * /a/c/d.js
     * /a/c/e.js
     * /a/f.js
     * ```
     *
     * @todo NOTE: 我们当前这个设计, 可能会有内存使用过大的风险, 请知悉.
     * ///
     * @def: .flattenFiles: baseDir => [filepath] throws noSuchDirError
     *  baseDir: string     // 目标的基础文件夹
     *  filepath: string    // 相对于基础文件夹的 "相对路径"
     *  noSuchDirError: Error   // 如果 baseDir 不存在, 抛出该错误 (避免不小心为用户创建莫名其妙的文件夹)
     */
    flattenFiles: function (baseDir) {
        if (!fs.existsSync(baseDir)) {
            throw new Error('无此文件夹!');
        }

        var result = [];
        fs.readdirSync(baseDir).forEach(function (fileEntry) {

            // 忽略以 `.` 起始的文件/文件夹
            if (/^\./.test(fileEntry)) {
                return;
            }

            // 如果是文件, 直接插入 result 集合
            if (fs.statSync(baseDir + '/' + fileEntry).isFile()) {
                result.push('/' + fileEntry);
            }

            // 如果是文件夹, 返回其子 flatten list, 并合并返回
            else {
                utils.flattenFiles(baseDir + '/' + fileEntry).forEach(function (subFile) {
                    result.push('/' + fileEntry + subFile);
                });
            }
        });
        return result;
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