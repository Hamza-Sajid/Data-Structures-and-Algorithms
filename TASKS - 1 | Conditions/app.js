//Task 1
//------------------
var number=0;

//to check it's 0 or 1

if(number==1)
{
  console.log("True");

}
else {
  console.log("False");
}
//------------------

// Task 2
//------------------

var num1=4,num2=7;
if(num1+num2==11)
{
  console.log("True");
}
else {
  console.log("False");
}

//------------------

// Task 3

//------------------
var newNumber=3;

if(newNumber<10)
{
  console.log("Less than 10");
}
else if (newNumber>10)
{
  console.log("Grreater Then 10");
}
else {
  console.log("Number is euall to 10");
}
//------------------

// Task 4 -- Even Odd

//------------------

var checkNumber=2;
if(checkNumber%2==0)
{
  console.log("It's EVEN NUMBER");
}
else {
  console.log("It's Odd");
}
//------------------

// Task 5 -- Function to check diffrent values

function passMeValue(value1,value2) {

if(value1=="lion" || value2=="leopard")
  return "WildAnimals";

else if(value1=="cats" || value2=="rabbits")
  return "PetAnimals";

else {
  return "Unknown"
}
}

var out=passMeValue("lion","leopard")
console.log(out);
