// 作用: 是一种泛型类型，把原有某个类型映射成新的类型，减少写重复代码
// 场景: 比如用户注册,部分信息必填，修改时可以选填，查看时只能只读
// 基础语法: {[P in K]: T}  in 可以遍历 K 类型中的所有类型，类似于for...in...，而 K 是一个联合类型。
// 语法: {修饰符(+-) [P in K]修饰符(+-): T}  --> {readonly [P in K] ?: T} 默认是+号，代表添加，-代表移除
// 语法: {修饰符(+-) [P in K]修饰符(+-): T}  --> {-readonly [P in K] -?: T}  移除只读移除选填
// 语法: {修饰符(+-) [P in K]修饰符(+-): T}  --> {readonly [P in K] ?: T}

type User = {
  name: String
  password: String
  age?: Number
  address?: String
  phone?: String
  Sex?: Boolean
}

type item = { a: string; b: number; c: boolean }

type T1 = { [P in 'x' | 'y']: number }

type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

// P in 属性名的集合, P ==> 属性名的联合类型
type MyPartial2 = {
  [P in 1 | 2 | 3]?: [1, 2, 3, 4][P]
}

type Keys = 'name' | 'age' // 属性名的集合
type MyPartial3 = {
  [P in Keys]?: User[P]
}

type UserPartial = MyPartial<User>

// keyof 拿到对象的属性名的联合类型
// keyof User==> 'name' | 'password' | 'age' | 'address' | 'phone' | 'Sex'
// User[keyof User]  ==> User['name'] | User['password'] | ...  // 拿到对应值的类型
type k = User[keyof User]

// function getProperty(obj, key) {
//   return obj[key]
// }
function getProperty<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const user = { name: 'name', age: 20 }
const userName = getProperty(user, 'name')
// const userSex = getProperty(user, 'sex') // 报错

// 获取我们想要的属性及对应的类型
type myPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
type getNameAndAge = myPick<User, 'name' | 'age'>
