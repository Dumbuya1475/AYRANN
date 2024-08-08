const spaceId = 'YOUR_CONTENTFUL_SPACE_ID';
const accessToken = 'YOUR_CONTENTFUL_ACCESS_TOKEN';

document.addEventListener('DOMContentLoaded', () => {
  fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=song`)
    .then(response => response.json())
    .then(data => {
      const musicContainer = document.getElementById('music-container');
      data.items.forEach(item => {
        const song = item.fields;
        const musicBox = document.createElement('div');
        musicBox.classList.add('music-box');

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${song.videoId}`;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        const musicTitleArtist = document.createElement('div');
        musicTitleArtist.classList.add('music-title-artist');

        const artist = document.createElement('p');
        artist.classList.add('music-artist');
        artist.textContent = song.artist;

        const title = document.createElement('p');
        title.classList.add('music-title');
        title.textContent = song.title;

        musicTitleArtist.appendChild(artist);
        musicTitleArtist.appendChild(title);

        const listenButton = document.createElement('button');
        const link = document.createElement('a');
        link.href = `https://www.youtube.com/watch?v=${song.videoId}`;
        link.target = '_blank';
        link.textContent = 'Listen now';
        listenButton.appendChild(link);

        musicBox.appendChild(iframe);
        musicBox.appendChild(musicTitleArtist);
        musicBox.appendChild(listenButton);

        musicContainer.appendChild(musicBox);
      });
    })
    .catch(error => console.error('Error fetching music data:', error));
});
