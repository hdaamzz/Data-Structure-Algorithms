class Node{
    constructor(value){
        this.value = value;
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root ===null
    }
    insert(value){
        const newNode =new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{

                this.insertNode(root.right, newNode)
                
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(value  === root.value){
                return true
            }else if(value <root.value){
                return this.search(root.left,value)
            }else {
                return this.search(root.right,value)
            }
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            
            return this.max(root.right)
        }
    }
   
    delete(value){
        this.root = this.deleteNode(this.root,value) // It calls the helper function deleteNode, starting from the root of the tree, and updates the root of the tree with the returned result from deleteNode.
    }
    deleteNode(root,value){  // here root means the current node being examined
        if(root ===null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left ,value)  //If value is less than root.value, recursively call deleteNode on the left subtree (root.left).
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value) //If value is greater than root.value, recursively call deleteNode on the right subtree (root.right).
        }else{
            if(!root.left && !root.right){ //No Children: If the node to be deleted has no children (!root.left && !root.right), return null.
                return null
            }
            if(!root.left){ //One Child: If the node has only one child, return that child (root.left or root.right).
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right) //Find the minimum value in the right subtree using the min function.  //Replace the value of the node to be deleted with this minimum value (root.value = this.min(root.right)).
            //or we can take the max value from the left section
            root.right = this.deleteNode(root.right,root.value) //Recursively delete the node with the minimum value in the right subtree (this.deleteNode(root.right, root.value)).
        }
        return root
        
    }
    isValidBST(root, min = null, max = null) {
        if (!root) {
          return true;
        }
        if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
          return false;
        }
        return (
          this.isValidBST(root.left, min, root.value) &&
          this.isValidBST(root.right, root.value, max)
        );
      }

      // Find the closest value to a given number in the BST
      findClosestValue(target) {
        let closest = this.root.value;
    
        function traverse(root) {
          if (!root) {
            return;
          }
          if (Math.abs(root.value - target) < Math.abs(closest - target)) {
            closest = root.value;
          }
          if (target < root.value) {
            traverse(root.left);
          } else if (target > root.value) {
            traverse(root.right);
          }
        }
    
        traverse(this.root);
        return closest;
      }



      
      findHeight(root){
        if(!root){
            return -1
        }
        const leftHeight = this.findHeight(root.left)
        const rightHeight = this.findHeight(root.right)
        return Math.max(leftHeight,rightHeight) +1
      }


      findSecondLargest(root) {
        if (!root || (!root.left && !root.right)) {
            return null; // Need at least two nodes to have a second-largest
        }

        let parent = null;
        let current = root;

        // Find the largest node (rightmost node)
        while (current.right) {
            parent = current;
            current = current.right;
        }

        // Case 1: If the largest node has a left subtree, the second-largest is the largest in that subtree
        if (current.left) {
            return this.findMax(current.left);
        }

        // Case 2: If the largest node doesn't have a left subtree, the second-largest is its parent
        return parent ? parent.value : null;
    }
}
const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
// bst.insert(32)
bst.insert(3)
bst.insert(7)
// bst.insert(40)
// bst.insert(12)
console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root,1))
console.log(bst.search(bst.root,40))
// bst.delete(7)value

// bst.inOrder(bst.root)

// bst.preOrder(bst.root)
console.log(bst.second(bst.root.right))
// bst.postOrder(bst.root)
// console.log('tree is empty',bst.isEmpty())
// console.log(bst.isValidBST(bst.root)); // Output: true
// console.log(bst.findClosestValue(12)); // Output: 13
