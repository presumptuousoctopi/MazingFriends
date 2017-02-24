// Listen for music stream from server
window.client.on('stream', function(stream, meta) {
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
