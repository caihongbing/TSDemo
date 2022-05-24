/**
 * 作用：3元运算符类似
 * 场景：三元运算符类似
 * 语法：T extends U ? X : Y (T,U,X,Y都是类型占位符)
 *
 */

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends Function
  ? 'function'
  : '剩下的类型'

type num = TypeName<1>

/**
 * 语法2：分布式条件类型，会分解成多个分支
 * 条件1：T 是裸类型， 即T没有被元组，数组，promise<T>包裹过，
 * 条件2：T是联合类型
 *
 */

// 如果传入的是联合类型
// 相当于 TypeName<string> | TypeName<() => {}>
type T0 = TypeName<string | (() => {})> // "string" | "function"

type IsBoolean<T> = T extends boolean ? 'Y' : 'N'
type T11 = IsBoolean<number | true> // "N" | "Y"

type WrappedTuple<T> = [T] extends [boolean] ? 'Y' : 'N'
type T12 = WrappedTuple<true> // "Y"，正常的条件类型
type T13 = WrappedTuple<true | number> // "N"，正常的条件类型，不是分布式条件
type T14 = WrappedTuple<'好好学习'> // "N"，正常的条件类型，不是分布式条件

type MyExclude2<T, U> = T extends U ? never : T

// 分布式展开
// "address" | "phone"     T是所有项，U是排除项，排除除U以外的项
type IWantKeys = MyExclude2<
  'name' | 'age' | 'address' | 'phone',
  'name' | 'age'
>
type IWantKeys2 = MyExclude2<'name', 'name' | 'age'>

// 不加[keyof T]是什么效果
type NoFunPropertyKeys<T> = {
  [K in keyof T]: T[K] extends Function ? never : K // 如果是函数的话 返回  K: never, 不是的话返回 K:K
}

// 加 {}[keyof T]，拿到对应键的值的类型
type NoFunPropertyKeys2<T> = {
  [K in keyof T]: T[K] extends Function ? never : K // 如果是函数的话 返回  K: never, 不是的话返回 K:K
}[keyof T]

type User2 = {
  name: '我是'
  password: 'password'
  age?: 'age'
  address?: 'address'
  phone?: 'phone'
  update(): void
}

/**
 *  
 {  
    name: "name";
    password: 'password';
    age?: 'age';
    address?: 'address';
    phone?: 'phone';
    update: never;
  }
 *  
 */
type NoFunPropertyNames = NoFunPropertyKeys<User2>
type k2 = User2[keyof User2] // "我是" | "password" | "age" | "address" | "phone" | (() => void)

type User3 = {
  name: 'name'
  password: 'password'
  age?: 'age'
  address?: 'address'
  phone?: 'phone'
  update: never
}
type k3 = User3[keyof User3] // "password" | "age" | "address" | "phone" | "name"，never会被过滤掉
type NoFunPropertyNames2 = NoFunPropertyKeys2<User> // "password" | "age" | "address" | "phone" | "name" | "Sex"
