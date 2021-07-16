class Stack{
    constructor(){
        this.items = ["This is " ,"Humza"];
        this.size = 10;
    }
    
    stackclear(){
        this.items=[]
        this.size =0;
        console.log("Cleared");
        return this.items;
    }

    toStringMethod(){
        let str;
        str = this.items.toString();
        console.log(str);
    }
    print(){

        for (let i=0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

let task4 = new Stack();
task4.toStringMethod();
task4.stackclear();
