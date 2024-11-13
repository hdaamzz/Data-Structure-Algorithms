class HashTable{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }

    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key,value){
        const index=this.hash(key);
        const bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]];
        }else{
            let sameKeyItem=bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                sameKeyItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
       
    }
    get(key){
        const index=this.hash(key);
        const bucket=this.table[index];
        if(!bucket){
            return this.bucket[index]
        }else{
            let sameKeyItem=bucket.find(item=>item[0]===key);
            if(sameKeyItem){
                return sameKeyItem
            }
        }
        return undefined
    }
    remove(key){
        const index=this.hash(key);
        const bucket=this.table[index];
        if (bucket) {
            const sameKeyItem=bucket.find(item=>item[0]===key)
            if(sameKeyItem){
               return bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
                
            }
        }
    }
}

const table=new HashTable(10);
table.set("name","manu");
table.set("nema","munna");
// console.log(table.get("name"));

table.display()