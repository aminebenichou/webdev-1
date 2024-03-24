const url = 'https://youtube-v2.p.rapidapi.com/trending/?lang=en&country=dz&section=Now';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd6f2791a72msha295b982405ced2p113a58jsn1c774b87e870',
        'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
    }
};

async function getVideos() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getVideos()
