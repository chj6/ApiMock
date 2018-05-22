# CHApi
Express+Mock+ApiDoc模拟接口

## 执行步骤
- npm install  
- npm run dev 

访问：http://localhost:3000/apidoc/index.html 即可看到接口文档说明，并且提供了2个样例接口分别返回了Array和Object

## 注意点
- 新增接口可以参考api/example.js文件
- 接口的注释可以借助vscode的[ApiDoc Snippets](https://marketplace.visualstudio.com/items?itemName=myax.appidocsnippets)插件生成  
- 添加接口之后，需要重新执行npm run dev