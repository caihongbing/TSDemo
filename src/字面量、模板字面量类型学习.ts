/**
 * 字面量类型：字符串字⾯量类型、数字字⾯量类型、布尔字⾯量类型
 * 场景：使用具体值表示
 */

type StrName = 'name'

// let namestr: str = 'age' // 不能将类型“"age"”分配给类型“"name"”
let namestr: StrName = 'name'

/**
 * 场景（遇到什么问题）：开发中定义字符串字面量类型的时候有时候会遇到重复代码
 * 作用：可以通过解决定义变量时候的重复代码
 * 基础语法：`${ T }` 类似js中的模板语法，只不过一个是类型，一个是变量
 * 注意点： T 是 string | number | bigint | boolean
 */

// 场景1： 定义了两个有许多相同的字符串的类

type Margin = {
  'margin-top': string
  'margin-bottom': string
  'margin-left': string
  'margin-right': string
}
type Padding = {
  'padding-top': string
  'padding-bottom': string
  'padding-left': string
  'padding-right': string
}

// 如何解决，以上重复代码 extends 类型约束
type CallbackMarginAndPadding<T extends string> = {
  [P in T]: T extends string ? string : number
}

/**
 * 特性1 T是联合类型会类型分布式条件类型那样
 */
type M = 'top' | 'bottom' | 'left' | 'right'
type M0 = `margin-${M}` //"margin-top" | "margin-bottom" | "margin-left" | "margin-right"

/**
 * 特性2： `${T}-${U}` 叉积
 * 有T, 有U会相互交叉，然后返回联合类型
 */
type MarginAndPadding<T extends string, U extends string> = `${T}-${U}`
type M1 = MarginAndPadding<'margin' | 'padding', 'top' | 'bottom'>

type M2 = MarginAndPadding<'margin', 'top' | 'bottom' | 'left' | 'right'>

type M3 = CallbackMarginAndPadding<M2>
