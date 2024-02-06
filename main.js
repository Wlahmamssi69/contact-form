function sendEmail(){
    ( 
        
        function(){
            emailjs.init({
            publicKey: "eOaRLTejql-ZY3AGn",

        });
     }) ();



     
     var serviceID = "service_adtb0o8"; //Email Service ID
     var templateID = "template_1f4zd6s" ; //Email template ID

     var templateParams={
         senderName:document.getElementById("name").value,
         senderEmail:document.getElementById("email").value,
         message:document.getElementById("message").value,
         subject:document.getElementById("subject").value,


     };

     emailjs.send(serviceID,templateID,templateParams)
     .then((response)=>{
        alert('Thank you !'+templateParams['senderEmail']+' you mail has beeen sent successfully')
        console.log("Email sent with success")
     })
     .catch(err=>{
        console.log("error");
     })
}