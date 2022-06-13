
const input = document.getElementById('input');
function addingEventListener() {
input.addEventListener('click', function() {
  alert('I was clicked!');
});
}
addingEventListener();

//OR 

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);