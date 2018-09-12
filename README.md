# Vue-meituan


> 使用Vue仿写《美团外卖》app


### 插件和工具
* 字体图标 iconfont
* CSS扩展 less + normalize
* 模拟接口 easy-mock
* 接口封装 axios
* 组件库 mint-ui


### 功能模块
- [ ] 需求分析
- [ ] 系统设计


### 文件布局
``` bash
|-- build                            // webpack配置文件
|-- config                           // 项目打包路径
|-- src                              // 源码目录
|   |-- common                       // 公共资源目录
|       |-- font                     // iconfont目录
|       |-- style                    // 公共样式文件目录
|   |-- components                   // 组件目录
|       |-- entitybutton             // 商品增添按钮
|       |-- header                   // 顶部nav
|       |-- meatTypes                // 首页食品分类
|       |-- modal                    // 弹框模块
|       |-- sellerList               // 商家列表
|       |-- userBar                  // 顶部bar
|   |-- models                       // 页面目录
|       |-- Home                     // 主页
|       |-- Cart                     // 购物车页
|       |-- Seller                   // 商家详情页
|   |-- router                       // 路由目录
|   |-- store                        // vuex目录
|   |-- utils                        // 通用工具文件
|-- static                           // 静态资源目录
```


``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
