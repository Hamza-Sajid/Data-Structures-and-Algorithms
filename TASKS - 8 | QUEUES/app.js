class Task1{
    constructor(){
        this.items = ["I am" ,"Humza"];
        this.size = 10;
    }
    
    stackclear(){
        this.items=[]
        this.size =0;
        console.log('Stack is cleared!')
        return this.items;
    }

    toStringMethod(){
        let str;
        str = this.items.toString();
        console.log(str);
    }
    printStack(){

        for (let i=0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

let Task1 = new Stack();
Task1.toStringMethod();
Task1.stackclear();
