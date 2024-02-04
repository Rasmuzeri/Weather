<!-- ABOUT THE PROJECT -->
## About The Project

![ScreenShot](https://i.postimg.cc/5Ngw42Fg/mist.png)

This is a weather app that consists of two parts: weather data and weather news. The frontend fetches the weather data from the OpenWeatherMap API. The frontend utilizes React along with Typescript, Axios, React-Query and styled components. The backend utilizes Typescript, Node, Express, CORS and Puppeteer -- which fetches the news with means of a browser. When searching for weather data, use the English name of the city/country/region.


### Getting started

Use the latest NPM
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API key at https://openweathermap.org/api
2. Clone the repo
   ```sh
   git clone git@github.com:Rasmuzeri/weather.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your OpenWeatherMap API key in `DisplayWeather.tsx`
   ```js
   const APIkey: string = "ENTER YOUR API";
   ```
5. To start the backend, cd to 'server' folder and then
   ```sh
   npm start
   ```
6. To start the frontend, cd to the root folder and then
   ```sh
   npm start
   ```
7. The app will be available at http://localhost:3000/ 


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

These resources were also used

* [Thunderstorm picture - image by Freepik](https://www.freepik.com/free-photo/weather-effects-composition_33609881.htm#query=thunderstorm&position=44&from_view=search&track=sph&uuid=d361e713-0313-49e6-94ef-32e39681eaba)
* [Snow picture - image by Montypeter](https://www.freepik.com/free-photo/frozen-plants-field_1234255.htm)
* [Mist picture - image by Vecstock](https://www.freepik.com/free-photo/mountain-peak-back-lit-by-sunrise-tranquil-scene-generated-by-ai_41318329.htm)
* [Cloud picture - image by Evening_tao](https://www.freepik.com/free-photo/black-rain-abstract-dark-power_1046114.htm)
* [Clear sky picture - image by Rawpixel.com](https://www.freepik.com/free-photo/clouds-sky_3075231.htm)
* [React Icons](https://react-icons.github.io/react-icons/search)


## More screenshots
![ScreenShot](https://i.postimg.cc/3xTs29L9/rain.png)
![ScreenShot](https://i.postimg.cc/J79VzRZf/clouds.png)
![ScreenShot](https://i.postimg.cc/y6JCKDgh/clear.png)
