let userObject = {

userName: "Philip",

fatherName: "Norman",

className: "four",

};

userObject.userName="Humza Sajid";
userObject.fatherName="Sajid Hussain";
userObject.className="BS-CS";
for(key in userObject)
{
  console.log(key+" : "+userObject[key]);
}
