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
            const videoId = result.videos[index].video_id;
            const nov = result.videos[index].number_of_views;
            const thumbnail = result.videos[index].thumbnails[0].url;

            console.log(videoId);

            // creating elements
            var vid_id = document.createElement('span');
            vid_id.style.display = 'none'
            vid_id.innerHTML = videoId
            var video = document.createElement('div');
            video.className = "video-card"
            var vid_title = document.createElement('h3');
            var vid_link = document.createElement('a');
            vid_link.className = 'video'
            var vid_thumbnail = document.createElement('img');
            var vid_nov = document.createElement('p');


            // appending elements

            vid_title.innerHTML = title;
            vid_thumbnail.src = thumbnail;
            vid_nov.innerHTML = nov;
            // vid_link.href = './video.html'


            video.appendChild(vid_thumbnail);
            video.appendChild(vid_title);
            video.appendChild(vid_nov);
            vid_link.appendChild(vid_id);
            vid_link.appendChild(video);
            videos.appendChild(vid_link);


        }
        const video_cards = document.querySelectorAll('.video')

        video_cards.forEach(element => {
            element.addEventListener('click', (e) => {
                const vidId = element.children[0].innerHTML
                document.cookie = `videoId=${vidId}`;
                alert("Welcome again " + vidId);
                window.location.href = `./video.html`
            })
        });


        // event listener using foreach for multiple items
        const li_home = document.querySelectorAll('.trigger')

        li_home.forEach(element => {
            element.addEventListener('click', (e) => {
                element.classList.toggle('active')
            })
        })
        // event listner for one item
        const search = document.getElementById("search")
        const main = document.getElementsByClassName( 'center')[0]
        search.addEventListener("click", function (e){
            main.classList.toggle("active")
        })
            console.log(result.videos[1]);
    } catch (error) {
        console.error(error);
    }
}





getVideos()




