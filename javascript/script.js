function verifyForm() {

    let grade = document.getElementById("grade").value;
    let names = document.getElementById("names").value;
    let rating = document.getElementById("rating").value;
    let section = document.getElementById("section").value;

    // makes sure that no required fields of the form are left blank
    if (names.trim() === "" || grade === "" || rating === "") {
        document.getElementById("output").innerHTML = "Your Registration Process Failed";
    }
    
    else if (rating < 0 || rating > 2500) {
        document.getElementById("output").innerHTML = "Your Registration Process Failed";
    }

    // makes sure that grade doesn't exceed 0-12
    else if (grade < 0 || grade > 12) {
        document.getElementById("output").innerHTML = "Enter a Valid Grade Level";
    }

    // makes sure that if your rating is above a certain amount, you cannot play in a section that requires a lower rating
    else if ((section == 2 || section == 6 || section == 10 || section == 14 || section == 18 || section == 22) && rating >= 800) {
        document.getElementById("output").innerHTML = "Your Rating is too High for This Section";
    }
    else if ((section == 3 || section == 7 || section == 11 || section == 15 || section == 19 || section == 23) && rating >= 1000) {
        document.getElementById("output").innerHTML = "Your rating is too High for This Section";
    }
    else if ((section == 4 || section == 8 || section == 12 || section == 16 || section == 20 || section == 24) && rating >= 1200) {
        document.getElementById("output").innerHTML = "Your rating is too High for This Section";
    }

    // makes sure that you cannot play in a section that is a lower grade than you (playing up a section is fine)
    else if ((section == 5 || section == 6 || section == 7 || section == 8) && grade > 3) {
        document.getElementById("output").innerHTML = "Your Grade Level is too High for This Section";
    }
    else if ((section == 9 || section == 10 || section == 11 || section == 12) && grade > 5) {
        document.getElementById("output").innerHTML = "Your Grade Level is too High for This Section";
    }
    else if ((section == 13 || section == 14 || section == 15 || section == 16) && grade > 8) {
        document.getElementById("output").innerHTML = "Your Grade Level is too High for This Section";
    }

    // Otherwise, everything is entered correctly and the registration is correct
    else {
        document.getElementById("output").innerHTML = "Registration Successful";
    }
}