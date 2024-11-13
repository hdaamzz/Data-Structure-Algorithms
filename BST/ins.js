class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }

    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right ==null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else{
                if(value < root.value){
                   return this.search(root.left,value)
                }else{
                   return this.search(root.right,value)
                }
            }
        }       
       
    }

    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);             
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
            
        }
    }

    levelOrder(){
        let queue=[];
        queue.push(this.root)
        while(queue.length){
            let curr= queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
            
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
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root==null){
            return root
        }
        if(value <root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }
            root.value=this.min(root.right);
            root.right=this.deleteNode(root.right,root.value);
        }
        return root
    }
    isValidBST(root,max = Number.POSITIVE_INFINITY, min = Number.NEGATIVE_INFINITY){
        if(!root){
            return true
        }
        if(root.value <= min||root.value >=max){
            return false
        }
        return (
            this.isValidBST(root.left,root.value,min)&&this.isValidBST(root.right,max,root.value)
        )
    }
    isValidBST1(root, min = null, max = null) {
        if (!root) {
          return true;
        }
        if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
          return false;
        }
        return (
          this.isValidBST1(root.left, min, root.value) &&
          this.isValidBST1(root.right, root.value, max)
        );
      }

}

const bst=new BinarySearchTree();


bst.insert(10);
bst.insert(20);
bst.insert(30);bst.insert(3);bst.insert(8);
bst.insert(40);bst.insert(50);
bst.insert(60);bst.insert(70);
bst.insert(80);bst.insert(90);
bst.insert(100);bst.insert(110);
bst.insert(120);

console.log(bst.isValidBST1(bst.root))
// bst.preOrder(bst.root)
// bst.levelOrder()
// console.log(bst.min(bst.root));

// console.log(bst.max(bst.root));
// bst.delete(120)
// bst.delete(110)
// bst.delete(60)
// bst.levelOrder();
