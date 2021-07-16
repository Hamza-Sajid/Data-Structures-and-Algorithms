class Stack{
    constructor(){
        this.items = ["This is" , "Humza"];
      
        this.size = 10;
    }

    isEmpty(){
        if (this.items.length == 0){
        console.log("Empty");
        }
        else{
        console.log("NOT Empty");
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
    print(){

        for (let i=0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

let task3 = new Stack();

task3.isEmpty();

task3.isFull();
