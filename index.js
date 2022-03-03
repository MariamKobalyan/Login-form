

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");


sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


function validateEmail(){
      const mail = document.getElementById("mailemail").value
      let regex = /\S+@\S+\.\S+/;
      return regex.test(mail);
}

const btn = document.getElementById("signup");
btn.addEventListener("click" , () => {
  if(validateEmail()){
    alert("You have provided a valid email")
  } else{
    alert("Please enter a valid email")
  }
})