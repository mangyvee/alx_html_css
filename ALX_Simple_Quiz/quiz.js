// 1. Define the function
function checkAnswer() {
    // 2. Define correct answer
    const correctAnswer = "4";

    // 3. Get user's selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // 4. Get the feedback element
    const feedback = document.getElementById("feedback");

    // 5. Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // 6. Compare with correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // No option selected
        feedback.textContent = "Please select an answer.";
    }
}

// 7. Add event listener to button
const submitBtn = document.getElementById("submit-answer");
submitBtn.addEventListener("click", checkAnswer);
