document.addEventListener("DOMContentLoaded", () => {
    const clock = document.getElementById("clock");
    const toggleFormatButton = document.getElementById("toggle-format");
    const colorInput = document.getElementById("color");
    const fontSizeInput = document.getElementById("font-size");
    const alarmTimeInput = document.getElementById("alarm-time");
    const setAlarmButton = document.getElementById("set-alarm");
    const alarmStatus = document.getElementById("alarm-status");

    let is24HourFormat = false;
    let alarmTime = null;

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        if (!is24HourFormat) {
            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            clock.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
        } else {
            clock.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        }

        if (alarmTime && `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}` === alarmTime) {
            alert("Alarm! It's time!");
            alarmTime = null; // Clear alarm
            alarmStatus.textContent = "";
            localStorage.removeItem("alarmTime");
        }
    }

    toggleFormatButton.addEventListener("click", () => {
        is24HourFormat = !is24HourFormat;
        toggleFormatButton.textContent = is24HourFormat ? "Switch to 12-hour format" : "Switch to 24-hour format";
    });

    colorInput.addEventListener("input", (e) => {
        clock.style.color = e.target.value;
    });

    fontSizeInput.addEventListener("input", (e) => {
        clock.style.fontSize = `${e.target.value}px`;
    });

    setAlarmButton.addEventListener("click", () => {
        alarmTime = alarmTimeInput.value;
        if (alarmTime) {
            alarmStatus.textContent = `Alarm set for ${alarmTime}`;
            localStorage.setItem("alarmTime", alarmTime);
        } else {
            alarmStatus.textContent = "Please set a valid time.";
        }
    });

    setInterval(updateClock, 1000);
    updateClock();

    // Load saved preferences
    const savedColor = localStorage.getItem("clockColor");
    const savedFontSize = localStorage.getItem("clockFontSize");
    const savedAlarmTime = localStorage.getItem("alarmTime");

    if (savedColor) {
        clock.style.color = savedColor;
        colorInput.value = savedColor;
    }
    if (savedFontSize) {
        clock.style.fontSize = `${savedFontSize}px`;
        fontSizeInput.value = savedFontSize;
    }
    if (savedAlarmTime) {
        alarmTime = savedAlarmTime;
        alarmTimeInput.value = savedAlarmTime;
        alarmStatus.textContent = `Alarm set for ${savedAlarmTime}`;
    }

    colorInput.addEventListener("change", () => {
        localStorage.setItem("clockColor", colorInput.value);
    });

    fontSizeInput.addEventListener("change", () => {
        localStorage.setItem("clockFontSize", fontSizeInput.value);
    });
});
