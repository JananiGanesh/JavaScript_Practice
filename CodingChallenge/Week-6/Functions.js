/*Write a program having four methods -

*   One for printing some values say two values one is string and one is number..
*   One for calculating area of square,this method will be expecting two parameter one is edge of square and the other is the print method we created in previous step.Pass the area of square to the print method as second parameter to it,First parameter will be “Area of square is: “. The final output should be “Area of square is : calculatedArea”.
*   One for calculating area of rectangle,this method will be expecting three parameter two are length and width of rectangle and the other is the print method we created in first step.Pass the area of rectangle to the print method as second parameter to it,First parameter will be “Area of rectangle  is: “. The final output should be “Area of rectangle is : calculatedArea”.
*   One for calculating area of circle,this method will be expecting two parameter one is radius of circle and the other is the print method we created in previous step.Pass the area of circle to the print method as second parameter to it,First parameter will be “Area of circle is: “. The final output should be “Area of square is : calculatedArea”.
 

Then call the methods for each square,rectangle and circle and inside them call the print method with proper input parameters to it.*/

function square(x,print){
    print("Area of square is: ",x*x);
}
function rectangle(x,y,print){
    print("Area of rectangle is: ",x*y);
}
function circle(r,print){
    print("Area of circle is: ",3.14*r*r);
}
function print(shape,val){
    console.log(shape,val);
}
square(4,print);
rectangle(2,5,print);
circle(3,print);
