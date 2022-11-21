function alf() {
    var a = parseFloat(document.getElementById('b').value);
    var d = parseFloat(document.getElementById('c').value);
  
    var f=Math.PI/a;
    var g=Math.PI/d;
    var h=Math.tan(f+g);
  
    var j=Math.tan(a)+Math.tan(d);
    var k=1-Math.tan(a)*Math.tan(d);
    var l=j/k;
    let z;
    if (h == l){
        z="la identidad es CORRECTA";
    } else {
        z="la identidad es INCORRECTA";
    }

    document.getElementById("ra").innerHTML = h;
    document.getElementById("re").innerHTML = l;
    document.getElementById("ri").innerHTML = z;
}