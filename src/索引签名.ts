type keyName = { [key: string]: number }

type ProChangeHandle = {
  [key: `${string}changed`]: () => void
}

let handle: ProChangeHandle = {
  idchanged: () => {},
  // nameChange: () => {}, // 报错
}
