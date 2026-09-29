// --- CONFIGURATION ---
// Paste just your MEGA File ID here (the characters between /file/ or /embed/ and #)
const FILE_ID = "xmQViLzZ";

// --- UI ELEMENTS ---
const lockScreen = document.getElementById("lock-screen");
const keyInput = document.getElementById("key-input");
const unlockBtn = document.getElementById("unlock-btn");
const errorText = document.getElementById("error-text");
const playerFrame = document.getElementById("active-player");

// Temporary in-memory key (wiped completely on page refresh)
let currentDecryptionKey = "";

function handleUnlock() {
    const enteredKey = keyInput.value.trim();

    // Basic check for empty key
    if (!enteredKey || enteredKey.length < 5) {
        errorText.style.display = "block";
        return;
    }

    currentDecryptionKey = enteredKey;

    // Clear inputs and hide lock screen
    keyInput.value = "";
    errorText.style.display = "none";
    lockScreen.style.display = "none";

    // Construct URL and load the stream
    playerFrame.src = `https://mega.nz/embed/${FILE_ID}#${currentDecryptionKey}`;
}

// Event Listeners
unlockBtn.addEventListener("click", handleUnlock);
keyInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleUnlock();
});
