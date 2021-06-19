//Task -1
//----------------

var arr= [1, 8, 7, 3, 2, 9, 10, 12];

for(var i=0; i<arr.length; i++)
{
  if(arr[i]%2==0)
  {
    console.log("Number isn't prime");
  }
  else {
    console.log("Number is Prime");
  }
}

//----------------

//Task  -2

//----------------

 var arr2=["cat", "rabbit", "pigeon", "parrot", "goldfish"];
 for(var i=0; i<arr2.length; i++)
 {
   if(arr2[i]==="rabbit")
   {
     console.log("Rabbit");
   }
   else {
     console.log("this isn't Rabbit");
   }
 }
 //-----------------

 //Task -3

  //---------------------

  var arr3=["cat", "rabbit", "pigeon", "parrot", "goldfish"];

  function dynamicallySearc(value) {

for(var i=0; i<arr3.length; i++)
{
  if(value==arr3[i])
  {
    console.log("This is : "+arr3[i]);
    break;
  }
  else {
    console.log("Something Else");
  }
}
  }
  dynamicallySearc("cat")

//-------------------------

//Task-4 Biggest Value

var arr4=[2,0,1,6,45,89];

var max=arr4[0];
for(var i=0; i<arr4.length; i++)
{

  if(max<arr4[i])
  {
    max=arr4[i];
  }
}

console.log("Biggest value is : "+max);
//--------------


//Task-5 To Find The Samllest Value

var arr4=[2,0,1,6,45,89];

var min=arr4[0];
for(var i=0; i<arr4.length; i++)
{

  if(min>arr4[i])
  {
    min=arr4[i];
  }
}

console.log("Biggest value is : "+min);

//----------------------------
