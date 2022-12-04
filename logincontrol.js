function isAlpha (ch) {
    if (ch.length<1) {
        return false ;
    }
    else {
        for (let i=0;i<ch.length;i++) {
            if (ch[i].toUpperCase()<'A' || ch[i].toUpperCase()>'Z') {
                return false;
            } 
        }
    }
    return true;
}
function isPass(ch) {
    if (ch.length<8) {
        return false;
    }
    
}
function login() {
    user=document.getElementById("user").value;
    pass=document.getElementById("pass").value;
    if (isAlpha(user)==false ) {
        document.getElementById("wrong-user").innerHTML=`<div class="wrong">Wrong Username</div>`;
        return false;
    }
    else {
        document.getElementById("wrong-user").innerHTML="";
    }
    if (isPass(pass)==false) {
        document.getElementById("wrong-pass").innerHTML=`<div class="wrong">Wrong Password</div>`;
        return false;
    }
    else {
        document.getElementById("wrong-pass").innerHTML="";
    }


}
function forget() {
    email=document.getElementById("email").value;
    if (email.length<1) {
        return false;
    }
    if (email.lastIndexOf("@")==-1) {
        return false;
    }
    else {
        if (email.lastIndexOf(".")==-1 || email.lastIndexOf(".")<email.lastIndexOf("@")){
            return false;
        }
    }

    
}