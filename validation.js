 function Validation()
	 {

 //alert("working");
 	 var a =document.getElementById("Password");
 	var b= document.getElementById("conpsw");
	
   var myInput = document.getElementById("#Password");
    var lowerCaseLetters = /[a-z]/g;
      var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;



   if ($("#name").val()=="")
   {
   alert("Name cant be empty!");
  		$("#name").focus();
 		return false;
   }

 else if ($("#Course").val()=="select")
  {
  	 alert("Please select your Course");
 		$("#Course").focus();
 		return false;
  }

   else if($("#Email").val()=="") 
   {
   	alert("Email cant be empty");
   }

 else if(!validateEmail($("#Email").val() ))
 { 
		alert("Enter a valid email id");
 		$("#Email").focus();
 		return false;
  }

   else if ($("#Address").val()=="")
   {
   	alert("Address cant be empty");
   			$("#Address").focus();
 		return false;
   }

  else if ($("#number").val()=="")
  {
  	 alert("Phone number cant be empty");
 		$("#number").focus();
 		return false;
  }

else if ( $("#Password").val()==""|| !myInput.value.match(lowerCaseLetters) || !myInput.value.match(upperCaseLetters) || !myInput.value.match(numbers) ) 
{
alert("Password must not be empty and should be aplha numneric with at least one capital letter");
}


 else if ($("#conpsw").val()=="")  
  {
 	alert("Please confirm Password");
 		$("#conpsw").focus();
 		return false;
  }
 
 else if (a.value!= b.value)
 {
 	alert("Password doesn't match");
 }
 

  else if (!$("input [name='container']").is(':checked'))
  {    
  	alert("Please select your gender");
  		$("#container").focus();
 		return false;
  }

  else if ($("#check").is(':checked')=="")
  {
  	alert("please check the T&C");
 		$("#check").focus();
 		return false;
  }
  
   else
  {
   	alert("Form submitted Sucessfully!");
  }


}

function validateEmail(emailaddress) 
{
  var emailReg = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

  return emailReg.test(emailaddress);
}

jQuery(document).ready(function($) {

	$('#number').on('change keydown', function(e){
        	var key = e.charCode || e.keyCode;
  if (key == 38|| key== 40 || key == 109 || key== 107 || key == 190 || key == 69 || key  ==17) 
  { 
     e.preventDefault();
  }    
});

});

  