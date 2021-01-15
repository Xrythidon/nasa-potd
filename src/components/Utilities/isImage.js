const isImage = (url) => {
    const acceptedImageUrl = "https://apod.nasa.gov/apod/image/";
    return url.includes(acceptedImageUrl);
  };

  export default isImage;