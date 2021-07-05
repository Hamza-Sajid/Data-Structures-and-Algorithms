let books = [
{
name: "The Lean Startup",
topics: ["entrepreneurship","startups"],
},
{
name: "War and Peace",
topics: ["peace", "politics"],
}];


//To add book

function addBook() {

  books.length=books.length+1;

  books[books.length-1] =
  {
    name:"Calculus",
    topics:["Advance Maths"]
  }
console.log("Book is added!");
}

//To delete book

function delBook() {

  books.pop();
}

addBook();

delBook();

//to print the values

for(key in books)
{
  console.log(books[key].name);
  console.log(books[key].topics);
}
