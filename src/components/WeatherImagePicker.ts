export const WeatherImagePicker = (weatherMain: string): string => {
    const filePath = "./images/";
    const weather = weatherMain
  
    const weatherImages: { [key: string]: string } = {
      Rain: "rain.jpg",
      Clear: "clear.jpg",
      Thunderstorm: "thunderstorm.jpg",
      Drizzle: "rain.jpg",
      Clouds: "clouds.jpg",
      Snow: "snow.jpg",
      Mist: "mist.jpg",
    };
  
    return filePath + weatherImages[weather];
  };

  export default WeatherImagePicker;