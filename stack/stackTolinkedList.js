class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.size = 0
  }

  push(value) {
    const node = new Node(value)
    node.next = this.top
    this.top = node
    this.size++
  }

  pop() {
    if (this.size === 0) return null

    const value = this.top.value
    this.top = this.top.next
    this.size--
    return value
  }

  peek() {
    return this.size === 0 ? null : this.top.value
  }

  print() {
    const out = []
    let curr = this.top
    while (curr) {
      out.push(curr.value)
      curr = curr.next
    }
    console.log(out)
  }
}
