var typingClass = document.getElementById("typing-anim");
var lastTime = (new Date()).getTime(), isTypingRight = true, delay = 5000;
var message = ["Hello World!", "Salut !", "初めまして!", "¿Qué tal?", "Xin Chào"];
var messageIndex = 0;

function resetTypingAnimation() {
    let currentTime = (new Date()).getTime();

    if (currentTime - lastTime >= delay) {
        // Reset Animation
        if (isTypingRight) {
            let cm = message[messageIndex].length;
            typingClass.style.width = "0ch";
            typingClass.style.animation = "reverseTyping 1s steps(" + cm + "), blink .5s step-end infinite alternate";
            isTypingRight = false;
        }
        else {
            messageIndex = (messageIndex + 1) % message.length;
            let cm = message[messageIndex];

            typingClass.innerHTML = cm;
            typingClass.style.width = cm.length + "ch";
            typingClass.style.animation = "typing 1s steps(" + cm.length + "), blink .5s step-end infinite alternate";
            isTypingRight = true;
        }

        // Reset Timer
        lastTime = (new Date()).getTime();
    }
}

function animate() {
    window.requestAnimationFrame(animate);

    // Reset typing animation
    resetTypingAnimation();
}

animate();