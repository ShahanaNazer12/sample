function validlogin(){
    let name=document.getElementById("name").value;
    let pass=document.getElementById("pass").value;
    if (name === "" || pass === "") {
        alert("Please fill in both name and password!");
        return false; // Stop form
      }
      alert("Login Successful!");
      return true;

}