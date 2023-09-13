/*  Description
Create a Json Object having field-

name=”Json”
type=”Exchange format”
similarTypes=[“XML”,”YML”,”CSV”]
rating=10
 

Now after creating this Json Object wrap it in a string and then use JSON.parse method to parse it into a Javascript object and then print that Javascript object.  */


const json=`{
    "name":"JSON",
    "type":"Exchange format",
    "similarTypes":["XML","YML","CSV"],
    "rating":10}`
    var jsObj=JSON.parse(json);
    console.log(jsObj);
