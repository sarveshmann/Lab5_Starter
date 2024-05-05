// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    // get the voice select element
    const voiceSelect = document.getElementById('voice-select');
    // get the text to speak element
    const textToSpeak = document.getElementById('text-to-speak');
    // get the talk button
    const talkButton = document.querySelector('button');
    // get the face image
    const faceImage = document.querySelector('img');
    let voices = [];

    // load available voices
    function populateVoiceList() {
        voices = speechSynthesis.getVoices();

        // get all the voices from the speechSynthesis
        voices.forEach(voice => {
            const option = document.createElement('option');
            option.textContent = voice.name + ' (' + voice.lang + ')';
            option.setAttribute('data-lang', voice.lang);
            option.setAttribute('data-name', voice.name);
            voiceSelect.appendChild(option);
        });
        voiceSelect.removeAttribute('disabled');
    }

    // load the voice list
    speechSynthesis.onvoiceschanged = populateVoiceList;

    // handle the speak functionality
    talkButton.addEventListener('click', () => {
        const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
        const selectedVoice = voices.find(voice => voice.name === selectedOption);

        // get the text that needs to be spoken
        const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
        // select the voice
        utterance.voice = selectedVoice;
        // do open smile while speaking
        utterance.onstart = () => {
            faceImage.src = 'assets/images/smiling-open.png'; // Assuming the open-mouthed image is named open_mouth.png
        };
        // do closed smile when stop speaking
        utterance.onend = () => {
            faceImage.src = 'assets/images/smiling.png';
        };
        // speak
        speechSynthesis.speak(utterance);
    });
}