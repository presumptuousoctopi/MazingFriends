var protocolPrefix = (window.location.protocol === 'https:') ? 'wss://' : 'ws://';
var wsUrl = protocolPrefix + '//' + window.location.hostname + ':' + window.location.port + '/binary';
// Receive process.env.PORT from the server;
window.binaryJSclient = new BinaryClient(wsUrl);
// Listen for music stream from server
window.audioCount = 1;
window.binaryJSclient.on('stream', function(stream, meta) {
  console.log('server sent an mp3 file');
  var parts = [];
  var audioId = 'audioPlayer' + window.audioCount++;
  var audioPlayer = document.getElementById(audioId);
  audioPlayer.preload = true;
  audioPlayer.controls = 'controls';
  if ( audioId !== 'audioPlayer1' ) {
    audioPlayer.volume = .15;
    audioPlayer.pause();
  } else {
    audioPlayer.volume = .3;
    audioPlayer.autoplay = 'autoplay';
  }
  console.log('inside binaryJSclient', audioId);
  stream.on('data', function(data) {
    parts.push(data);
  });
  
  stream.on('end', function() {
    audioPlayer.src = (window.URL || window.webkitURL).createObjectURL( new Blob(parts) );
    console.log('song started playing');
  });
}); 

window.playJump = function() {
  var audioPlayer = document.getElementById('audioPlayer2');
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  audioPlayer.play();
};

window.playShoot = function() {
  var audioPlayer = document.getElementById('audioPlayer3');
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  audioPlayer.play();
};