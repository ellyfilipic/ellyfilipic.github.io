
/* The code below was written for the first prototype of digital spatial sound, trying to connect audio tracks together, 
switch between inputs and outputs, loop music tracks and play/pause/disable audio. However, as the prototype has been 
changed and I do not require to code audio tracks live in VS code anymore, I commented out the lines of code below, so it won't 
affect the other html and ccs document pages. I only left these lines of code as a reference, to show the many attempts I 
made on trying to edit and play music using js.*/





/* Audio effects such as reverb, volume, gaina nd so on will be added to further stylize and edit each audio track.  */

/* 
// audio context, get source connect to audio content and final destination

const audioCtx = new AudioContext (); 

let audioSource = audioCtx.createMediaElementSource(document.getElementById("myAudioSource"));

const gainNode = new GainNode (audioCtx); 

audioSource.connect(gainNode).connect(audioCtx.destination);                 
// gain effect
gainNode.gain.value = 0.3;


 

function createReverb() {
let convolver = audioCtx. createConvolver(); 

// load impulse response form file
// let response =  await fetch("./exampleGame1.wav");
// let arraybuffer = await response. arrayBuffer(); 
// convolver.buffer = await audioCtx. decode  

}


//audio buffer is a container loads digital audio to edit for example it to create spectroanaluysis 




// audio needs to be driggered function to trigger the audio  (modal zip file on canvas)


// play audio on click
const audio = new Audio("./exampleGame1.wav"); // change url here or uplaod audoo directly from source
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});


/* $(document).ready(function () {
  var playing = true;
  $('playButton').click(function () {
   if (playing == false) {
    document.getElementById('track1').play();
    playing = true;
    $(this).text("Stop Sound");
 
   } else {
    document.getElementById('track1').pause();
    playing = false;
    $(this).text("Restart Sound");
   }
  });
 });

 */

/* 
 function Play()
      {
        var myAudio = document.getElementById("track1");
        if(myAudio.paused) {
            myAudio.play();
        }
        else {
           myAudio.pause();
        }
      }


function pauseMusic()
    {
      
    }  */