import styled from "styled-components";

export const MainWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 1200px) {
        flex-direction: column;
    }

    p {
        font-size: 20px;
    }

    a {
        text-decoration: none;
        :hover {
            color: rgb(72,72,72);
        }
    }

    a p {
        font-size: 25px;
        color: black;
    }

    .container {
        margin: 15px 50px;
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
        backdrop-filter: blur(10px);
    }

    #weatherContainer {
        width: 500px;
        height: 600px;
    }

    #newsContainer {
        width: 500px;
        height: 600px;
        overflow: auto;
        scrollbar-color: black rgba(255, 255, 255, 0.1);
    }

    .searchArea {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .textSearch {
        width: 40%;
        height: 20px;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 5px;
    }

    ::placeholder {
        color: black;
        opacity: 0.8;
        font-size: 15px;
    }

    .weatherArea {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px 0;
    }
    
    .bottomInfoArea {
        margin: 10px;
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 12px;
        font-family: "Josefin Sans", sans-serif;
    }

    .upperInfo,
    .lowerInfo {
        display: flex;
        align-items: center;
        margin: 0 20px;
        padding: 20px 0;
    }

    .feelsLike,
    .visibility,
    .wind,
    .humidity {
        display: flex;
        align-items: center;
    }

    .wind,
    .feelsLike,
    .visibility,
    humidity {
        width: 50%;
    }

    .windIcon,
    .visibilityIcon,
    .feelsLikeIcon,
    .humidityIcon {
        margin-right: 6px;
        margin-bottom: 5px;
    }
    
    .feelsLikeIcon,
    .visibilityIcon,
    .windIcon {
        font-size: 2.5rem;
    }

    .humidityIcon {
        font-size: 2.5rem;
    }

    .searchCircle {
        :hover {
            cursor: pointer;
            color: dimgray;
        }
    }

    .searchIcon {
        font-size: 25px;
        color: black;
    }

    .mainTemp {
        font-size: 50px;
    }

    .bottomInfoValue,
    .bottomInfoDescription {
        margin: 0;
    }
`;