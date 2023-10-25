const userString = localStorage.getItem('user');
const arr = userString ? JSON.parse(userString) : [];


  function findMatchingMember(email, password:register) {
    return arr!.find((member:object) => member.email === email && member.password === password);
  }
  
  const Loginhandeler = () => {
    const emailaddress = { name: "ali", email: "hello@cc.com", password: "123", repeatPassword: "123" };
  
    const matchingMember = findMatchingMember(emailaddress.email, emailaddress.password);
    
    if (matchingMember) {
      console.log("Login successful!");
     
    } else {
      console.log("Invalid credentials. Login failed.");
      
    }
  };