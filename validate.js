  
  <script type="text/javascript">
      function validate(){
          
            var email = document.frm.email.value;
           
          
            if (email == "") {
                  window.alert("Please Enter Your E-mail."); 
                  email.focus();  
                  return false;
            }
            if (!/^[a-zA-Z0-9]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/.test(email)) {
                  window.alert("Enter valid email"); 
                  email.focus(); 
                  return false;
            
                  
            } 

             if (!/^[a-zA-Z0-9]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/.test(email)) {
                  window.alert(" valid email"); 
                  email.focus(); 
                  return true;
            
                  
            } 
        
                 
      }
</script>