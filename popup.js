let button = document.getElementById('addBhai');

button.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: addBhai,
  });
});

function addBhai() {
  let inputs = document.querySelectorAll('input[type=text]');
  console.log(inputs);
  for (var i = 0; i < inputs.length; i ++) {
    inputs[i].value = inputs[i].value + " bhai";
  }
}