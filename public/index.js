const sendButton = document.getElementById('sendbtn');
const sketchFrame = document.getElementById('sketchFrame');
sendButton.addEventListener('click', () => {
    const msg = document.getElementById('userInput').value;
    const response = document.getElementById('response');
    fetch('/gemini/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({msg}),
    }).then(r =>{
        return r.json();
    }).then(data => {
        response.innerHTML = data.msg;
        console.log(data.msg);
        sketchFrame.src = '/sketch.html';
    });
 });