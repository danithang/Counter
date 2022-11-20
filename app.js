// set initial count
let count = 0;

// select value id and all buttons with a class of btn
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")

// call back function to access each item using a parameter...basically looping through and getting all buttons in container class
btns.forEach(function (btn) {
    // listening for click and callback function and access event object
    btn.addEventListener("click", function (e) {
        // gonna give which button that is clicked and looking for the class list the element btn has
        const styles = e.currentTarget.classList;
        // if variable contains a specific class then the button will increase, decrease, or reset
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        // changing the color of the value span if the count increases, decreases, or stays at 0
        if (count > 0) {
            value.style.color = "green";
        }
        else if (count < 0) {
            value.style.color = "red";
        }
        else {
            value.style.color = "black";
        }
        // taking the variable that holds the value in the span and change text content in span to equal the variable count whether you increase, decrease or reset
        value.textContent = count;
    });
});