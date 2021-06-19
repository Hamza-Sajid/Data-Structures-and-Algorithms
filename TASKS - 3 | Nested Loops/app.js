//Task 1-Print all the members of this 2d- array using

 var arr=[ [1, 2], [3, 4], [5, 6] ];

 for(var i=0; i<arr.length; i++)
 {

   for(var i=0; i<arr.length; i++)
   {
     console.log(arr[i]);
   }
 }

//End of the task sucessfully---//

//Task -2 Searching inside 2d array using for loop


var arr2 = [["cat", "rabbit"], ["pigeon", "parrot"], ["goldfish", "whale"]];

 for(var i=0; i<3; i++)
  {
      for(var a=0; a<4; a++)
{
     if(arr2[i][a]=="cat" || arr2[i][a]=="rabbit")
      {
       console.log("Pet Animals");
              }

      else if   (arr2[i][a]=="pigion" || arr2[i][a]=="parrot")
          {
      console.log("Pet Birds");
         }

        else if(arr2[i][a]=="goldfish" || arr2[i][a]=="whale")
         {
           console.log("Fish");
            }
    }
}

//--- Task ended sucessfully
