document.getElementById("addEmail").addEventListener("click", function() {
    let emailInput = document.getElementById("emailInput").value;
    if (emailInput) {
        getEmails(function(emailList) {
            emailList.push(emailInput);
            saveEmails(emailList);
            displayEmails(emailList);
        });
    }
});

function displayEmails(emailList) {
    let emailListElem = document.getElementById("emailList");
    emailListElem.innerHTML = "";
    emailList.forEach(email => {
        let li = document.createElement("li");
        li.textContent = email;
        emailListElem.appendChild(li);
    });
}

// Initial load
getEmails(displayEmails);
