# water-loader
> 统一的 Water 标签编写规范

[![@fe6/water-loader](https://img.shields.io/npm/v/@fe6/water-loader.svg?style=flat-square)](https://www.npmjs.org/package/@fe6/water-loader)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## 预览

可进入 `./demo/` 文件夹，安装以来之后，执行 `npm start` ，进行查看。

##### 若 `Button` 转译成 `w-button`

不需要加参数，效果如下

1. 转译前：

![Button](./img/loader1.png)

2. 转移后：

![w-button](./img/loader3.png)

##### 若 `w-button` 转译成 `Button`

需要在 `./demo/webpack.config.js` 中加 `prefix: true` ，效果如下

1. 转译前：

![Button](./img/loader2.png)

2. 转移后：

![w-button](./img/loader4.png)

## 使用

```js
// 配置 webpack.config.js
module.exports = {
  // ... 省略其他配置
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          // ... 省略其他配置
          {
            loader: '@fe6/water-loader',
            options: {
              prefix: true, // `w-button` 转译成 `Button`
            },
          },
        ],
      },
    ],
  },
};
```

## 说明

引用了 [water-helper-maps](https://github.com/fe6/water-helper-maps) 中的标签对照。完整标签请移步 [water-helper-maps](https://github.com/fe6/water-helper-maps/blob/master/src/maps/water-tags.json) 。
