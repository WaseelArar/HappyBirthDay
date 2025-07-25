onload = () =>{
        document.body.classList.remove("container");
};

// 👇 هذا هو كود التزامن
const audio = document.getElementById("bg-music");
const lyricLine = document.getElementById("lyric-line");

function updateLyrics() {
  const time = audio.currentTime;
  const current = lyrics.find(l => time >= l.start && time <= l.end);
  lyricLine.textContent = current ? current.text : "";
}

audio.addEventListener("timeupdate", updateLyrics);

// تشغيل تلقائي عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", () => {
  audio.play().catch(() => {
    document.addEventListener("click", () => {
      audio.play();
    }, { once: true });
  });
});
