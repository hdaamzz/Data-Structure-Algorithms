
    class linkedList {
        constructor(value){
            this.value  = value 
            this.next = null
        }
    }
    class Stack{
        constructor(){
        this.top = null
        this.count =0
        }
        isEmpty(){
            return this.count ===0
            
        }
        getSize(){
            return this.count
        }
        push(value){
            const node = new linkedList(value)
            if(this.top){
                node.next =this.top
                
            }
            this.top =node
            this.count++
        }
        pop(){
            if(this.isEmpty()){
                return 'stack empty'
            }
            let value = this.top.value
            this.top = this.top.next
            this.count--
            return value
        }
        peek(){
            if(this.isEmpty()){
                return 'stack is empty'
            }
            return this.top.value
        }
        toArray(){
            let arr = []
            let cur = this.top
            while(cur){
                arr.push(cur.value)  //this is for convetting to array
                cur = cur.next

            }
            return arr
        }
        print(){
            if(this.isEmpty()){
                return 'stackis empty'
            }
            let cur = this.top
            let res=''
            while(cur){
                res +=`${cur.value} `
                cur =cur.next
            }
            console.log(res)
        }
        clear(){
            this.top = null
            this.count =0
        }
    }
    
    const stack = new Stack()
    
    for (let i = 0; i < 10; i++) {
        stack.push(i) 
    }
    
    stack.pop()
    stack.peek()
    stack.pop()
    stack.print()

// const LinkedList =require('../linkedList/linkedList2')
// class LinkedListStack{
//     constructor(){
//         this.list = new LinkedList()
//     }
//     push(value){
//         this.list.prepend(value)
//     }
//     pop(){
//         this.list.removeFromFront()
//     }
//     peek(){
//         return this.head.value
//     }
//    isEmpty(){
//     return this.list.isEmpty()

//    }
//    getSize(){
//     this.list.getSize()
//    }
//    print(){
//     return this.list.print()
//    } 
// }
// const stack = new LinkedListStack()
// console.log(stack.isEmpty())
// stack.push(10)
// stack.push(20)
// stack.push(30)

