
const videos = document.querySelectorAll("body > video");
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");

    videos.forEach(video => {
      video.addEventListener("click", () => {
        modal.style.display = "flex";
        modalVideo.src = video.src;
        modalVideo.play();
      });
    });

    function closeModal() {
      modal.style.display = "none";
      modalVideo.pause();
      modalVideo.src = "";
    }