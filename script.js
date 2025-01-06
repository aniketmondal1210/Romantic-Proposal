function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const size = Math.random() * 55 + 10;
    const left = Math.random() * 100;
    const bg = Math.floor(Math.random() * 25) + 100;
    const time = Math.random() * 5 + 5;

    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${left}%`;
    heart.style.background = `rgba(255,${bg-25},${bg},1)`;
    heart.style.animation = `love ${time}s ease`;

    document.querySelector('.bg_heart').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, time * 1000);
}

setInterval(createHeart, 500);

const txt1 = "Hi SweetHeart.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                             >I Love U <SweetHeart.....! |                  <<<< Give me One chance to Prove my Love ...!";
let i = 0;
const speed = 50;

function typeWriter() {
    if (i < txt1.length) {
        if (txt1.charAt(i) == '<')
            document.getElementById("text1").innerHTML += '</br>'
        else if (txt1.charAt(i) == '>')
            document.getElementById("text1").innerHTML = ''
        else
            document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
