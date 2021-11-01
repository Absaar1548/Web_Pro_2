function calculate()
{
    event.preventDefault();
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    document.getElementById("answer").value=a+b;
    document.getElementById("ans").style.display="block";

}