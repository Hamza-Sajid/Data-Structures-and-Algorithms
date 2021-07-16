class Stack
{
    constructor()
    {
        this.items = ["This","Is","Humza"];
        this.size = 15;
    }


pushFirst(input)
{
    this.items.push(input);
    this.size++;
}

pushSec(inputValue)
{

    this.items.length = this.items.length + 1;
    
    this.items[this.items.length - 1] = inputValue;
    
    console.log(this.items);
    
}

pop()
{

    this.items.pop();
    this.size--;
}

peek(){
    
    console.log(this.items[this.items.length-1]);
}


print(){

    for (let i=0; i < this.items.length; i++){
        console.log(this.items[i]);
    }
}

}


let myStack = new Stack();
myStack.pushFirst("Ali Ahmad");



myStack.pushSec("Adnan"); 

myStack.pop();

myStack.peek();

myStack.print();
