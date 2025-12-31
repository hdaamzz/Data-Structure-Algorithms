class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.height = 1   // important for AVL
  }
}

class AVLTree {
  constructor() {
    this.root = null
  }

  // Get height safely
  getHeight(node) {
    return node ? node.height : 0
  }

  // Balance factor = height(left) - height(right)
  getBalance(node) {
    if (!node) return 0
    return this.getHeight(node.left) - this.getHeight(node.right)
  }

  // Update height of a node
  updateHeight(node) {
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
  }

  // Right rotate (LL rotation)
  rotateRight(y) {
    const x = y.left
    const T2 = x.right

    x.right = y
    y.left = T2

    this.updateHeight(y)
    this.updateHeight(x)

    return x
  }

  // Left rotate (RR rotation)
  rotateLeft(x) {
    const y = x.right
    const T2 = y.left

    y.left = x
    x.right = T2

    this.updateHeight(x)
    this.updateHeight(y)

    return y
  }

  insert(value) {
    this.root = this._insert(this.root, value)
  }

  _insert(node, value) {
    if (!node) return new Node(value)

    if (value < node.value) {
      node.left = this._insert(node.left, value)
    } else if (value > node.value) {
      node.right = this._insert(node.right, value)
    } else {
      return node
    }

    this.updateHeight(node)

    const balance = this.getBalance(node)

    // Case 1: LL
    if (balance > 1 && value < node.left.value) {
      return this.rotateRight(node)
    }

    // Case 2: RR
    if (balance < -1 && value > node.right.value) {
      return this.rotateLeft(node)
    }

    // Case 3: LR
    if (balance > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left)
      return this.rotateRight(node)
    }

    // Case 4: RL
    if (balance < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right)
      return this.rotateLeft(node)
    }

    return node
  }

  // Find minimum value node
  minValueNode(node) {
    let current = node
    while (current.left) current = current.left
    return current
  }

  delete(value) {
    this.root = this._delete(this.root, value)
  }

  _delete(node, value) {
    if (!node) return node

    if (value < node.value) {
      node.left = this._delete(node.left, value)
    } else if (value > node.value) {
      node.right = this._delete(node.right, value)
    } else {
      if (!node.left || !node.right) {
        node = node.left ? node.left : node.right
      } else {
        const temp = this.minValueNode(node.right)
        node.value = temp.value
        node.right = this._delete(node.right, temp.value)
      }
    }

    if (!node) return node

    this.updateHeight(node)

    const balance = this.getBalance(node)

    // LL
    if (balance > 1 && this.getBalance(node.left) >= 0) {
      return this.rotateRight(node)
    }

    // LR
    if (balance > 1 && this.getBalance(node.left) < 0) {
      node.left = this.rotateLeft(node.left)
      return this.rotateRight(node)
    }

    // RR
    if (balance < -1 && this.getBalance(node.right) <= 0) {
      return this.rotateLeft(node)
    }

    // RL
    if (balance < -1 && this.getBalance(node.right) > 0) {
      node.right = this.rotateRight(node.right)
      return this.rotateLeft(node)
    }

    return node
  }

  inorder(node = this.root, res = []) {
    if (!node) return res
    this.inorder(node.left, res)
    res.push(node.value)
    this.inorder(node.right, res)
    return res
  }
}

const avl = new AVLTree()

avl.insert(10)
avl.insert(20)
avl.insert(30)  // triggers rotation
avl.insert(40)
avl.insert(50)
avl.insert(25)

console.log(avl.inorder()) // Balanced sorted output
