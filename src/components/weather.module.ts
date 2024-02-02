import styled from "styled-components";

export const MainWrapper = styled.div`
    height: 100vh;

    .container {
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 12px;
        padding: 2rem;
        position: absolute;
        top: 25%;
        left: 10%;
        box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
        backdrop-filter:blur(10px);
    }

    .searchArea {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }

    .textSearch {
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.3);
        width: 40%;
        height: 20px;
    }

    ::placeholder {
        color: black;
        opacity: 0.8;
      }

    .weatherArea {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 30px 0;
    }

    .bottomInfoArea {
        background-color: rgba(255, 255, 255, 0.15);
        font-family: "Josefin Sans", sans-serif;
        margin: 10px;
        border-radius: 12px;
        padding: 10px;
    }

    .lowerInfo,
    .upperInfo {
        display: flex;
        align-items: center;
        margin: 0 20px;
        padding: 20px 0;
    }

    .feelsLike,
    .visibility,
    .wind {
        display: flex;
        align-items: center;
        margin: 0 30px;
        width: 50%;
    }

    .humidity {
        display: flex;
        align-items: center;
        width: 55%;
    }


    .windIcon,
    .visibilityIcon,
    .feelsLikeIcon {
        font-size: 2.5rem;
        margin-right: 6px;
        margin-bottom: 5px;
    }

    .humidityIcon {
        font-size: 3rem;
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
`