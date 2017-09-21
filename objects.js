var playlist = { Wilco: 'Impossible Germany'}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign(playlist, { [artistName]: songTitle })
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.[artist]
  return playlist
}
