const extractVideoId = (url) => {
  try {
    const videoId = url.split("embed/")[1].slice(0, 11);
    return videoId;
  } catch (error) {
    console.log(error);
    return;
  }
};

export default extractVideoId;
