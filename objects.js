var playlist = { Wilco: "Impossible Germany" };

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign(playlist,{[artistname]: [songTitle]})
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.[artist];
  return playlist;
}
