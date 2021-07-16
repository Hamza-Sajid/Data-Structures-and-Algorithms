
class Stack{
    constructor(){
        this.items = ["This","is","Humza"];
        this.size = 15;
    }
    printStack(){

        for (let i=0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }
    size(){
        return this.size;
    }
}

let myStack = new Stack();
