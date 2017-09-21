var playlist = {Wilco: "Impossible Germany"}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.[artist];
  return playlist;
}
