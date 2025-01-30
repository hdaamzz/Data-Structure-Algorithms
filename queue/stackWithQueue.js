

class StackUsingQueues {
    constructor(){
        this.q1=[];
        this.q2=[];
    }
    
    push(value){
        this.q2.push(value);
        while(this.q1.length>0){
            this.q2.push(this.q1.shift())
        }
        [this.q1,this.q2]=[this.q2,this.q1];
    }
    
    pop(){
        if(this.isEmpty()){
            console.log("stack is empty");
            return null;
        }
        return this.q1.shift()
    }
    peek(){
        if(this.isEmpty()){
            console.log("stack is empty");
            return null;
        }
        return this.q1[0];
    }
    isEmpty(){
        return this.q1.length==0
    }
    print(){
        if(this.isEmpty()){
            console.log("stack is empty");
            return null;
        }else{
            console.log(this.q1.toString())
        }
    }
}




const queue=new StackUsingQueues();
queue.push(10);
queue.push(20);
queue.push(25);
queue.push(30);
queue.push(40);
queue.pop();
queue.print();