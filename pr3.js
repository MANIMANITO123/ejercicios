function elipse() {
    var c = parseFloat(document.getElementById('x').value);
    var d = parseFloat(document.getElementById('y').value);
    
    var g=c+d;
    var f=3*c+d;
    var h=c+3*d;
    var i=f*h;
    var j=Math.sqrt(i);
    var k=j/g;
    var l=3-k;
    var m=Math.PI*g*l;
    
    document.getElementById("ko").innerHTML = m;
}