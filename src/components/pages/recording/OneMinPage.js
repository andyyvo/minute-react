import React from "react";
import { Statistic, Slider } from "antd";
import { randomPrompts } from "../../../service/recording/one-min/randomPrompts";
import Play from "../../../assets/images/play.svg";
import Mic from "../../../assets/images/mic.svg";
import Clock from "../../../assets/images/clock.svg";
import ButtonRecord from "../main-app/ButtonRecord";

const { Countdown } = Statistic;

const randomIndex = (arr) => { // returns a random int value to use as an index
    return Math.floor(Math.random() * arr.length);
}

const OneMinPage = () => {
    const [question, setQuestion] = React.useState(randomPrompts[randomIndex(randomPrompts)]);

    return (
        <div className="oneMinPage">
            <div className="timer">
                <Slider min={0} max={60} defaultValue={60} reverse={true} handleStyle={{margin: "1rem"}} />
                <div className="clock">
                    <img className="clock-icon" src={Clock} alt="clock" />
                    <Countdown format="mm:ss" valueStyle={{color: "#fff"}} />
                </div>
            </div>
            <div className="question">
                <h1 className="question-prompt">{question}</h1>
            </div>
            <div className="record">
                {/* <button className="record-btn"><img src={Play} alt="Play Button" /></button> */}
                <ButtonRecord />
            </div>
        </div>
    )
}

export default OneMinPage;