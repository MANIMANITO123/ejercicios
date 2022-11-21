function eva() {
    var b = parseFloat(document.getElementById('a').value);

    var c=Math.sin(b)+Math.cos(b);
    var d=Math.pow(c,2);
    var f=1+2*Math.sin(b)*Math.cos(b);
    let l;
    if (d == f){
        l="la identidad es CORRECTA";
    } else {
        l="la identidad es INCORRECTA";
    }
    document.getElementById("ta").innerHTML = d;
    document.getElementById("te").innerHTML = f;
    document.getElementById("ti").innerHTML = l;

    var g=Math.pow(Math.sin(1),2);
    var h=Math.pow(Math.cos(1),2);
    var k=1-2*Math.cos(b)-3*h*b;
    var m=k/g*b;
    var p=1-Math.cos(b);
    var n=1-3*Math.cos(b)/p;
    let z;
    if (m == n){
        z="la identidad es CORRECTA";
    } else {
        z="la identidad es INCORRECTA";
    }
    document.getElementById("to").innerHTML = m;
    document.getElementById("tu").innerHTML = n;
    document.getElementById("tua").innerHTML = z;

 }