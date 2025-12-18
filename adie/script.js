const magicWordInput = document.getElementById('magic-word');
const submitBtn = document.getElementById('submit-word');
const loadingOverlay = document.getElementById('loading-overlay');

const MAGIC_WORD = "chunky";

submitBtn.addEventListener('click', () => {
    if (magicWordInput.value.trim().toLowerCase() === MAGIC_WORD) {
        
        loadingOverlay.classList.add('show');
        magicWordInput.value = '';

        
        setTimeout(() => {
            window.location.href = "letter.html";
        }, 2000);
    } else {
        alert("Wrong magic word! Try again ✨");
    }
});
