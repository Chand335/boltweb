const button = document.getElementById("toggle");

button.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.insertCSS({
      target: { tabId: tabs[0].id },
      files: ["theme.css"]
    });
  });
});