function submitbutton() {
    document.getElementById("myForm").submit();
  }

  function validateName() {
    var name = document.getElementById('contact-name').value;
    if(name.length == 0) {
      producePrompt('Name is required', 'name-error' , 'red')
      return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
      producePrompt('First and last name, please.','name-error', 'red');
      return false;
  }
  producePrompt('Valid', 'name-error', 'green');
  return true;
}

function validateEmail () {
    var email = document.getElementById('contact-email').value;
    if(email.length == 0) {
      producePrompt('Email Invalid','email-error', 'red');
      return false;
  }
  
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      producePrompt('Email Invalid', 'email-error', 'red');
      return false;
  }
  producePrompt('Valid', 'email-error', 'green');
  return true;
  }
  
  function validateForm() {
    if (!validateName() || !validateEmail()) {
      producePrompt('Please fix errors to submit.', 'submit-error', 'red');
      return false;
  } else {
      return true
  }
}