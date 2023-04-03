const extractDuration = (dString) => {
  try {
    const timeArray = dString.match(/\d+/g);
    let formattedDuration = "";
    if (timeArray.length === 3) {
      const hours = parseInt(timeArray[0]);
      const minutes = parseInt(timeArray[1]);
      const seconds = parseInt(timeArray[2]);
      formattedDuration = `${hours}:${minutes}:${seconds}`;
    } else if (timeArray.length === 2) {
      const minutes = parseInt(timeArray[0]);
      const seconds = parseInt(timeArray[1]);
      formattedDuration = `${minutes}:${seconds}`;
    } else {
      const seconds = parseInt(timeArray[0]);
      formattedDuration = `0.${seconds}`;
    }
    return formattedDuration;
  } catch (error) {
    console.log(error);
    return;
  }
};

export default extractDuration;
