var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var chalk = require('chalk');

// 常量
const PLUGIN_NAME = 'checkDomain';

// 插件级别函数 (处理文件)
function checkDomain(domain) {
    if (!domain) {
        throw new PluginError(PLUGIN_NAME, 'Missing domain text!');
    }
    // 创建一个让每个文件通过的 stream 通道
    let stream = through.obj(function(file, enc, cb) {
        if (file.isBuffer()) {
            let title = String(file.relative),
                str = String(file.contents);
            domain.map(function(item){
                if(str.indexOf(item) > 0){
                    gutil.log(chalk.yellow(title)+':'+chalk.red('包含写死域名,'), item);
                }
            });
            return cb();
        }
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        // 确保文件进去下一个插件
        this.push(file);
        // 告诉 stream 转换工作完成
        cb();
    });
    // 返回文件 stream
    return stream;
}

// 暴露（export）插件的主函数
module.exports = checkDomain;