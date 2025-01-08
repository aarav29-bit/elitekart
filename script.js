function validateForm() {
    const gstNumber = document.getElementById("gstNumber").value;
    const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  
    if (!gstPattern.test(gstNumber)) {
      alert("Please enter a valid GST number.");
      return false;
    }
    
    alert("Registration Successful!");
    return true;
  }
  