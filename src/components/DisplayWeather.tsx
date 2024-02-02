import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { MainWrapper } from "./weather.module";
import { WeatherContainer } from "../components/WeatherContainer";
import { mainStylis } from "styled-components/dist/models/StyleSheetManager";
import { WeatherImagePicker } from "../components/WeatherImagePicker";

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
  
  export const DisplayWeather = () => {
    const APIkey = "63e65b8f6ddd0c32e0eddc749a55f238";
    const APIendpoint = "https://api.openweathermap.org/data/2.5/";
    const defaultCity = "Helsinki";
    const [city, setCity] = useState<string>(defaultCity);
    const [inputText, setInputText] = useState<string>(defaultCity);
    const [backgroundImage, setBackgroundImage] = useState<string>("");
  
    const { data, isLoading, isError, error } = useQuery<WeatherDataProps>({
      queryKey: ["weatherData", city],
      queryFn: () =>
        Axios.get(`${APIendpoint}weather?q=${city}&appid=${APIkey}&units=metric`)
            .then(res => res.data)
    });

    useEffect(() => {
        if (data) {
          setBackgroundImage(`url(${WeatherImagePicker(data.weather[0]?.main)})`);
        }
      }, [data]);    
  
    useEffect(() => {
        setCity(defaultCity);
      }, [defaultCity]);       
  
    const handleSearch = () => {
      // Update the city with the user-inputted value
      setCity(inputText);
    };
    
    if (isLoading) {
      return (
        <div style={{ backgroundImage: backgroundImage }}>
        </div>
      );
    }
  
    if (isError || !data) {
      return <h1>Tällaista kaupunkia ei löytynyt: {error?.message}</h1>;
    }
  
    const { name, main, visibility, weather, wind } = data;

    return (
        <MainWrapper style={{ 
            backgroundImage: backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <WeatherContainer
                name={name}
                feelsLike = {main.feels_like}
                humidity = {main.humidity}
                temp = {main.temp}
                weatherType={weather[0].main}
                visibility={visibility}
                windSpeed={wind.speed}
                handleSearch={handleSearch}
                setInputText={setInputText}
            />
        </MainWrapper>
    );
}

export default DisplayWeather