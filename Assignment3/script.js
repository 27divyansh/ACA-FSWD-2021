let gettoken = document.getElementById("tokenreq");
gettoken.onclick = async function()
{
    console.log("hello generating token");
    let response = await fetch('http://localhost:12345/get_token');
    
    if(response.ok)
    {
    let responsetext = await response.text();
    document.getElementById("endpoint1").innerHTML= responsetext;
    }
    else
    {
    document.getElementById("endpoint1").innerHTML= "Could not generate token";
    }
    
}



let userdata = document.getElementById("submituserdata");
userdata.onclick = async function()
{
var obj = {
        "username" : String(document.getElementById("name").value),
        "data" : String(document.getElementById("data").value),
        "token" : String(document.getElementById("token").value),
    }
    
    let response = await fetch('http://localhost:12345/register' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    });
    
    if(response.ok)
    {
    alert("Successfully Registered!");
    }
    
}


let getdata =  document.getElementById("getdata");
getdata.onclick = async function()
{
 var obj2 = {"token" : String(document.getElementById("usertoken").value)}
 
 let response = await fetch('http://localhost:12345/get_data' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj2)
    });
    
    if(response.ok)
    {
    let responsetext = await response.text();
    document.getElementById("endpoint3").innerHTML= responsetext;
    }
    else
    {
    document.getElementById("endpoint3").innerHTML= "Could not find this user";
    }
    
}


