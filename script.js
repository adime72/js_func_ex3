/*function funcCalc(){
    document.getElementById("firstNum").;
    document.getElementById("secondNum")=num2;

console.log(firstNum,secondNum);
}*/

    
$(document).ready(function() {
    $("#btnCalc").click(function() {
      // Reading the data from the form
      var words = parseInt($("#word").val());
      var letter = parseInt($("#letter").val());
     
      var arrNum = arrangeBySize(num1, num2, num3);
  
      document.getElementById("show").innerHTML = arrNum;
    });
});

// Logic function
function arrangeBySize(nm1, nm2, nm3) {

