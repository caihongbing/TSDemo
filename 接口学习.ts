interface AType {
  name: String
  age?: Number
  readonly xw?: Number // 只读
  returnLog(): void
  console?: (x: Number) => void // 没有函数
  consolelog: () => Number // 有返回值的函数
}

function a(params: AType) {
  const { name, age } = params
  console.log(name, age)
}

// a({ name: '123', age: 1, kk: 123 })
a({
  name: '123',
  age: 1,
  returnLog: () => 1,
  console: function () {},
  consolelog: function () {
    return 1
  },
})



