// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    // ECMAScript 版本
    "ecmaVersion":6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6:true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  //extends:'standard',
  extends: 'vue',
  // required to lint *.vue files
  plugins: [
    'flow-vars'
    //'html',
  ],
  // add your custom rules here
  'rules': {
    "flow-vars/define-flow-type": 1,
    "flow-vars/use-flow-type": 1,
    'arrow-parens': 0,//箭头函数用小括号括起来
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "object-curly-spacing":0,//大括号内是否允许不必要的空格
    "consistent-this": [2, "that"],//this别名
    "no-multiple-empty-lines": [1, {"max": 1}],//空行最多不能超过1行
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
    "no-var": 1,//禁用var，用let和const代替
    "no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],//不能有警告备注
    "max-depth": [1, 2],//嵌套块深度
    "object-shorthand": 1,//强制对象字面量缩写语法
    "id-match": 2,//命名检测
    "semi": [0, "always"]//语句强制分号结尾
  }
};
