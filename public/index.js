const sendButton = document.getElementById('sendbtn');
const sketchFrame = document.getElementById('sketchFrame');
let sending = false;
sendButton.addEventListener('click', () => {
    if(sending) return;
    sending = true;
    const msg = document.getElementById('userInput').value;
    sendButton.disabled = true;
    sendButton.innerHTML = '<img src="34338d26023e5515f6cc8969aa027bca.gif">';
    fetch('/gemini/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({msg}),
    }).then(r =>{
        return r.json();
    }).then(data => {
        sending = false;
        if(data.error){
            sendButton.disabled = false;
            sendButton.innerHTML = 'Send';
            alert(data.error);
            return;
        }
        sendButton.disabled = false;
        sendButton.innerHTML = 'Send';
        sketchFrame.src = '/sketch.html';
    });
 });