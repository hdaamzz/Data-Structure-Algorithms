class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left==null){
                root.left=node;
            }else{
                this.insertNode(root.left,node)
            }
        }else if(node.value > root.value){
            if(root.right == null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    search(root,value){
        if(root){
            if(value == root.value){
                return true
            }else{
                if(value < root.value){
                   return this.search(root.left,value)
                }else if(value>root.value){
                   return this.search(root.right,value)
                }
            }
        }else{
            return false
        }  
    }
    min(root){
        if(root){
            if(root.left){
               return this.min(root.left)
            }else{
                return root.value
            }
        }
    }
    max(root){
        if(root){
            if(root.right){
               return this.max(root.right)
            }else{
                return root.value
            }
        }
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(!root){
            return null
        }
        if(value < root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }else if(!root.left ){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root

    }
    levelOrder(){
        if (this.root === null) {
            console.log("The tree is empty");
            return;
        }
        
        let curr=this.root;
        let queue=[]

        queue.push(curr);
        while(queue.length){
            let node=queue.shift()
            console.log(node.value);
            if(node.left){
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    isValidBst(root,min,max){
        if(!root){
            return true
        }
        if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
            return false;
        }
        return(
            this.isValidBst(root.left,min,root.value) &&
            this.isValidBst(root.right,root.value,max)
        )
    }
    isTwoValid(root1,root2){
        let first=this.isValidBst(root1)
        let second=this.isValidBst(root2)
        return first&&second
    }

    findHeight(root){
        if(root==null){
            return -1
        }
        
        const left=this.findHeight(root.left);
            
        
        const right=this.findHeight(root.right);
        
        
        return Math.max(left,right)+1

    }

    kthSmallest(k){
        let stack=[]
        let node=this.root;
        while(node||stack.length){
            while(node){
                stack.push(node)
                node=node.left
            }
            node=stack.pop()
            if(--k === 0){
                return node.value
            }
            node=node.right
        }
        return null
    }

    findClosestValue(target){
        let closest=this.root.value
        
        function traverse(root){
            if(!root){
                return 
            }
            if(Math.abs(root.value-target) < Math.abs(closest-target)){
                closest=root.value
            }
            if(target < root.value){
                traverse(root.left)
            }else if(target > root.value){
                traverse(root.right)
            }
        }
        traverse(this.root)
        return closest
    }

}


function isTwo (bst1,bst2){
    let left=bst1.isValidBst(bst1.root)
    let right=bst2.isValidBst(bst2.root)
    return left&&right
}



const bst = new BinarySearchTree()
const bst2 =new BinarySearchTree()

bst.insert(99);
bst.insert(19);
bst.insert(199);
bst.insert(299);
bst.insert(29);
bst.insert(259);
bst.insert(9);
bst.insert(59);
bst.insert(159);
bst2.insert(299);
bst2.insert(29);
bst2.root.left = new Node(90090);
bst2.insert(259);
bst2.insert(9);
bst2.insert(59);
bst2.insert(159);
    
console.log(isTwo(bst,bst2));
 

