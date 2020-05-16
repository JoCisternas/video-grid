const AddVideo = document.getElementById('AddVideo');
var main = document.getElementById('main');

window.addVideo = () => {
// <div id="main" class="main-container p-0 m-0"></div>
  const col = document.createElement('div');
  col.className = 'col-lg-6 col-md-6 col-sm-6 col-xs-12 p-0 m-0'

  const wrapper = document.createElement('div');
  const videoTag = document.createElement('video');

  wrapper.className = 'video-wrapper';
  videoTag.className = 'video-element';

  videoTag.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4';
  videoTag.autoplay = true;
  videoTag.controls = false;
  videoTag.muted = true;

  wrapper.appendChild(videoTag);
  col.appendChild(wrapper);

  main.appendChild(col);
}

AddVideo.addEventListener('click', window.addVideo, false);