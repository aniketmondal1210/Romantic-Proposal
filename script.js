function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Adjust size based on screen width
    const baseSize = window.innerWidth < 480 ? 30 : window.innerWidth < 768 ? 40 : 55;
    const size = Math.random() * (baseSize - 10) + 10;
    const left = Math.random() * 100;
    const bg = Math.floor(Math.random() * 25) + 100;
    const time = Math.random() * 5 + 5;

    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${left}%`;
    heart.style.background = `rgba(255,${bg - 25},${bg},1)`;
    heart.style.animation = `love ${time}s ease`;

    document.querySelector('.bg_heart').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, time * 1000);
}

// Adjust heart creation interval based on screen size
const interval = window.innerWidth < 480 ? 800 : 500;
setInterval(createHeart, interval);

const txt1 = "Hi Sweetheart ❤️.....!  <<               Now I want to say something special to you 💌. <<<                So, please read everything carefully...!                                                                           > When I saw you for the first time, < you seemed like someone special to me 🌟.  <<                  As the days went by, < you got closer to me....! <<                           I don't know the reason why your thoughts always resonate in my mind...! 🌀                                                     > Everything about you is always interesting to me...! 🥰                     << I am somewhat nervous because I haven't said these words to anyone, and I won't say them to anyone in the future...!                                                     > I love my parents more than anything else in this world 🏡❤️....!                    << Now you are the only person I love almost as much as them 🫂, yet in a way that's just yours alone....! 💕                                                             > I love you, < Sweetheart ❤️.....! |                  <<<< Give me one chance to prove my love ...! 🌹";
let i = 0;
const speed = 50;

function typeWriter() {
    if (i < txt1.length) {
        if (txt1.charAt(i) == '<')
            document.getElementById("text1").innerHTML += '</br>';
        else if (txt1.charAt(i) == '>')
            document.getElementById("text1").innerHTML = '';
        else
            document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start typewriter effect
typeWriter();

// Prevent zooming on double-tap (iOS)
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// Prevent zooming on double-tap (iOS alternative method)
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
