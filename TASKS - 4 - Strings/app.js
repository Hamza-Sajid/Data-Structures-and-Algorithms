//----TASK-1------
//Traversing

var name="Humza";

for(var i=0; i<name.length; i++)
{
  console.log(name[i]);
}

//printing length

console.log(name.length);

//----Task 2------
//Take any 2 strings and concatinate them

var city="Attock";
var country="Pakistan";

console.log("I Live In "+city+" "+country);


//-------TASK-3-------
//Suppose you are given a string: ‘Karachi’. Convert it to ‘Kolachi’ (Hint: Need to look at appropriate indices and replace them)

var task_3="Karachi";
task_3=task_3.replace("a","o");
task_3=task_3.replace("r","l");
console.log(task_3);


//TASK----4-----

var string="Node.js";
string=string.substr(0,4, string.length);
console.log(string);


//TASK----5-----

var string2="Reactj";
string2=string2+"s";

console.log(string2);
