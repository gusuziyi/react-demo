##  babel7环境测试：
```
测试用例：src/test.js
执行 npm run babel
将生成 babel/test.js文件，代码在node 10环境下正确执行
```

##  webpack开发环境测试：
```
测试用例：src/main.js
执行 npm run dev
将生成 dist/index.html 与 dist/development.js 文件，浏览器自动弹开，具备HMR功能
```

##  webpack产品环境测试：
```
测试用例：src/main.js
执行 npm run build
将生成 dist/index.html 与 dist/src 文件夹，打包功能正常
```