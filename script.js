// script.js
const playPauseButton = document.getElementById("playPauseButton");
const playPauseImage = document.getElementById("playPauseImage");
//const text = document.querySelector("#text");

let isPlaying = false; //Flag to play/pause the typewriter text
let intervalId = null;
let textLeftIsWriting = true;

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


// Text containers
const textLeftContainer = document.getElementById("textLeftContainer");
const textRightContainer = document.getElementById("textRightContainer");
const textLeftContent = document.getElementById("textLeftContent");
const textRightContent = document.getElementById("textRightContent");

const handleLoop = () => {
    if (textContentArray.length) {
        const char = textContentArray.shift(); // Get the first character

        const textLeftOverflow = textLeftContent.offsetHeight >= textLeftContainer.offsetHeight;
        const textRightOverflow = textRightContent.offsetHeight >= textRightContainer.offsetHeight;

        //console.log("l overflow?: " + textLeftOverflow)
        //console.log("r overflow?: " + textRightOverflow)

        console.log(textLeftContent.offsetHeight)

        // Switch container if overflow occurs
        if (textLeftIsWriting && textLeftOverflow) {
            textLeftIsWriting = false;
        } else if (!textLeftIsWriting && textRightOverflow) {
            textLeftIsWriting = true;
            textLeftContent.innerHTML = ""
            textRightContent.innerHTML = ""
        }

        // Append the character to the appropriate side
        if (textLeftIsWriting) {
            textLeftContent.innerHTML += char;
        } else {
            textRightContent.innerHTML += char;
        }
    }
};







//const handleLoop = () => {
//    if (textContentArray.length) {
//        const char = textContentArray.shift(); // Get the first character

        // const getTextLeftHeight = () => document.getElementById('textLeft').clientHeight;
        // const getTextRightHeight = () => document.getElementById('textRight').clientHeight;

        //const textRightHeight = document.getElementById('textRight').clientHeight;

        // Check if the text in the left div has reached its bottom
//        if (textLeftIsWriting && textLeftContent.scrollHeight > textLeftContent.clientHeight) {
//            textLeftIsWriting = false;
//        }

        // Check if the text in the right div has reached its bottom
//        if (!textLeftIsWriting && textRightContent.scrollHeight > textRightContent.clientHeight) {
//            textLeftIsWriting = true;
//        }


        // if (document.getElementById('textLeftContent').offsetHeight >= document.getElementById('textLeft').style.height) {
        //       textLeftIsWriting = false;
        //     }

        // if (document.getElementById('textRightContent').offsetHeight > document.getElementById('textRight').style.height) {

        //clear out textLeftContent
        //textLeftContent.innerHTML = ""

        //clear out textRightContent
        //textRightContent.innerHTML = ""

        //  textLeftIsWriting = true
        //}
        // Append the character to the appropriate side
//        if (textLeftIsWriting) {
//            textLeftContent.innerHTML += char;
//        } else {
//            textRightContent.innerHTML += char;
//        }



 //       triggerCount++;

        // Triggers in text
//        if (triggerCount === 25) {
            // Change Background
//            document.getElementById("backgroundImages").src = "/Users/joelpenton/Projects/Featurette/Images/background_test2.png";
//        }

        // if (triggerCount === 50) {
        //     clearInterval(intervalId);
        //     playPauseImage.src = "/Users/joelpenton/Projects/Featurette/Images/playbutton.png";
        //     isPlaying = false;
        // }
//    }
//};

