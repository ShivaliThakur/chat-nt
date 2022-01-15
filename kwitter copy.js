

function Generate(){
    lName= document.getElementById("UserLastName").value;
    fName= document.getElementById("UserFirstName").value;
    localStorage.setItem("LastName", lName);
    localStorage.setItem("FirstName", fName);

    if(lName & fName == ""){
        document.getElementById("check").innerHTML="Please put your First and Last name";
    }
    else if(fName == ""){
        document.getElementById("check").innerHTML="Please put your First and Last name";
    }
    else if(lName == ""){
        document.getElementById("check").innerHTML="Please put your First and Last name";
    }
    else{
        
        
        randomNo= Math.floor(Math.random() * 100);
        randomNo2= Math.floor(Math.random() * 50);
        un1= fName+lName+randomNo+"  ";
        un2= fName+"*"+lName+ randomNo2+ "  ";
        un3= fName+lName+"@"+Math.floor(Math.random() * 100)+"  ";
        Username=[un1, un2, un3];
        img="<img src='man.png' class='logo'><br>"
        label1="<label> Suggested User names </label><br>";
        label2="<label style='color: darkseagreen; font-size: smaller; font-family: Comic;' id='SuggNames'>  </label><br>";
        label3="<h6> User Name : </h6>";
        input="<input type='text' id='userName' placeholder= 'User Name'><br><br>";
        button= "<button id='login' class='btn btn-success' onclick='addUser()'> Login</button>";
        combine= img+label1+ label2+ label3+ input+button;
        document.getElementById("output1").innerHTML= combine;
        document.getElementById("SuggNames").innerHTML=Username;
        document.getElementById("login_div").innerHTML=" ";
    }
}


function addUser(){
    add_user= document.getElementById("userName").value;
    localStorage.setItem("UserName", add_user);
    window.location= "kwitter_room.html";
}


