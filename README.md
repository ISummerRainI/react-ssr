### react-ssr

项目启动
```javascript
  npm run dev:client  //启动客户端
  npm run dev:server  //启动服务端
  npm run build:client  //打包客户端代码（生产）
  npm run build:server  //打包服务端代码（生产）
  npm run build  //打包全部代码
  npm start  //启动生产服务
```

文件说明
```
|-build  webpack配置
|-client  客户端代码
|--config  路由文件
|--store  redux文件
|--util  公用文件
|--views  页面模板文件
|-server  服务端代码
```

#### 前后端同构
前后端公用统一套代码，生产打包时会打包出两份代码，一份供首页之外的页面前端渲染使用，一份供服务端渲染首页使用
