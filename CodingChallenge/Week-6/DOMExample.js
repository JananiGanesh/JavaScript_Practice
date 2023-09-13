/*
Description
Create a demo.html file having two paragraph tag and two anchor tags inside the body tag.

Now write the code in the console in the browser to change-

1.The background color of the whole html page to green.

To list all the child tag inside the body tag in console.
To change the title of the html page from the console window.
*/

 //To set background color to green
 document.documentElement.style.backgroundColor="Green";
 //To see all data and tag inside the body tag in html page
 document.documentElement.childNodes[1].childNodes
 // to change the title of the page via console.
 document.title="Title changed"
