
// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');
const resetButton = document.getElementById('reset');

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById('choosenNoun1');
const choosenVerb = document.getElementById('choosenVerb');
const choosenAdjective = document.getElementById('choosenAdjective');
const choosenNoun2 = document.getElementById('choosenNoun2');
const choosenSetting = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const storyDisplay = document.getElementById('story');

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a bunny", "a scary", "a goofy", "a barking", "a fat"];
const nouns2 = ["goat", "lion", "fish", "bug", "worm"];
const settings = ["on the moon", "in the jungle", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    choosenNoun1.innerText = nouns1[noun1Count];
    noun1Count++;
    if (noun1Count >= nouns1.length) {
        noun1Count = 0;
    }
}

function verb_on_click() {
    choosenVerb.innerText = verbs[verbCount];
    verbCount++;
    if (verbCount >= verbs.length) {
        verbCount = 0;
    }
}

function adjective_on_click() {
    choosenAdjective.innerText = adjectives[adjectiveCount];
    adjectiveCount++;
    if (adjectiveCount >= adjectives.length) {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {
    choosenNoun2.innerText = nouns2[noun2Count];
    noun2Count++;
    if (noun2Count >= nouns2.length) {
        noun2Count = 0;
    }
}

function setting_on_click() {
    choosenSetting.innerText = settings[settingCount];
    settingCount++;
    if (settingCount >= settings.length) {
        settingCount = 0;
    }
}

// Concatenate the user story and display
function playback_on_click() {
    const story = `${choosenNoun1.innerText} ${choosenVerb.innerText} ${choosenAdjective.innerText} ${choosenNoun2.innerText} ${choosenSetting.innerText}.`;
    storyDisplay.innerText = story;
}

// grabbing random elements from arrays, concatenate and display
function random_on_click() {
    const story = `${getRandomElement(nouns1)} ${getRandomElement(verbs)} ${getRandomElement(adjectives)} ${getRandomElement(nouns2)} ${getRandomElement(settings)}.`;
    storyDisplay.innerText = story;
}


function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Reset the story inputs
function reset_on_click() {
    choosenNoun1.innerText = '';
    choosenVerb.innerText = '';
    choosenAdjective.innerText = '';
    choosenNoun2.innerText = '';
    choosenSetting.innerText = '';
    storyDisplay.innerText = '';
    noun1Count = 0;
    verbCount = 0;
    adjectiveCount = 0;
    noun2Count = 0;
    settingCount = 0;
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
resetButton.addEventListener('click', reset_on_click); // Added Reset Button Event Listener
