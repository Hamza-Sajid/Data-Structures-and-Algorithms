class Stack{
    constructor()
  {
        this.items = ["This" ,"Is" , "Humza"];
        this.size = 15;
    }
    

    clear()
  {
        this.items=[]
        this.size =0;
        console.log("Cleared")
        return this.items;
    }

    toStringMethod()
  {
        let str;
        str = this.items.toString();
        console.log(str);
    }
    print()
  {

        for (let i=0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

let task4 = new Stack();
task4.toStringMethod();
task4.clear();
