const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://firefoxbug.free.beeceptor.com');
xhr.overrideMimeType('text/html');
xhr.send();
console.log('XHR SENT', document.documentElement.innerHTML.slice(-1000));