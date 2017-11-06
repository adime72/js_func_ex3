/*function funcCalc(){
    document.getElementById("firstNum").;
    document.getElementById("secondNum")=num2;

console.log(firstNum,secondNum);
}*/

  
$(document).ready(function() {
  $("#btnCalc").click(function() {
    // Reading the data from the form
    var words =($("#word").val());
    var letter =($("#letter").val());
    var count= fncCounter (words, letters);
    document.getElementById("show").innerHTML = count;
  });
});
   function fncCounter(words, letters) {
    var couner=0;
  for (var index = 0; index < words.length; index++){ 
    if (letter = words.substring(index, index+1)) {counter=counter+1}   }


}

