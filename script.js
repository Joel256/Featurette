// script.js
const playPauseButton = document.getElementById("playPauseButton");
const playPauseImage = document.getElementById("playPauseImage");
const nextButton = document.getElementById("nextPageButton");
const previousButton = document.getElementById("previousPageButton");
//const text = document.querySelector("#text");

let isPlaying = false; //Flag to play/pause the typewriter text
let intervalId = null;
let textLeftIsWriting = true;

playPauseButton.addEventListener("click", () => {
    toggleIsPlaying();
});

const toggleIsPlaying = () => {
    if (isPlaying) {
        clearInterval(intervalId); // Pauses Interval
        playPauseImage.src = "./Images/playbutton50.png"; // Switches button image
    } else {
        intervalId = setInterval(handleLoop, 30); // Plays Interval
        playPauseImage.src = "./Images/pausebutton50.png"; // Switches button image
    }
    isPlaying = !isPlaying;
}

//Set Trigger Count
let triggerCount = 0;

//This is the text content to be displayed.
let textContentArray = "Leon awoke with a jolt as he heard a loud crash of lightning followed by the front door to his cabin opening. The sounds of the thunderstorm outside stabbing into his small cabin and his four loyal companion dogs barking and running around in a panic. Leon sprang up and rubbed his eyes, calling out to the dogs individually by name, alerted that the dogs are not in the room with him anymore. A flash of thunder through the window showed him that none of his dogs were by his side as they were when they went to bed. The dogs replied to Leon’s calls with more panicked barking from the living room. Leon throw his legs out from under the covers and got up. He called out for Rock and Roll, two of his dogs. He could hear the incessant barking getting further and further away. He grabbed his jeans and the shirt he was wearing yesterday and hastily put them back on. There was a rainstorm when they went to bed earlier but the thunder and lightning was new to him. He moved out of his bedroom and saw to his horror that the front door was wide open. The dogs were gone.".split("");
let textHistoryList = [0];
let currentTextIdx = 0;

// Text containers
const textLeftContainer = document.getElementById("textLeftContainer");
const textRightContainer = document.getElementById("textRightContainer");
const textLeftContent = document.getElementById("textLeftContent");
const textRightContent = document.getElementById("textRightContent");
const insertedImage = document.getElementById("insertedImages");
let previousPageCount = 1;
let nextPageCount = 2;
const previousPageNumber = document.getElementById("previousPageNumber");
const nextPageNumber = document.getElementById("nextPageNumber");


const handleLoop = () => {
    if (textContentArray.length) {
        const char = textContentArray[currentTextIdx]; // Get the first character
        currentTextIdx += 1;
        const textLeftOverflow = textLeftContent.offsetHeight + 90 >= textLeftContainer.offsetHeight;
        const textRightOverflow = textRightContent.offsetHeight + 90 >= textRightContainer.offsetHeight;
        //console.log(nextPageCount)

        // Switch container if overflow occurs
        if (textLeftIsWriting && textLeftOverflow) {
            textLeftIsWriting = false;
        } else if (!textLeftIsWriting && textRightOverflow) {
            textLeftIsWriting = true;
            textLeftContent.innerHTML = ""
            textRightContent.innerHTML = ""
            textHistoryList.push(currentTextIdx + 1);
            //Next and Previous page counts
            previousPageCount += 2;
            nextPageCount += 2;
            previousPageNumber.innerHTML = previousPageCount;
            nextPageNumber.innerHTML = nextPageCount;
        }

        // Check if it's time to insert the image
        if (triggerCount === 10) {
            //Updates background image at 10 characters.
            insertedImage.src = './Images/background_test2.png';

        }

        // Append the character to the appropriate side
        if (textLeftIsWriting) {
            textLeftContent.innerHTML += char;
        } else {
            textRightContent.innerHTML += char;
        }

        triggerCount++;
    }
};

nextButton.addEventListener("click", () => {
    clearInterval(intervalId);
    const targetPage = nextPageCount + 2;
    console.log(targetPage);
    console.log(nextPageCount);
    while (targetPage > nextPageCount) {
        if (textContentArray.length <= 0) {
            alert("Not enough text to move to next page.")
            break;
        }

        handleLoop();
    }


    intervalId = setInterval(handleLoop, 30); // Plays Interval
});

previousButton.addEventListener("click", () => {
    console.log(textHistoryList);
    if (textHistoryList.length > 1) {
        clearInterval(intervalId);
        textLeftContent.innerHTML = ""
        textRightContent.innerHTML = ""
        previousPageCount -= 2;
        nextPageCount -= 2;
        previousPageNumber.innerHTML = previousPageCount;
        nextPageNumber.innerHTML = nextPageCount;


        textHistoryList.pop();
        currentTextIdx = textHistoryList[textHistoryList.length - 1];
        console.log(currentTextIdx);
        console.log(textHistoryList);
        intervalId = setInterval(handleLoop, 30); // Plays Interval
    }
});