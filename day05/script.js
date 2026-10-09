function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.querySelector(".clock").textContent =
        hours + ":" + minutes + ":" + seconds;

    document.querySelector(".date").textContent =
        now.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
}

updateClock();

setInterval(updateClock, 1000);