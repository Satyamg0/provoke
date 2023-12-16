const apiKey = "30c29d0678msh41827fb4027c4a5p13b392jsn153422666081";
const videoId = "M7FIvfx5J10";

const scriptTag = document.createElement("script");
scriptTag.src = "youtube-v31.p.rapidapi.com";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: videoId,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {}
