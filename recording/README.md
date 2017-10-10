本文档记录项目遇到的问题以及解决办法

1. 执行：npm run build 后生成的dist打包文件直接放在服务器上显示空白？

   解答 ：这是因为在在config文件下的index.js中配置的输出文件目录有问题 assetsPublicPath：‘/’默认是这样，我们要改成‘./’当前目录下
  （参考：https://www.2cto.com/kf/201709/676606.html）
