function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('utc-time').textContent = utcTime;
}

setInterval(updateTime, 1000);
updateTime();
