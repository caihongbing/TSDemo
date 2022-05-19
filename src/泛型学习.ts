// 泛型是  类型占位符

function identity<T, U>(value: T, message: U): T {
  return value
}

console.log(identity<Number, Object>(1, {})) // 调用时显示指定
console.log(identity(1, {})) // 调用时自动推导
