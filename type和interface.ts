// 注意点1：type(类型别名)用来定义对象和非对象类型
type Num = number
type NumAndStr = number | string
// 1.6 type支持泛型

// 注意点2：interface（接口） 用来定义对象的
interface Obj1 {
  a: number
  b: string
  c(): void
}

// 注意点3：type 通过 & 来扩展， interface 通过 extends

type Num2 = Num & NumAndStr // 交叉扩展

interface Obj2 extends Obj1 {
  d: () => string
  // a: boolean // 报错
}

// 注意点4：接口重名会自动合并，type报错，除非利用这个点不然都使用type

// type Num = string  // 报错

interface Obj2 {
  // d: number //报错
  e: number[]
}
