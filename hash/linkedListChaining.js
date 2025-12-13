
class Node{
  constructor(key,value){
    this.key=key
    this.value=value;
    this.next=null;
  }
}

class HashTable{
  constructor(size){
    this.table=new Array(size);
    this.size=size;
  }
  hash(key){
    let total=0;
    for (let i = 0; i < key.length; i++) {
      total+=key.charCodeAt(i)
    }
    return this.size%total;
     
  }
  set(key,value){
    let index=this.hash(value);
    if(!this.table[index]){
      this.table[index]=new Node(key,value);
    }
    let curr=this.table[index];
    while(curr){
      if(curr.key==key){
        curr.value=value
        return 
      }
      if(!curr.next)break;
      curr=curr.next;
    }
    curr.next=new Node(key,value  )
  }
  
  get(key){
    let index=this.hash(key);
    let curr=this.table[index];
    while(curr){
      if(curr.key==key){
        return curr.value;
      }
      curr=curr.next
    }
    return undefined;
  }
  remove(key){
    let index=this.hash(key);
    let curr=this.table[index];
    let prev=null;
  
    while(curr){
      if(curr.key==key){
        if(prev){
          prev.next=curr.next;
        }else{
          this.table[index]=curr.next
        }
        return true
      }
      prev=curr;
      curr=curr.next
    }
    return false
  }
}

const ht = new HashTable()

ht.set("name", "Dilshad")
ht.set("age", 23)
ht.set("eman", "collision demo") // likely collision

console.log(ht.get("name")) // Dilshad
console.log(ht.get("age"))  // 23

ht.remove("age")
console.log(ht.get("age")) // undefined
