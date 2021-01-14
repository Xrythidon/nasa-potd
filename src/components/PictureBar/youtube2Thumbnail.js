
const youtubeIdExtractor = (youtubeUrl) => {
    const myregexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const found = youtubeUrl.match(myregexp);

    return found[1];
  

}



const youtube2Thumbnail = (url) => {
  const id =  youtubeIdExtractor(url);
  return `https://img.youtube.com/vi/${id}/0.jpg`
}

export default youtube2Thumbnail;