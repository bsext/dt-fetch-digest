const fs = require('fs');
const DigestFetch = require('digest-fetch')

const url = "http://birdcam.trueddns.com:11000/media/cam0/still.jpg?res=max"

download().then((res)=>{
    console.log('FINISH')
})

async function download() {
    const client = new DigestFetch('camuser', 'camuser') 
    const response = await client.fetch(url);
    const buffer = await response.buffer();
    fs.writeFile(`./image.jpg`, buffer, () => 
        console.log('finished downloading!'));
}