const letterText = document.getElementById('letter-text');
const closeBtn = document.getElementById('close-letter');

const MESSAGE = `
To: Adie 🌸

And you're always free to begin again
And you're always free to believe
When you find the place that your heart belongs
You'll never leave
You and I will always be
Celebrating life together
I know I have found a friend forevermore
Love is like a melody
One that I will always treasure
Courage is the key that opens every door
Though you may not know where your gifts may lead
And it may not show at the start
When you live your dream
You'll find destiny
Is written in your heart

-beya
`;


function typeWriter(text, i = 0) {
    if (i < text.length) {
        letterText.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 50);
    } else {
        closeBtn.classList.remove('hidden');
        fadeInMusic();
    }
}


let player;
let fadeInterval;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: '05o1ahOrSVk',
        playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 0, 
            modestbranding: 1,
        },
        events: {
            'onReady': (event) => {
                event.target.setVolume(0);
                event.target.playVideo();
            },
            'onStateChange': (event) => {
                
                if (event.data === YT.PlayerState.ENDED) {
                    fadeOutMusicAndRedirect();
                }
            }
        }
    });
}

// Smooth fade-in
function fadeInMusic() {
    if (!player) return;
    let volume = 0;
    fadeInterval = setInterval(() => {
        if (volume < 100) {
            volume += 2; // Increase volume gradually
            player.setVolume(volume);
        } else {
            clearInterval(fadeInterval);
        }
    }, 100); // Every 100ms
}

// Smooth fade-out and redirect
function fadeOutMusicAndRedirect() {
    if (!player) return;
    let volume = player.getVolume();
    fadeInterval = setInterval(() => {
        if (volume > 0) {
            volume -= 2;
            player.setVolume(volume);
        } else {
            clearInterval(fadeInterval);
            player.stopVideo();
            window.location.href = "letter2.html";
        }
    }, 100); // Every 100ms
}

// Close button returns to index page
closeBtn.addEventListener('click', () => {
    if (player) player.stopVideo();
    window.location.href = "index.html";
});

// Start typing on page load
window.addEventListener('load', () => {
    typeWriter(MESSAGE);
});

