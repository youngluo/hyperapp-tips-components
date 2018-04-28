# hc-tips

[![npm](https://img.shields.io/npm/v/hc-tips.svg)](https://www.npmjs.com/package/hc-tips)
[![npm](https://img.shields.io/npm/dm/hc-tips.svg)](https://www.npmjs.com/package/hc-tips)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/youngluo/hyperapp-tips-components/blob/master/LICENSE)

> 基于hyperapp.js和WeUI的Tips组件

## 安装

    npm i -S hc-tips

## 使用

### 直接使用

      <script src="https://unpkg.com/hyperapp@1.2.5/dist/hyperapp.js"></script>
      <script src="node_modules/hc-tips/dist/index.js"></script>
      <script>
        window.HCTips.toast('消息提示')
      </script>

### ES6
      
      import HCTips from 'hc-tips'

      HCTips.toast('消息提示')

## 方法

* tosat(options: object | content: string)

* loading(options: object | content: string)

* alert(options: object | content: string)

* confirm(options: object | content: string)

### options (toast | loading)

#### content

type: `string`

required: `true`

#### duration

type: `number`

default: 2000

#### type

type: `string`

optional: `'info'`, `'error'`

default: `'info'`

### options (alert | confirm)

#### content

type: `string`

required: `true`

#### title

type: `string`

#### confirmText

type: `string`

default: `'确定'`

#### cancelText

type: `string`

default: `'取消'`

#### showCancel

type: `boolean`

default: `true`

是否显示取消按钮，`alert`方法为`false`

#### onCancel

type: `function`

点击取消按钮回调

#### onConfirm

type: `function`

点击确定按钮回调







