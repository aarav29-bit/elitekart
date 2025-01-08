document.addEventListener("DOMContentLoaded", () => {
    const instructionsText = document.getElementById("instructions-text");
    const languageSelect = document.getElementById("language-select");

    const instructions = {
        english: "Enter your username and password, then click the login button to access your account.",
        hindi: "अपना उपयोगकर्ता नाम और पासवर्ड दर्ज करें, फिर अपने खाते तक पहुंचने के लिए लॉगिन बटन पर क्लिक करें।"
    };

    languageSelect.addEventListener("change", () => {
        const selectedLanguage = languageSelect.value;
        instructionsText.textContent = instructions[selectedLanguage];
    });
});
