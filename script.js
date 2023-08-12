// script.js
const playPauseButton = document.getElementById("playPauseButton");
const playPauseImage = document.getElementById("playPauseImage");
const text = document.querySelector("#text");

let isPlaying = false; //Flag to play/pause the typewriter text
let intervalId = null;

playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        clearInterval(intervalId); // Pauses Interval
        playPauseImage.src = "Images/playbutton.png"; // Switches button image

    } else {
        intervalId = setInterval(handleLoop, 30); // Plays Interval
        playPauseImage.src = "Images/pausebutton.png"; // Switches button image
    }

    isPlaying = !isPlaying;
});

//Set Trigger Count
let triggerCount = 0;

//This is the text content to be displayed.
let textContentArray = "Leon awoke with a jolt as he heard a loud crash of lightning followed by the front door to his cabin opening. The sounds of the thunderstorm outside stabbing into his small cabin and his four loyal companion dogs barking and running around in a panic. Leon sprang up and rubbed his eyes, calling out to the dogs individually by name, alerted that the dogs are not in the room with him anymore. A flash of thunder through the window showed him that none of his dogs were by his side as they were when they went to bed. The dogs replied to Leon’s calls with more panicked barking from the living room. Leon throw his legs out from under the covers and got up. He called out for Rock and Roll, two of his dogs. He could hear the incessant barking getting further and further away. He grabbed his jeans and the shirt he was wearing yesterday and hastily put them back on. There was a rainstorm when they went to bed earlier but the thunder and lightning was new to him. He moved out of his bedroom and saw to his horror that the front door was wide open. The dogs were gone.".split("");

//This function creates the typewriter effect
const handleLoop = () => {
    if (textContentArray.length) { // Checks if there is more text to display and will stop if not.
        textContentArray = textContentArray.reverse(); //Reverse the content so the last character becomes the first
        text.innerHTML += textContentArray.pop(); //Adds the last element of the array back.
        textContentArray = textContentArray.reverse(); //Reverses the content back to the correct order.
        triggerCount++;
        //Triggers in text
        if (triggerCount === 25) {
            //Change Background
            backgroundImages.src = "Images/background_test2.png";

        }
    } else {
        clearInterval(intervalID); //Stop the interval when text is finished
        playPauseImage.src = "Images/playbutton.png";
        isPlaying = false;
    }
}

