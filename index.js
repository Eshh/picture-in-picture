const videoRef = document.getElementById("video");
const btnRef = document.getElementById("btn");

// Prompt user to select video stream

async function selectMediaStream() {
  try {
    const media = await navigator.mediaDevices.getDisplayMedia();
    videoRef.srcObject = media;
    videoRef.onloadedmetadata = () => {
      videoRef.hidden = false;
      videoRef.play();
    };
  } catch (error) {
    alert("whoops! something went wrong.", error);
  }
}

btnRef.addEventListener("click", async () => {
  btnRef.disabled = true;
  await videoRef.requestPictureInPicture();
  btnRef.disabled = false;
});

// On load
selectMediaStream();
