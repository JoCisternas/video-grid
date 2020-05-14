const AddVideo = document.getElementById('AddVideo');
const main = document.getElementById('main');

window.addVideo = () => {

  const wrapper = document.createElement('div');
  const videoTag = document.createElement('video');

  wrapper.className = 'video-wrapper';
  videoTag.className = 'video-element';

  videoTag.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4';
  videoTag.autoplay = true;
  videoTag.controls = false;
  videoTag.muted = true;

  wrapper.appendChild(videoTag);
  main.appendChild(wrapper);
}

AddVideo.addEventListener('click', window.addVideo, false);