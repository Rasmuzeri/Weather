import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { MainWrapper } from "./weather.module";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShirt } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { FaWind } from "react-icons/fa";

interface WeatherDataProps {
    name: string;
    main: {
        feels_like: number;
        humidity: number;
        temp: number;
    };
    visibility: number;
    weather: {
        main: string;
    }[];
    wind: {
        speed: number;
    };
}

const weatherChanger = (weatherMain?: string): string => {
    const filePath = "./images/";
    const weather = weatherMain || "Mist"; // default to Mist if main is undefined
  
    const weatherImages: { [key: string]: string } = {
      Rain: "rain.jpg",
      Clear: "clear.jpg",
      Thunderstorm: "thunderstorm.jpg",
      Drizzle: "rain.jpg",
      Clouds: "clouds.jpg",
      Snow: "snow.jpg",
      Mist: "mist.jpg",
    };
  
    return filePath + (weatherImages[weather] || weatherImages.Mist);
  };
  
  export const DisplayWeather = () => {
    const APIkey = "63e65b8f6ddd0c32e0eddc749a55f238";
    const APIendpoint = "https://api.openweathermap.org/data/2.5/";
    const defaultCity = "Helsinki";
    const [city, setCity] = useState<string>(defaultCity);
    const [inputText, setInputText] = useState<string>(defaultCity);
  
    const { data, isLoading, isError, error } = useQuery<WeatherDataProps>({
      queryKey: ["weatherData", city],
      queryFn: () =>
        Axios.get(`${APIendpoint}weather?q=${city}&appid=${APIkey}&units=metric`)
            .then(res => res.data)
    });
  
    useEffect(() => {
      setCity(defaultCity);
    }, []);
  
    const handleSearch = () => {
      // Update the city with the user-inputted value
      setCity(inputText);
    };
    
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
  
    if (isError || !data) {
      return <h1>Error: {error?.message}</h1>;
    }
  
    const { name, main, visibility, weather, wind } = data;

    return (
        <MainWrapper style={{ 
            backgroundImage: `url(${weatherChanger(weather[0]?.main)})`,
            backgroundSize: 'cover'
        }}>
            <div className="container">
                <div className="searchArea">
                    <input
                        onChange={(event) => setInputText(event.target.value)}
                        className="textSearch" type="text"
                        placeholder="Esim. Tampere tai Manchester"
                    />
                    <div className="searchCircle">
                        <AiOutlineSearch onClick={handleSearch} className="searchIcon"/>
                    </div>
                </div>

                <div className="weatherArea">
                    <h1>{name}</h1>
                    <div className="icon">
                    </div>
                    <h1 className="mainTemp">{Math.round(main.temp)} °C</h1>
                    <h2>{weather[0].main}</h2>
                </div>

                <div className="bottomInfoArea">
                    <div className="upperInfo">
                        <div className="feelsLike">
                            <FaShirt className="feelsLikeIcon"/>
                            <div className="feelsLikeInfo">
                                <h1 className="ok">{Math.round(main.feels_like)}&nbsp;°C</h1>
                                <p className="ok2">Tuntuu&nbsp;kuin</p>
                            </div>
                        </div>

                        <div className="humidity">
                            <WiHumidity className="humidityIcon"/>
                            <div className="humidityInfo">
                                <h1 className="ok">{main.humidity}&nbsp;%</h1>
                                <p className="ok2">Ilmankosteus</p>
                            </div>
                        </div>
                    </div>

                    <div className="lowerInfo">
                        <div className="visibility">
                            <MdOutlineVisibility className="visibilityIcon"/>
                            <div className="visibilityInfo">
                                {visibility < 10000 
                                    ? <h1 className="ok">{visibility/1000}&nbsp;km</h1>
                                    : <h1 className="ok">{'>'}{visibility/1000}&nbsp;km</h1>}
                                <p className="ok2">Näkyvyys</p>
                            </div>
                        </div>

                        <div className="wind">
                            <FaWind className="windIcon"/>
                            <div className="windInfo">
                                <h1 className="ok">{Math.round(wind.speed*3.6)}&nbsp;km/h</h1>
                                <p className="ok2">Tuulen&nbsp;nopeus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
}

export default DisplayWeather