import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShirt } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { FaWind } from "react-icons/fa";

interface WeatherDataProps {
    name: string;
    feelsLike: number;
    humidity: number;
    temp: number;
    visibility: number;
    weatherType: string;
    windSpeed: number;

    handleSearch: () => void;
    setInputText: (text: string) => void;
}

export const WeatherContainer: React.FC<WeatherDataProps> = ({
  name,
  feelsLike,
  humidity,
  temp,
  weatherType,
  visibility,
  windSpeed,
  handleSearch,
  setInputText,
}) => {
  return (
    <div className="container">
        <div className="searchArea">
            <input
                onChange={(event) => setInputText(event.target.value)}
                className="textSearch" type="text"
                placeholder="Esim. tampere tai stockholm"
            />
            <div className="searchCircle">
                <AiOutlineSearch onClick={handleSearch} className="searchIcon"/>
            </div>
        </div>

        <div className="weatherArea">
            <h1>{name}</h1>
            <div className="icon">
            </div>
            <h1 className="mainTemp">{Math.round(temp)} °C</h1>
            <h2>{weatherType}</h2>
        </div>

        <div className="bottomInfoArea">
            <div className="upperInfo">
                <div className="feelsLike">
                    <FaShirt className="feelsLikeIcon"/>
                    <div className="feelsLikeInfo">
                        <h1 className="bottomInfoValue">{Math.round(feelsLike)}&nbsp;°C</h1>
                        <p className="bottomInfoDescription">Tuntuu&nbsp;kuin</p>
                    </div>
                </div>

                <div className="humidity">
                    <WiHumidity className="humidityIcon"/>
                    <div className="humidityInfo">
                        <h1 className="bottomInfoValue">{humidity}&nbsp;%</h1>
                        <p className="bottomInfoDescription">Ilmankosteus</p>
                    </div>
                </div>
            </div>

            <div className="lowerInfo">
                <div className="visibility">
                    <MdOutlineVisibility className="visibilityIcon"/>
                    <div className="visibilityInfo">
                        {visibility < 10000 
                            ? <h1 className="bottomInfoValue">{visibility/1000}&nbsp;km</h1>
                            : <h1 className="bottomInfoValue">{'>'}{visibility/1000}&nbsp;km</h1>}
                        <p className="bottomInfoDescription">Näkyvyys</p>
                    </div>
                </div>

                <div className="wind">
                    <FaWind className="windIcon"/>
                    <div className="windInfo">
                        <h1 className="bottomInfoValue">{Math.round(windSpeed*3.6)}&nbsp;km/h</h1>
                        <p className="bottomInfoDescription">Tuulen&nbsp;nopeus</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WeatherContainer;
