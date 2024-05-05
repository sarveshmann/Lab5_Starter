// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const synth = window.speechSynthesis;
    // get the voice select element
    const voiceSelect = document.getElementById('voice-select');
    // get the text to speak element
    const textToSpeak = document.getElementById('text-to-speak');
    // get the talk button
    const talkButton = document.querySelector('button');
    // get the face image
    const faceImage = document.querySelector('img');
     

    let voices = [];
    
    function populateVoiceList() {
        voices = synth.getVoices();
        
        for (let i = 0; i < voices.length; i++) {
            const option = document.createElement("option");
            option.textContent = `${voices[i].name} (${voices[i].lang})`;
            
            if (voices[i].default) {
                option.textContent += " — DEFAULT";
            }
            
            option.setAttribute("data-lang", voices[i].lang);
            option.setAttribute("data-name", voices[i].name);
            voiceSelect.appendChild(option);
        }
    }
    
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

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
