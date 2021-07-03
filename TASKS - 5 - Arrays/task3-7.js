
//----TASK-3----------




function task3() {

var arr3= [2, 2, 1, 0, 9, 39, 20] ;
var number=0;
for(var b=0; b<arr3.length; b++)
{
  if (arr3.includes(2))
  {
    number=number+1;
    console.log(number);
  return number;
  }
else {
return 0;
}}}

var abcd=task3();
console.log(abcd);



//Task---4------
var arr4= [2, 3, 0, 1, 4, 6, 7, 7];
arr4[2]=200;

//-----task-5--------
var arr5=[1, 9, 20, 20, 4, 0, 3, 4];

arr5=arr5.push(9);

//---task-6--------
var arr6=[0, 3, 4, 5, 6, 9, 0];

arr6=arr6.unshift(1);

//---task-7------
var array=[3, 8, 10, 12, 45, 34, 34, 34, 2, 2, 0];

array.splice(3, 0, 7);

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
