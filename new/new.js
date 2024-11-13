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
        let node=new Node(value)
        if(this.isEmpty()){
            this.root=node;
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(!root){
            return 
        }
        if(node.value < root.value){
            if(root.left==null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else if(node.value > root.value){
            if(root.right==null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){
        if( value == root.value){
            return true
        }else{
            if(value < root.left){
                return this.search(root.left,value)
            }else if(value > root.right){
                return this.search(root.right,value)
            }
        }
        return false
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
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
    deleteNode(root,value){
        if(!root){
            return null
        }
        if(value < root.value ){
            root.left=this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right=this.insertNode(root.right,value)
        }else{
            if(!root.left && !root.rigth){
                return null
            }else if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right)
            
        }
    }
}

const bst=new BinarySearchTree()
bst.insert(100);
bst.insert(10);
bst.insert(20)
bst.insert(102);
bst.insert(202)
bst.inOrder(bst.root)

