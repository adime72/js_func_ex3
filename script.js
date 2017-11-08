    $(document).ready(function() { 
    $("#btnCalc").click(function() { 
  var words =($("#word").val()); 
  var letter =($("#letter").val()); 
  var count= fncCounter (words, letter); 
  document.getElementById("show").innerHTML = count; 
 }); 
}); 
  function fncCounter(words, letters) { 
   var counter=0; 
 for (var index = 0; index < words.length; index++){  
   if (letters=== words.substring(index, index+1)) {counter++}  } 
   return counter;
} 
 
