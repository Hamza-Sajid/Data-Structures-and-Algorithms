class Task2{
    constructor(){
        this.items = ["This is" ,"Humza"];
        this.size = 10;
    }

  
push2(input){
    this.items.push(input);
    this.size++;
}

push3(inputValue){

    this.items.length = this.items.length + 1;
    
    this.items[this.items.length - 1] = inputValue;
    
    console.log(this.items);
    
}

pop(){
    this.items.pop();
    this.size--;
}

peek(){
    //find last item
    console.log(this.items[this.items.length-1]);
}
print(){

    for (let i=0; i < this.items.length; i++){
        console.log(this.items[i]);
    }
}

}

let Lite = new Stack();
Lite.push2("Ahmad");
Lite.print();

Lite.push3("Push-3"); 

Lite.pop();
Lite.print();

Lite.peek();
Lite.print();



