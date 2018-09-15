var url = 'https://api.lyrics.ovh/v1/';
var songsList = $('#songs');

function showSongLyrics(resp) {
    var author = $('#song-artist').val();
    var title = $('#song-name').val();
    songsList.empty();
    songsList
        .append($('<h2>').text(author + ' - ' + title))
        .append($('<p>').text(resp.lyrics))
    $('#song-artist').val('');
    $('#song-name').val('');

};

function failSearching() {
    songsList.empty();
    songsList.append($('<p>').text('No lyrics found'))
};

function searchSongLyrics() {
    var artistName = $('#song-artist').val();
    var songName = $('#song-name').val();
    if (artistName.length === 0) alert('First enter artist name !');
    if (songName.length === 0) alert('First enter song name !');
    $.ajax({
        url: url + artistName + '/' + songName,
        method: 'GET',
        success: showSongLyrics,
        error: failSearching
    });
};

$('#search_songLyrics').click(searchSongLyrics);