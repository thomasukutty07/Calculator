function buttonclick(val){

  document.getElementById("screen").value+=val;
}
function clearFun(){
    document.getElementById("screen").value=""
}
function resultclick(){
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value=result
}