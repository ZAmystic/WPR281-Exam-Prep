let name = "Theart";
let surname = "Jooste";
let age = 19;
let email = "theartjooste05@gmail.com"
let isStudent = false;
let hobbies = ["gaming", "coding", "gambling"];
let hobbiesDone = [4,2,8]

displayInfo();

function displayInfo() {
    console.log('Hello my name is ' + name + ' ' + surname + '.');
    validateEmail();
}

function validateEmail(){
    if ((email.includes("@")) && (email.includes(".")) && ( email.indexOf("@") < email.indexOf("."))){
        console.log("Email is valid.");
        addHobby("reading", 3);
        addHobby("swimming", 5);
        mostPlayedHobby();
        studentCheck()
    }
    else{
        console.log("Email is invalid.");
    }
}

function mostPlayedHobby(){
    for (let k = 0; k < hobbies.length; k++) {
        for (let l = 0; l < hobbies.length; l++) {
            if (hobbiesDone[l] < hobbiesDone[k]) {
                let temp = hobbiesDone[k];
                hobbiesDone[k] = hobbiesDone[l];
                hobbiesDone[l] = temp;

                let temp2 = hobbies[k];
                hobbies[k] = hobbies[l];
                hobbies[l] = temp2;
            }
        }
    }
    console.log("My fav hobby is " + hobbies[0] + " with " + hobbiesDone[0] + " hours.");
}

function addHobby(hobby, hours){
    hobbies.push(hobby);
    hobbiesDone.push(hours);
    console.log("Added hobby: " + hobby + " with " + hours + " hours.");
}

function studentCheck() {
    if (isStudent) {
        console.log("The user is a student.");
    }
    else {
        ageCheck();
    }
}

function ageCheck() {
    if (age <= 18) {
        console.log("The user is a minor.");
    }
    else {
        console.log("The user is an adult.");
    }
}
