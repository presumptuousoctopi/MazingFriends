var protocolPrefix = (window.location.protocol === 'https:') ? 'wss://' : 'ws://';
var wsUrl = protocolPrefix + '//' + window.location.hostname + ':' + window.location.port + '/binary';
// Receive process.env.PORT from the server;
window.binaryJSclient = new BinaryClient(wsUrl);
// Listen for music stream from server
window.binaryJSclient.on('stream', function(stream, meta) {
  console.log('server sent an mp3 file');
  var parts = [];
  var audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.preload = true;
  audioPlayer.autoplay = true;
  audioPlayer.controls = 'controls';

  stream.on('data', function(data) {
    parts.push(data);
  });
  
  stream.on('end', function() {
    audioPlayer.src = (window.URL || window.webkitURL).createObjectURL( new Blob(parts) );
    console.log('song started playing');
  });
}); 