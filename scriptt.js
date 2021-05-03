form.addEventListener("submit",(event)=>{
    event.preventDefault();
 // console.log(form,username,Email,password,cpassword,tel)
  validate();
})


const validate = () => {
    const form=document.getElementById("form")
const username=document.getElementById("username").value.trim();

const password=document.getElementById("password").value.trim();
const cpassword=document.getElementById("cpassword").value.trim();
const n=document.getElementById("n").value.trim();

var a=0;
nvalidate();
epassword();
ccpassword();
cccpassword();
success(username,password,cpassword,n);


function p(){
var numbers= /^[-+]?[0-9]+$/;
if(username.match(numbers))
return true;
else
 return false
}

function l(){
    var numbers= /^[-+]?[0-9]+$/;
    if(password.match(numbers))
    return true;
    else
     return false
    }

    
function f(){
    var numbers= /^[-+]?[0-9]+$/;
    if(n.match(numbers))
    return true;
    else
     return false
    }


    function d(){
        var numbers= /^[-+]?[0-9]+$/;
        if(cpassword.match(numbers))
        return true;
        else
         return false
        }
        

    

function nvalidate(){
if(username === "")
{
    
    const  msg=document.getElementById("msg")

    msg.innerHTML="principle cannot be empty"
   var k= msg.style.visibility="visible";
   const  msgg=document.getElementById("1")
   msgg.style.visibility="visible";
   msgg.style.color="red";
   const  msggg=document.getElementById("2")
    msggg.style.visibility="hidden";

}

else if(p()==false)
{
    const  msg=document.getElementById("msg")

    msg.innerHTML="principle must be numerical digits"
   var k= msg.style.visibility="visible";
   const  msgg=document.getElementById("1")
   console.log(msgg)
   msgg.style.visibility="visible";
   msgg.style.color="red";
   const  msggg=document.getElementById("2")
    msggg.style.visibility="hidden";

}



else{
    const  msgg=document.getElementById("2")
    console.log(msgg)
    msgg.style.visibility="visible";
    msgg.style.color="green";
    const  msg=document.getElementById("msg")
  a=a+1;
    msg.innerHTML="Username cannot be empty"
   var k= msg.style.visibility="hidden";
   const  msggg=document.getElementById("1")
   msggg.style.visibility="hidden";
   msggg.style.color="red";
   console.log(a);

}
}




function epassword(){
    
    if(password === "")
    {
        const  msg=document.getElementById("eeemsg")
      
        msg.innerHTML="time cannot be empty"
       var k= msg.style.visibility="visible";
       const  msgg=document.getElementById("7")
       msgg.style.visibility="visible";
       msgg.style.color="red";
       const  msggg=document.getElementById("8")
        msggg.style.visibility="hidden";
    
    
    }
    
    else if(l()==false)
    {
        const  msg=document.getElementById("eeemsg")
      
        msg.innerHTML="time must be in numerical"
       var k= msg.style.visibility="visible";
       const  msgg=document.getElementById("7")
       msgg.style.visibility="visible";
       msgg.style.color="red";
       const  msggg=document.getElementById("8")
        msggg.style.visibility="hidden";
    
    }
    
    
    else{
        const  msgg=document.getElementById("8")
        console.log(msgg)
        msgg.style.visibility="visible";
        msgg.style.color="green";
        const  msg=document.getElementById("eeemsg")
      
        msg.innerHTML="Username cannot be empty"
       var k= msg.style.visibility="hidden";
       const  msggg=document.getElementById("7")
       msggg.style.visibility="hidden";
       msggg.style.color="red";
       a=a+1;
       console.log(a);
    }
    }


    function ccpassword(){
    
        if(cpassword === "")
        {
            const  msg=document.getElementById("eeeemsg")
          
            msg.innerHTML="rate cannot be empty"
           var k= msg.style.visibility="visible";
           const  msgg=document.getElementById("9")
           msgg.style.visibility="visible";
           msgg.style.color="red";
           const  msggg=document.getElementById("10")
            msggg.style.visibility="hidden";
        
        
        }
        
        else if(d()==false)
        {
            const  msg=document.getElementById("eeeemsg")
          
            msg.innerHTML="rate  must be in numerical"
           var k= msg.style.visibility="visible";
           const  msgg=document.getElementById("9")
           msgg.style.visibility="visible";
           msgg.style.color="red";
           const  msggg=document.getElementById("10")
            msggg.style.visibility="hidden";
        
        }
        
        
        else{
            const  msgg=document.getElementById("10")
            console.log(msgg)
            msgg.style.visibility="visible";
            msgg.style.color="green";
            const  msg=document.getElementById("eeeemsg")
          
            msg.innerHTML="Username cannot be empty"
           var k= msg.style.visibility="hidden";
           const  msggg=document.getElementById("9")
           msggg.style.visibility="hidden";
           msggg.style.color="red";
           a=a+1;
   console.log(a);
        
        }
        }



        
    function cccpassword(){
    
        if(n === "")
        {
            const  msg=document.getElementById("abc")
          
            msg.innerHTML="n cannot be empty"
           var k= msg.style.visibility="visible";
           const  msgg=document.getElementById("1234")
           msgg.style.visibility="visible";
           msgg.style.color="red";
           const  msggg=document.getElementById("123")
            msggg.style.visibility="hidden";
        
        
        }
        
        else if(f()==false)
        {
            const  msg=document.getElementById("abc")
          
            msg.innerHTML="rate  must be in numerical"
           var k= msg.style.visibility="visible";
           const  msgg=document.getElementById("1234")
           msgg.style.visibility="visible";
           msgg.style.color="red";
           const  msggg=document.getElementById("123")
            msggg.style.visibility="hidden";
        
        }
        
        
        else{
            const  msgg=document.getElementById("123")
            console.log(msgg)
            msgg.style.visibility="visible";
            msgg.style.color="green";
            const  msg=document.getElementById("abc")
          
            msg.innerHTML="Username cannot be empty"
           var k= msg.style.visibility="hidden";
           const  msggg=document.getElementById("1234")
           msggg.style.visibility="hidden";
           msggg.style.color="red";
           a=a+1;
   console.log(a);
        
        }
        }



        function success(username,password,cpassword,n){
           if(a==4){
               var s=username*(Math.pow((1+(cpassword/(n*100))),(n*password)))
               document.getElementById("si").innerHTML="Compound Intrest : " + s; 
               alert(s)
            document.getElementById("form").reset();
           }
        }
    }





