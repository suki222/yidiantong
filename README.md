# vuedemo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##说明

***
###运用插件
* vuex
* vux
* vue-router
* axios
* scss

###安装说明
* vux

需要vux-loader,less-loader支持
webpack.base.conf.js配置添加如下

```
const vuxLoader = require('vux-loader')
module.exports=vuxLoader.merge(webpackConfig, {
  plugins: [
    {
      name: 'vux-ui'
    },
    {
      name: 'duplicate-style'
    }
  ]
})

```
*注:*webpackConfig为原配置  let webpackConfig={}

*  scss
需要node-sass,sass-loader支持
