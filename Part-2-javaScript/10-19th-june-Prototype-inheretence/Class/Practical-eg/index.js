class CreateAccount {
    constructor(name, age, gender, mobile) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.mobile = mobile;
      this.accountNumber = Math.floor(Math.random() * 1000000);
      this.balance = 500;
    }
  }
  
  class JhandhanAccount extends CreateAccount {
    constructor(name, age, gender, mobile, incomelim) {
      if (incomelim > 100000) {
        throw new Error("High Income, Jhandhan Not Eligible");
      }
      super(name, age, gender, mobile);
      this.incomelim = incomelim;
      this.creditLimit = 50000;
    }
  }
  
  document.getElementById("income").addEventListener("change", function () {
    let inc = document.getElementById("income");
  
    console.log(inc.value);
    if (Number(inc.value) > 100000) {
      document.getElementById("incomError").style.display = "block";
      document.getElementById("incomError").textContent = "Limit Limit Exceeded";
      document.getElementById("incomError").style.color = "red";
    }
  });
  
  function accountfn() {
    event.preventDefault();
  
    let form = document.getElementById("form");
    let name = form.name.value;
    let age = form.age.value;
    let gender = form.select.value;
    let mobile = form.mobile.value;
    let income = form.income.value;
    let jan = form.jan.checked;
    //console.log(name,income,jan)
  
    if (jan) {
      try {
        let jancustomer = new JhandhanAccount(name, age, gender, mobile, income);
        console.log(jancustomer);
      } catch (err) {
        if (err) {
          document.getElementById(
            "msg"
          ).innerText = `Income Limit is High, Jandhan not eligible, can proceed with Normal Account???`;
          document.getElementById("confirm").style.display = "block";
        }
        console.log(err);
      }
    } else {
      let customer = new CreateAccount(name, age, gender, mobile);
      console.log(customer);
      localStorage.setItem("accountUser", JSON.stringify(customer));
      alert("Account Created Sucessfully");
      form.reset();
    }
  
    function confimfn() {
      /// need to implement by you.... it is incomplete
      event.preventDefault();
      console.log("clicked");
      let customer = new CreateAccount(name, age, gender, mobile);
      console.log(customer);
      localStorage.setItem("accountUser", JSON.stringify(customer));
      alert("Account Created Sucessfully");
      form.reset();
    }
  }
  