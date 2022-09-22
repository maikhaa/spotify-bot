'use strict';
// Setup Speech Recognition

const outputYou = document.querySelector('.output-you');
document.querySelector('.playlist').style.visibility = "hidden";

// Add event listener - start recognition

recognition.addEventListener('speechstart', () => {
  console.log('Speech has been detected.');
});

recognition.addEventListener('result', (e) => {
  console.log('Result has been detected.');

  // Obtain text from result
 
  // Call emotion detection API

  getEmotion
  .then((response) => response.json())
  .then((data) => {

    // Log the emotion

    // Display playlists
  
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
