class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){ //key type is string. converting key into numberic value makes more complexity
    let total = 0
    for(let i =0; i< key.length;i++){
        total+=key.charCodeAt(i)
    }
    return total % this.size
    }
    set(key, value){
        const index = this.hash(key)
       
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKeyItem = bucket.find(item=>item[0]===key)//item zero nokkunnathinte karanam enthannu vechal
            if(sameKeyItem){
                sameKeyItem[1]=value//ullile arrayil 0 th position lanu key ullath athu kondanu
            }else{
                bucket.push([key,value])
            }
        }
    
    }
    get(key){
        const index = this.hash(key)
        // return this.table[index]
        const bucket  = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    remove(key){
        const index = this.hash(key)
        
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key ) 

            if(sameKeyItem){
                
                bucket.splice(bucket.indexOf(sameKeyItem),1)

            }
        }
    }
    display(){
        for(let i =0 ; i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}
const table  = new HashTable(50)
table.set("name","bruce")
table.set("age",25)
table.display()
console.log(table.get('name'))
// table.remove('name')
table.set('mane','Clark')
table.set('aeg',50)
table.display()


// class HashTable{
//     constructor(size){ // initialize a fixed size array as table
//         this.table=new Array(size)
//         this.size = size
//     }
//     hash(key){
//     let total = 0
//     for(let i = 0 ; i< key.length ; i++){
//         total+=key.charCodeAt(i)
//     }
//     return total % this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         //this.table[index ] = value
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const sameKeyItem = bucket.find(item=>item[0] ===key)
//             if(sameKeyItem){
//                 sameKeyItem[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         const index = this.hash(key)
//         // return this.table[index]
//         const bucket = this.table[index]
//         if(bucket ){
//             const sameKeyItem = bucket.find(item=>item[0]==key)
//             if(sameKeyItem){
//                 return sameKeyItem[1]
//             }
//         }
//         return undefined
//     }
//     remove(key){
//         const index = this.hash(key)
//       const bucket =  this.table[index]
//       if(bucket ){
//           const sameKeyItem = bucket.find(item=>item[0]==key)
//           if(sameKeyItem){
//               bucket.splice(bucket.indexOf(sameKeyItem),1)
//           }
//       }
//     }
//     display(){
//         for(let i= 0 ; i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }
// const tab = new HashTable(10)
// tab.set("aswanth",'mean')
// tab.set("liji",'flutter')
// tab.set('irfan','mern')
// tab.set('adil','cyber')
// tab.set('khaiz','mern')
// tab.set('abhijit','mean')
// tab.set('nazil','mechineLearning')
// tab.set('anvar','gameer')
// tab.display()
// tab.remove('nazil')
// console.log(tab.get('adhil'))
// tab.display()