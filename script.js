var typingClass = document.getElementById("typing-anim");
var lastTime = (new Date()).getTime(), isTypingRight = true, delay = 5000;
var message = ["Hello World!", "Greetings...", "Good ", "Hola ¿Qué tal?", "Xin Chào"];
var messageIndex = 0;

// Find what time of the day
function findHour() {
    let currentHour = (new Date()).getHours();
    
    // Morning 5 am to 12 pm (noon)
    if (currentHour >= 5 && currentHour < 12) message[2] = "Good Morning 🌅 ";
    // Afternoon 12 pm to 5 pm.
    else if (currentHour >= 12 && currentHour < 17) message[2] = "Good Afternoon ☀️ ";
    // Evening 5 pm to 9 pm.
    else if (currentHour >= 17 && currentHour < 9) message[2] = "Good Evening 🌄 ";
    // Night 9 pm to 4 am.
    else message[2] = "Good Night 🛏️ ";

    console.log(currentHour);
}

function resetTypingAnimation() {
    let currentTime = (new Date()).getTime();

    if (currentTime - lastTime >= delay) {
        // Reset Animation
        if (isTypingRight) {
            if (messageIndex == 1) findHour();
            let cm = message[messageIndex].length;
            document.documentElement.style.setProperty('--message-current-length', cm + 'ch');

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
        delay = Math.floor(Math.random() * 3000 + 2000);
    }
}

function animate() {
    window.requestAnimationFrame(animate);

    // Reset typing animation
    resetTypingAnimation();
}

animate();

var header = document.getElementById("Header");
var sticky = header.offsetTop;

window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.classList.remove("backgroundHeader");
    }
    else {
        header.classList.add("backgroundHeader");
        header.classList.remove("sticky");
    }
};