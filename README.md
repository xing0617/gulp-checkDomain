# gulp小插件
由于项目开发中(`我自己太马虎`)偶尔存在写死域名,测试中很难被发现,导致上线后出错,所以写了个检查自定义写死域名的小插件
##demo
```javascript
var gulpCheckDomain = require('gulp-checkdomain');
var checkDomain = ['www.baidu.com','www.taobao.com'];
gulp.task('checkdomain', function() {
    return gulp.src('./*.js')
        .pipe(gulpCheckDomain(checkDomain))
});
```