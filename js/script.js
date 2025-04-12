const text = `             hUhuhu

Việt Anh ơi đừng chửi bạn nữa, người đẹp trai nhất thế giới cũng biết buồn mà`;

const letterContainer = document.getElementById("letterContainer");
const typedText = document.getElementById("typedText");
const music = document.getElementById("bg-music"); // Lấy thẻ audio

// Thêm sự kiện click để phát nhạc khi người dùng bấm vào trang
document.body.addEventListener("click", () => {
    if (music) {
        music.volume = 1;  // Đặt âm lượng ở mức 100%
        music.play().catch(e => console.log("Music autoplay blocked:", e));  // Phát nhạc
    }
});

// Bắt đầu hiệu ứng gõ chữ và mưa emoji tức giận và emoji phân
typeText(text);
startEmojiRain();

function typeText(str) {
    let i = 0;
    const speed = 50;
    const typer = setInterval(() => {
        typedText.textContent += str.charAt(i);
        i++;
        if (i >= str.length) clearInterval(typer);
    }, speed);
}

function startEmojiRain() {
    setInterval(() => {
        const emoji = document.createElement("div");
        emoji.classList.add("heart");
        emoji.textContent = "😡";  // Thêm emoji tức giận
        emoji.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 6000);

        // Thêm emoji phân vào mưa emoji
        const poopEmoji = document.createElement("div");
        poopEmoji.classList.add("emoji");
        poopEmoji.textContent = "💩";  // Thêm emoji phân
        poopEmoji.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(poopEmoji);
        setTimeout(() => poopEmoji.remove(), 6000);
    }, 200);
}