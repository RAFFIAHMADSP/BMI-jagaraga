var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){

if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

}else{
    countBmi();
}

}


function countBmi(){
var p = [age.value, height.value, weight.value];
if(male.checked){
    p.push("male");
}else if(female.checked){
    p.push("female");
}

var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

var result = '';
if(bmi<18.5){
    result = 'Underweight';
    }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
    }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
    }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
    }else if(35<=bmi){
    result = 'Extremely obese';
    }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

function login() {
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

if (email === 'user@example.com' && password === 'password') {
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('userEmail', email);
    window.location.href = 'profile.html';
} else {
    alert('Invalid email or password');
}
}

function logout() {
localStorage.removeItem('loggedIn');
localStorage.removeItem('userEmail');
window.location.href = 'index.html';
}

function checkLogin() {
if (!localStorage.getItem('loggedIn')) {
    window.location.href = 'index.html';
}
}

function loadProfile() {
checkLogin();
const userEmail = localStorage.getItem('userEmail');
const profileContent = document.getElementById('profileContent');
profileContent.innerHTML = `
    <p><strong>Email:</strong> ${userEmail}</p>
    <h4>BMI Calculation History</h4>
    <ul class="list-group" id="bmiHistory">
    ${getBMIHistory().map(entry => `<li class="list-group-item">${entry}</li>`).join('')}
    </ul>`;
}

function calculateBMI() {
const height = parseFloat(document.getElementById('height').value) / 100;
const weight = parseFloat(document.getElementById('weight').value);

if (isNaN(height) || isNaN(weight)) {
    alert('Please enter valid height and weight');
    return;
}

  const bmi = weight / (height * height);
const bmiValue = document.getElementById('result');
bmiValue.textContent = bmi.toFixed(2);

saveBMIHistory(bmi.toFixed(2));
}

function saveBMIHistory(bmi) {
const history = getBMIHistory();
history.push(`Date: ${new Date().toISOString().split('T')[0]}, BMI: ${bmi}`);
localStorage.setItem('bmiHistory', JSON.stringify(history));
}

function getBMIHistory() {
const history = localStorage.getItem('bmiHistory');
return history ? JSON.parse(history) : [];
}

// Execute on profile page load
if (window.location.pathname.endsWith('profile.html')) {
loadProfile();
}
