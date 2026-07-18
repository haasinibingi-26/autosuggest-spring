// alert("Your first website")
console.log("HELLO JS")

data={
    "Name" : "John";
    "Gender" : "Male";
}



var users=[
    {
        "Name":"John Doe";
        "Gender":"Male";
        "img":"john.png"; 
    },
    {
       "Name":"Jane Doe";
       "Gender":"Female";
       "img":"jane.png";  
    }
]

var id=0;

function toggleUser(){
    id=(id+1)%2
    
}
