const faviconFrames = Array.from(
  { length: 13 },
  (_, i) => `./images/cog/cog${i + 1}.png`
);
let currentFrame = 0;
function animateFavicon() {
  const favicon = document.getElementById("favicon");
  favicon.href = faviconFrames[currentFrame];
  currentFrame = (currentFrame + 1) % faviconFrames.length;
}
setInterval(animateFavicon, 84);
