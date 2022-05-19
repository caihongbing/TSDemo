// https://typescript.bootcss.com/basic-types.html，中文文档

// boolean
// let bool: Boolean = 's'
let bool: Boolean = true

// number
let num: Number = 1

// string
let str: String = '123'

// array
// let ary: number[] = [1,'2'] // 数组内容都要是number
// 第二种定义数组的方式，用泛型
// let ary: Array<Number|String> = ['1',2,true]
let ary: Array<Number | String> = ['1', 2]

// 元组是已知个数和类型
// let tupleAry: [Number, Boolean]  = [1,2]
// let tupleAry: [Number, Boolean]  = [1,true,2]
let tupleAry: [Number, Boolean] = [1, true]

let x: [number, string]
x = [1, '2']

// 枚举

enum Color {
  red,
  green,
  blue,
}
let c: Color = Color.blue // 枚举默认从0开始，2
num = c
