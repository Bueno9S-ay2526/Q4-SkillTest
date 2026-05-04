var u, p
u = "Con2Solee";
p = "C0nn0r!sH0mo";

function LogIn() {
    let uinput = document.getElementById("userN").value;
    let pinput = document.getElementById("passW").value;

    if (u === uinput && p === pinput) {
        r = "Welcome back, Con2Solee! :D";
        
    } else {
        r = "WRONG!";
        
    }
    document.getElementById("result").innerHTML = r;
}
