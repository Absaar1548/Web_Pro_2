function calculate()
{
    event.preventDefault();
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = document.getElementById("c").value;
    if(c=="+")
        document.getElementById("answer").value=a+b;
    else if(c=="-")
        document.getElementById("answer").value=a-b;
    else if(c=="*")
        document.getElementById("answer").value=a*b;
    else if(c=="/")
        document.getElementById("answer").value=a/b;
    else if(c=="^")
        document.getElementById("answer").value=Math.pow(a,b);

    document.getElementById("ans").style.display="block";

}