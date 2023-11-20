function rectPerimeter(width, height) {
    return 2 * width + 2 * height;
  }
  
  // define width
  let w = 5; // change value as you need
  // define height
  let h = 8; // change value as you need
  
  // call rectPerimeter with params i.e. width and height
  let perimeter = rectPerimeter(w, h);
  
  // show perimeter to console
  console.log(perimeter);

  var a = 10;
  console.log(a);
  function func() {
      var b = 20;
      a = 30;
      console.log(b);
      console.log(a);
  }
  func();
  console.log(a);
  
  let a = 10;
console.log(a);
function func() {
    let b = 20;
    let a = 30;
    console.log(b);
    console.log(a);
}
func();
console.log(a);

let conf = confirm("You must be at least 18 years old to view this content.");
let name = prompt("What's your name?");
let age = prompt("What's your age?");

if (age>=18) {
alert("Welcome!");
}
else {
alert("Sorry, you must be at least 18 years old to view this content.");

}
for(var y=2019; y <= 2023; y++){ 

    if( (y % 4 == 0 && y % 100 == 0) || y % 400 == 0 ) { 
     days = days-366;
     number_of_long_years++; 
    } else {
        days=days-365;
    }
    
    year++;
    
    }
    function percentage(num, per)
{
  return (num/100)*per;
}
          
console.log(percentage(1000, 47.12));

   
// Javascript program to check if three  
// sides form a triangle or not  
  
// function to check if three side 
// form a triangle or not  
function checkValidity(a, b, c)  
{  
    // check condition  
    if (a + b <= c || a + c <= b || b + c <= a)  
        return false;  
    else
        return true;  
}  
  
// Driver function  
   
    let a = 7, b = 10, c = 5;  
      
    if (checkValidity(a, b, c))  
        document.write("Valid");  
    else
        document.write("Invalid"); 

        if (x >= 10 && x <= 20) {
            // code to execute if x is between 10 and 20
          } else {
            // code to execute if x is outside the range of 10 and 20
          }  


          function calculateWeight(earthWeight, planet) {
            const checkPlanet = ["Mercury", "Venus", "Mars", "Jupiter", ];
            if (checkPlanet.indexOf(planet) == -1) { 
             return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter.";
            } else if (planet === "Mercury") {
              return earthWeight * 0.378;
            } else if (planet === "Venus") {
              return earthWeight * 0.907;
            } else if (planet === "Mars") {
              return earthWeight * 0.377;
            } else if (planet === "Jupiter") {
              return earthWeight * 2.36;
            } 
            
          };
          var Person = {
            firstName: John,
            lastName:Smith,
            fullName: function (){
                this.fullName = this.firstName 
                +  + this.lastName;
            }
      };
      Person.fullName();
      console.log(Person.fullName);