---
# 这是页面的图标
icon: page
# 这是文章的标题
title: 如何保证你的代码质量
# 设置作者
author: 陈俊刚
# 设置写作时间
time: 2021-07-01
# 一个页面只能有一个分类
category: JavaScript
# 一个页面可以有多个标签
tag:
# 此页面会在文章列表指定
sticky: true
# 此页面会出现在首页的文章板块中
star: true
# 你可以自定义页脚
footer:
---

## 单元测试

- 测试是一种验证我们的代码是否可以按预期工作的方法
- 单元测试是指对软件中的最小可测试单元进行检查和验证

## 前端单元测试的意义

1. 检测出潜在的bug
2. 快速反馈功能输出，验证代码是否达到预期
3. 保证代码重构的安全性
4. 方便协作开发

## 函数式编程

- 函数式编程是一种编程范式，是一种构建计算机程序结构和元素的风格，它把计算看作是对数学函数的评估，避免了状态的变化和数据的可变。
- 将我们程序分解为一些更可重用、更可靠且更易于理解的部分，然后再将他们组合起来，形成一个更易推理的程序整体

```javascript
let arr = [1, 2, 3, 4]
let newArr = (arr, fn) => {
    let res = []
    for ( let i = 0; i < arr.length; i ++) {
        res.push(fn(arr[i]))
    }
    return res
}
let add = item => item + 5
let multi = item => item * 5
let sum = newArr(arr, add)
let multiSum = newArr(arr, multi)
console.log(sum, multiSum) // [6, 7, 8, 9], [5, 10, 15, 20]
```

## 纯函数

- 如果函数的调用参数相同，则永远返回相同的结果。它不依赖于程序执行期间函数外部任何状态或数据的变化，必须只依赖于其输入参数。

```javascript
let arr = [1, 2, 3, 4, 5]
arr.slice(1, 3) // 纯函数，返回[2, 3]，原数组不改变
arr.splice(1, 3) // 非纯函数，返回[2, 3, 4]，原数组改变
arr.pop() // 非纯函数，返回6，原数组改变
```

## 尽可能的减少副作用的函数

::: tip 保证函数无副作用的特性
- 函数入口使用参数运算，而不修改它
- 函数内不修改函数外的变量
- 运算结果通过函数返回给外部
:::

## 可变性和不可变性

- 可变性是指一个变量创建以后可以任意修改
- 不可变性指一个变量，一旦被创建，就永远不会发生改变，不可变性是函数式编程的核心概念

### 可变性

```javascript
let data = { count: 1 }
let foo = data => {
    data.count = 2
}
console.log(data.count) // 1
foo(data)
console.log(data.count) // 2
```
### 不可变性

```javascript
let data = { count: 1 }
let foo = data => {
    let copyData = { ...data }
    copyData.count = 2
}
console.log(data.count) // 1
foo(data)
console.log(data.count) // 1
```

## 缓存函数

- 实现原理：把参数和对应的结果数据存到一个对象中，调用时，判断参数对应的数据是否存在，存在就返回对应的结果数据。

```javascript
let memoize = function (func) {
    let cache = {}
    return function (key) {
        if (!cache[key]) {
            cache[key] = func.apply(this, arguments)
        }
        return cache[key]
    }
}
```
underscore中的memoize实现

```javascript

```