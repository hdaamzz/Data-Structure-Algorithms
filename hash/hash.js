class HashTable{
    constructor(size){
        this.table =new Array(size)
        this.size=size
    }
    hash(key){
        let total=0;
        for (let i = 0; i < key.length; i++) {
            total+=key.charCodeAt(i)
            
        }
        return total%this.size;
    }

    set(key,value){
        const index=this.hash(key);
        let bucket=this.table[index];
        if(bucket){
            let SameValues = bucket.find( item=> item[0]===key);
            if(SameValues){
                SameValues[1]=value
            }else{
                bucket.push([key,value])
            }

        }else{
            this.table[index]=[[key,value]];
        }
        
    }
    get(key){
        const index=this.hash(key);
        let bucket=this.table[index];
        if(bucket){
            let SameValue=bucket.find(item=>item[0]===key);
            if(SameValue){
                return SameValue[1]
            }
        }
    }
    remove(key){
        const index=this.hash(key);
        let bucket=this.table[index]
        if(bucket){
            let SameValue=bucket.find(item=>item[0]===key)
            if(SameValue){
                bucket.splice(bucket.indexOf(SameValue),1)
            }
        }

    }
    display(){
        for (let index = 0; index < this.table.length; index++) {
            if(this.table[index]){
                console.log(index,this.table[index]);
                
            }
            
        }
    }

    loadFactor(){
        let entries=0;
        for(let bucket of this.table){
            if(bucket){
                entries+=bucket.length
            }
        }
        return entries/this.size
    }
}


const table=new HashTable(5);
table.set("name","shafi")



table.set("nema",54)
table.set("2",34)
table.display()
console.log(table.loadFactor());
