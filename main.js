const url = 'https://youtube-v2.p.rapidapi.com/trending/?lang=en&country=dz&section=Now';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd6f2791a72msha295b982405ced2p113a58jsn1c774b87e870',
        'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
    }
};

// vraibales

const videos = document.getElementsByClassName("videos")[0]


async function getVideos() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        for (let index = 0; index < result.videos.length; index++) {
            const title = result.videos[index].title;
            const author = result.videos[index].author;
            // creating elements
            var video = document.createElement('div');
            video.className = "video-card"
            var vid_title = document.createElement('h3');

            // appending elements
            
            vid_title.innerHTML = title;
            video.appendChild(vid_title);
            
            videos.appendChild(video);

        }
        console.log(result.videos[1]);
    } catch (error) {
        console.error(error);
    }
}



getVideos()
