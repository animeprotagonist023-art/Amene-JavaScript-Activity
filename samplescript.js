const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');
const backgroundButton = document.getElementById('changeBackground');
const profile = document.getElementById('profile');
const toggleButton = document.getElementById('toggleDetails');
const details = document.getElementById('details');

const originalName = studentname.textContent;
const newName = "Jerome Xyrus Amene";
const newBackground = "#00ffea";
let nameChanged = false;
let backgroundChanged = false;

buttonname.addEventListener("click", function(){
    nameChanged = !nameChanged;
    studentname.textContent = nameChanged ? newName : originalName;
});

backgroundButton.addEventListener("click", function(){
    backgroundChanged = !backgroundChanged;
    profile.style.backgroundColor = backgroundChanged ? newBackground : "white";
});

toggleButton.addEventListener("click", function(){
    details.classList.toggle("hidden");
});
