class Stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length===0;
    }
    print(){
        console.log(this.items.toString());
    }
    size() {
        return this.items.length;
    }
    reverse(){
        let reverseItems=[]
        while(!this.isEmpty()){
            reverseItems.push(this.pop())
        }
        this.items=reverseItems
    }
    findSecondLargest(){
        if (this.size() < 2) {
            throw new Error("Stack must have at least two elements.");
        }
        let largest=-Infinity;
        let second=-Infinity;
        
        let temp=[];
        while(!this.isEmpty()){
            let curr=this.pop();
            if(curr > largest){
                second=largest;
                largest=curr
            }
            if(curr > second && curr !== largest){
                second=curr
            }
            temp.push(curr)
        }
        while(temp.length > 0){
            this.push(temp.pop())
        }
        return second
    }

}

const stack = new Stack();
stack.push(4)
stack.push(3)
stack.push(2)
stack.push(1)

stack.print()

console.log(stack.findSecondLargest());
