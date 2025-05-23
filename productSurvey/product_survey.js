// takes feedbakc from the user survey form in HTML file
function submitFeedback() {

    // retrive and store the values of HTML inputs
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('experienceText').value;
    alert('Thank you for your valuable feedback')

    // update information for specific HTML elements
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperience').innerHTML = experience;

    document.getElementById('userInfo').style.display = 'block';
}

// retrive and store submit button activity
const submitButton=document.getElementById('submitBtn');

// assign an onclick event to button
submitButton.onclick = submitFeedback;

// ensures that form is submitted in user presses 'Enter' key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });