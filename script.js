// JavaScript code here
document.getElementById("joinForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  fetch('/api/meetings/1/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: username, password: password })
  })
  .then(function(response) {
    if (response.ok) {
      console.log('Joined meeting successfully');
      // Perform actions after successfully joining the meeting
    } else {
      console.log('Error joining meeting');
    }
  })
  .catch(function(error) {
    console.log('Error joining meeting:', error);
  });
});
