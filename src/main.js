


// ------------------- APP STATE -------------------
let currentTopicKey = "kyt";      // default to KYT (first syllabus topic)
let currentIndex = 0;
let currentQuestionsList = QA_DATABASE.kyt;
// DOM elements
const topicSelect = document.getElementById("topic-selector");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const questionNoDiv = document.getElementById("question-no");
const counterDiv = document.getElementById("counter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function loadTopicData(topicKey) {
    return QA_DATABASE[topicKey] || QA_DATABASE.kyt;
}

function getTopicNiceName(topicKey) {
    const names = {
        kyt: "KYT - TCS Knowledge",
        bizskill: "BizSkill",
        ui: "UI (HTML/CSS)",
        unix: "Unix Commands",
        javapython: "Java & Python MCQs",
        sql: "SQL / PLSQL",
        coding: "Coding Problems",
        oops: "OOPS Concepts",
        dsa: "Data Structures",
        "core-java": "Core Java"
    };
    return names[topicKey] || topicKey;
}

function updateDisplay() {
    currentQuestionsList = loadTopicData(currentTopicKey);
    if (currentIndex >= currentQuestionsList.length) currentIndex = currentQuestionsList.length - 1;
    if (currentIndex < 0) currentIndex = 0;
    
    const currentQA = currentQuestionsList[currentIndex];
    if (currentQA) {
        questionEl.textContent = currentQA.question;
        answerEl.textContent = currentQA.answer;
    } else {
        questionEl.textContent = "✨ Question not available";
        answerEl.textContent = "Please select another topic.";
    }
    
    const total = currentQuestionsList.length;
    const currentNumber = currentIndex + 1;
    questionNoDiv.textContent = `📋 Question ${currentNumber}`;
    counterDiv.textContent = `${currentNumber} of ${total} • ${getTopicNiceName(currentTopicKey)}`;
    
    prevBtn.disabled = (currentIndex === 0);
    nextBtn.disabled = (currentIndex === total - 1);
}

function nextQuestion() {
    const total = loadTopicData(currentTopicKey).length;
    if (currentIndex + 1 < total) {
        currentIndex++;
        updateDisplay();
    }
}

function prevQuestion() {
    if (currentIndex - 1 >= 0) {
        currentIndex--;
        updateDisplay();
    }
}

function onTopicChange() {
    const newTopic = topicSelect.value;
    if (newTopic === currentTopicKey) return;
    currentTopicKey = newTopic;
    currentIndex = 0;
    updateDisplay();
}

function handleKeyNavigation(e) {
    if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (!prevBtn.disabled) prevQuestion();
    } else if (e.key === "ArrowRight") {
        e.preventDefault();
        if (!nextBtn.disabled) nextQuestion();
    }
}

// Initialize
function init() {
    currentTopicKey = "kyt";
    currentIndex = 0;
    currentQuestionsList = QA_DATABASE.kyt;
    topicSelect.value = "kyt";
    updateDisplay();
    
    topicSelect.addEventListener("change", onTopicChange);
    prevBtn.addEventListener("click", prevQuestion);
    nextBtn.addEventListener("click", nextQuestion);
    window.addEventListener("keydown", handleKeyNavigation);

    // Make syllabus items clickable
    const syllabusItems = document.querySelectorAll(".syllabus-item");
    syllabusItems.forEach(item => {
        item.addEventListener("click", () => {
            const topic = item.getAttribute("data-topic");
            // Maps for edge cases
            const topicMap = {
                'java-python': 'javapython'
            };
            const mappedTopic = topicMap[topic] || topic;
            
            if (mappedTopic && QA_DATABASE[mappedTopic]) {
                topicSelect.value = mappedTopic;
                onTopicChange();
            }
        });
        item.style.cursor = "pointer";
    });
}

init();