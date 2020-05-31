


$().ready(function (){

    var result=sessionStorage.getItem("loggedIn");
   if(result!="true"){
     $().load('login.html');
   }else{
    $('#signInView').text('Log Out');

   }
});


function LoginFunction(){
    var values={}
    $.each($('#signInForm').serializeArray(),function(i,field){
        values[field.name]=field.value;
    });
    // console.log(values.email);

    var email=values.email;
    var passw=values.password;
    if(email=="lilly")
    {
        if(passw=="password123")
        {
            
            sessionStorage.setItem("loggedIn","true");
            window.location='about.html';
            //$().load('about.html');
        }else{
            alert("password incorrect");
        }

    }
    else
    {
     alert("Failure");   
    }

}



function LogOut(){
    sessionStorage.setItem("loggedIn","false");
    window.location='index.html';

}