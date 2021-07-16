class Stack{
    constructor(){
        this.items = ["This" , "Is", "Humza"];
        this.size = 15;
    }

    isEmpty(){
        if (this.items.length == 0){
        console.log("Empty");
        }
        else{
        console.log("Not Empty");
        }
    }

    isFull(){
        if (this.items.length != 0){
            console.log("Stack is Full");
            }
            else{
            console.log("Stack is Empty");
            } 
    }
    printStack(){

        for (let i=0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

let myStack = new Stack();

myStack.isEmpty();

myStack.isFull();
