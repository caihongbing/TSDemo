// 定义一个通用的用户信息类型
type NewUser = {
  name: string
  age: string
  address?: string
  changeAt: string // 服务端返回的数据
  readonly id: number // 服务返回的
}

/**
 * pick
 * 作用： 过滤出我们要的，omit的反向， 映射类型 ---> 都是减少重复代码，解决代码复用问题，筛选出想要的，且原先是啥筛选出来也是啥
 * 场景： 比如我们定义了一些通用的类型别名或者接口，只要其中的某些属性，基础的话我们就重新写一个type或者interface，进阶就是利用映射类型和对应的内置工具
 * 语法： 如下
 */

type Mypick<T, K extends keyof T> = { [P in K]: T[P] }

type PickUser = Mypick<NewUser, 'name' | 'age' | 'id'> //

/**
 * Exclude
 * 作用：过滤掉要排除的属性，返回我们想要的属性的键
 * 场景：
 * 语法： 如下
 */
// 条件类型
type MyExclude<T, U> = T extends U ? never : T
type ExcludeUser = MyExclude<keyof NewUser, 'name' | 'age' | 'updateDate'> // "address" | "changeAt" | "id"

/**
 * omit
 * 作用： 过滤掉我们不要的，pick的反向， 映射类型 ---> 都是减少重复代码，解决代码复用问题，筛选出想要的，且原先是啥筛选出来也是啥
 * 场景： 比如我们定义了一些通用的类型别名或者接口，只要其中的某些属性，基础的话我们就重新写一个type或者interface，进阶就是利用映射类型和对应的内置工具
 * 语法： 如下
 */
//  Exclude<keyof T, K> // 排除掉我们要的，返回剩下的 // 语法： T extends U ? never : T
type Myomit<T, K extends keyof any> = Mypick<T, Exclude<keyof T, K>>
// type OmitUser = Myomit<NewUser, 'changeAt' | 'id'>
type OmitUser = Myomit<NewUser, 'changeAt' | 'id' | 'updateDate'> // K 可以any，反正只会返回他有的
