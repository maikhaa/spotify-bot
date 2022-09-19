'use strict';

const outputYou = document.querySelector('.output-you');
document.querySelector('.playlist').style.visibility = "hidden";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-GB';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

document.querySelector('button').addEventListener('click', () => {
  recognition.start();
});

recognition.addEventListener('speechstart', () => {
  console.log('Speech has been detected.');
});

recognition.addEventListener('result', (e) => {
  console.log('Result has been detected.');

  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;

  outputYou.textContent = text;
  console.log('Confidence: ' + e.results[0][0].confidence);

  const getEmotion = fetch('https://maikha-c7aaatrzsq-ew.a.run.app/predict?text=' + text);

  getEmotion
  .then((response) => response.json())
  .then((data) => {

    const emotion = data['label'];
    console.log(emotion);

    switch(emotion) {
      case 'joy':
        document.querySelector('.playlist').src="https://open.spotify.com/embed/playlist/37i9dQZF1DWSf2RDTDayIx";
        break;
      case 'love':
        // code block
        break;
      case 'anger':
        // code block
      break;
      case 'fear':
        // code block
      break;
      case 'surprise':
        // code block
      break;
      case 'sadness':
        document.querySelector('.playlist').src="https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1";
      break;
    }
    
    document.querySelector('.playlist').style.visibility = "visible";
  
  })
  .catch((error) => {
    console.error(error);
  });;
});


recognition.addEventListener('speechend', () => {
  recognition.stop();
});

recognition.addEventListener('error', (e) => {
  console.log('Error: ' + e.error);
});
