chrome.app.runtime.onLaunched.add:Listener(function() {
  chrome.app.window.create('index.html', {
    bounds: {
      width: 500,
      height: 309
      
      }
     });
    });
