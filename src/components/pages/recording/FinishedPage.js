import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fbGetRecording } from "../../../service/firebase/fbConfig";
import { Space, Spin } from "antd";
import Typewriter from "typewriter-effect";
import {
  parseDisfluencies,
  redHighlight,
} from "../../../service/recording/fillerWordDetect";

const Finished = () => {
  const location = useLocation();
  const history = useNavigate();
  const [recordingData, setRecordingData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setRecordingData({name: location.state.name, prompt: location.state.prompt, transcript: location.state.transcript, url:fbGetUrl(location.state.name)});
    setRecordingData(fbGetRecording(location.state.name));
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // sleep for 5 seconds before fetching the recoding to ensure url has been uploaded
  }, []);

  const handleHomeClick = () => {
    history("/app/record");
  };

  const handleRecordClick = () => {
    history("/one-min");
  };

  const renderResults = () => {
    console.log(isLoading);
    if (!isLoading && recordingData) {
      return (
        <div className="finishedResults">
          <div className="finishedResults-title">
            <h1>Results</h1>
          </div>
          <div className="finishedResults-textWrapper">
            <span className="finishedResults-textContent">
              <b>Topic:</b> {recordingData.prompt}
            </span>
          </div>
          <hr
            className="recordingLine"
            size="2px"
            width="100%"
            color="#BBD2E7"
          ></hr>
          <div className="finishedResults-textWrapper">
            <span className="finishedResults-textContent">
              <b>Text:</b> {redHighlight(recordingData.transcript)}
            </span>
          </div>
          <hr
            className="recordingLine"
            size="2px"
            width="100%"
            color="#BBD2E7"
          ></hr>
          {recordingData.url && (
            <audio controls>
              <source src={recordingData.url} type="audio/mpeg" />
            </audio>
          )}
          <Space size="large" style={{ marginTop: "20px" }} />
          <div className="finishedResults-buttons">
            <button
              className="finishedResults-button-1"
              onClick={handleRecordClick}
            >
              Generate another prompt
            </button>
            <button
              className="finishedResults-button-2"
              onClick={handleHomeClick}
            >
              Return to app
            </button>
          </div>

          {/* <div>
                        <h3>{typeof(recordingData.transcript)}</h3>
                        <h3>{parseDisfluencies(recordingData.transcript).stringSplit}</h3>
                        <h3>{redHighlight(recordingData.transcript)}</h3>
                    </div> */}
        </div>
      );
    } else {
      return (
        <div className="loading-page">
            <h1 className="question-prompt">
                <Typewriter
                    options={{
                        strings: ["Getting your audio file...", "Building your recording...", "Writing your transcription...", "Analyzing the data...", "Finding those filler words..."],
                        autoStart: true,
                        loop: true,
                        color: "#fff",
                        delay: 75,
                    }}
                />
            </h1>
        </div>
    );
    }
  };

  return <div className="finishedPage">{renderResults()}</div>;
};

export default Finished;
