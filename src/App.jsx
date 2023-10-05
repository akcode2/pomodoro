import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [paused, setPaused] = useState(true);
  const [mode, setMode] = useState("focus");
  const [remainingSeconds, setRemainingSeconds] = useState(25 * 60);

  const clockTicksSVG = (
    <svg
      viewBox="0 0 434.869 434.87"
      overflow="visible"
      version="1.1"
      id="svg330"
      xmlns="http://www.w3.org/2000/svg"
      className="reset-svg"
    >
      <defs id="defs334" />
      <sodipodi:namedview
        id="namedview332"
        pagecolor="#ffffff"
        bordercolor="#000000"
        borderopacity="0.25"
        inkscape:showpageshadow="2"
        inkscape:pageopacity="0.0"
        inkscape:pagecheckerboard="0"
        inkscape:deskcolor="#d1d1d1"
        showgrid="false"
        inkscape:zoom="1.3525243"
        inkscape:cx="226.24363"
        inkscape:cy="262.10251"
        inkscape:window-width="1394"
        inkscape:window-height="653"
        inkscape:window-x="60"
        inkscape:window-y="50"
        inkscape:window-maximized="0"
        inkscape:current-layer="g324"
      />
      <switch id="switch326">
        <foreignObject
          y="0"
          width="1"
          requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/"
          x="0"
          height="1"
        />
        <g id="g324">
          <g id="Ebene_1">
            <g id="g295">
              <g id="g205">
                <g id="g203">
                  <path d="m217.44 401.5v28.53" fill="none" id="path199" />
                  <path
                    d="m212.44 401.5v28.53c0 6.448 10 6.448 10 0v-28.53c0-6.44-10-6.44-10 0z"
                    id="path201"
                  />
                </g>
              </g>
              <g id="g213">
                <g id="g211">
                  <path
                    d="m126.24 377.12l-15.109 24.47"
                    fill="none"
                    id="path207"
                  />
                  <path
                    d="m121.93 374.6c-5.036 8.156-10.073 16.313-15.109 24.47-3.398 5.503 5.254 10.521 8.635 5.047 5.036-8.156 10.073-16.313 15.109-24.47 3.39-5.51-5.26-10.53-8.64-5.05z"
                    id="path209"
                  />
                </g>
              </g>
              <g id="g221">
                <g id="g219">
                  <path
                    d="m58.029 308.99l-24.75 14.748"
                    fill="none"
                    id="path215"
                  />
                  <path
                    d="m55.506 304.67l-24.75 14.748c-5.533 3.297-0.506 11.944 5.047 8.635l24.75-14.748c5.532-3.3 0.506-11.95-5.047-8.64z"
                    id="path217"
                  />
                </g>
              </g>
              <g id="g229">
                <g id="g227">
                  <path d="m32.931 217.44h-28.095" fill="none" id="path223" />
                  <path
                    d="m32.931 212.44h-28.095c-6.449 0-6.449 10 0 10h28.095c6.449 0 6.449-10 0-10z"
                    id="path225"
                  />
                </g>
              </g>
              <g id="g237">
                <g id="g235">
                  <path
                    d="m58.39 125.09l-25.11-13.952"
                    fill="none"
                    id="path231"
                  />
                  <path
                    d="m60.913 120.77c-8.37-4.651-16.74-9.301-25.11-13.952-5.642-3.135-10.684 5.503-5.047 8.635 8.37 4.651 16.74 9.301 25.11 13.952 5.642 3.13 10.684-5.51 5.047-8.64z"
                    id="path233"
                  />
                </g>
              </g>
              <g id="g245">
                <g id="g243">
                  <path
                    d="m124.81 57.492l-13.67-24.212"
                    fill="none"
                    id="path239"
                  />
                  <path
                    d="m129.12 54.968c-4.557-8.071-9.114-16.141-13.671-24.211-3.17-5.614-11.81-0.576-8.635 5.047 4.557 8.071 9.114 16.141 13.671 24.211 3.17 5.614 11.81 0.576 8.63-5.047z"
                    id="path241"
                  />
                </g>
              </g>
              <g id="g253">
                <g id="g251">
                  <path d="m217.44 33v-28.163" fill="none" id="path247" />
                  <path
                    d="m222.44 33v-28.163c0-6.449-10-6.449-10 0v28.163c0 6.449 10 6.449 10 0z"
                    id="path249"
                  />
                </g>
              </g>
              <g id="g261">
                <g id="g259">
                  <path
                    d="m310.24 58.288l13.494-25.008"
                    fill="none"
                    id="path255"
                  />
                  <path
                    d="m314.56 60.812c4.498-8.336 8.996-16.672 13.494-25.008 3.062-5.674-5.572-10.723-8.635-5.047-4.498 8.336-8.996 16.672-13.494 25.008-3.07 5.674 5.57 10.723 8.63 5.047z"
                    id="path257"
                  />
                </g>
              </g>
              <g id="g269">
                <g id="g267">
                  <path
                    d="m376.84 125.88l24.75-14.749"
                    fill="none"
                    id="path263"
                  />
                  <path
                    d="m379.36 130.2c8.25-4.917 16.5-9.833 24.75-14.749 5.532-3.297 0.507-11.944-5.047-8.635-8.25 4.917-16.5 9.833-24.75 14.749-5.53 3.29-0.5 11.94 5.05 8.63z"
                    id="path265"
                  />
                </g>
              </g>
              <g id="g277">
                <g id="g275">
                  <path d="m401.44 217.44h28.598" fill="none" id="path271" />
                  <path
                    d="m401.44 222.44h28.598c6.448 0 6.448-10 0-10h-28.598c-6.45 0-6.45 10 0 10z"
                    id="path273"
                  />
                </g>
              </g>
              <g id="g285">
                <g id="g283">
                  <path d="m377.2 309.8l24.39 13.93" fill="none" id="path279" />
                  <path
                    d="m374.68 314.12c8.13 4.644 16.26 9.286 24.39 13.93 5.608 3.203 10.645-5.438 5.047-8.635-8.13-4.644-16.26-9.286-24.39-13.93-5.61-3.21-10.65 5.43-5.05 8.63z"
                    id="path281"
                  />
                </g>
              </g>
              <g id="g293">
                <g id="g291">
                  <path
                    d="m309.52 376.3l14.211 25.288"
                    fill="none"
                    id="path287"
                  />
                  <path
                    d="m305.21 378.83c4.737 8.43 9.474 16.859 14.211 25.288 3.159 5.621 11.798 0.581 8.635-5.047-4.737-8.43-9.474-16.858-14.211-25.288-3.17-5.62-11.81-0.58-8.64 5.05z"
                    id="path289"
                  />
                </g>
              </g>
            </g>
            <g id="g321">
              <g id="g303">
                <g id="g301">
                  <path d="m218.59 217.18h-0.701" fill="none" id="path297" />
                </g>
              </g>
              <g id="g311">
                <g id="g309">
                  <path d="m217.8 217.92v-112.31" fill="none" id="path305" />
                </g>
              </g>
              <g id="g319">
                <g id="g317">
                  <path d="m217 217.18l-79.98-138.4" fill="none" id="path313" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </switch>
      <metadata id="metadata328">
        <rdf:RDF>
          <cc:Work>
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <cc:license rdf:resource="http://creativecommons.org/licenses/publicdomain/" />
            <dc:publisher>
              <cc:Agent rdf:about="http://openclipart.org/">
                <dc:title>Openclipart</dc:title>
              </cc:Agent>
            </dc:publisher>
            <dc:title>clock michael breuer 04</dc:title>
            <dc:date>2010-10-12T22:19:09</dc:date>
            <dc:description>
              Originally uploaded for OCAL 0.18 by Michael Breuer
            </dc:description>
            <dc:source>
              https://openclipart.org/detail/90235/clock-michael-breuer-04-by-anonymous
            </dc:source>
            <dc:creator>
              <cc:Agent>
                <dc:title>Anonymous</dc:title>
              </cc:Agent>
            </dc:creator>
            <dc:subject>
              <rdf:Bag>
                <rdf:li>fix</rdf:li>
                <rdf:li>keyword</rdf:li>
                <rdf:li>librarian</rdf:li>
                <rdf:li>tag</rdf:li>
              </rdf:Bag>
            </dc:subject>
          </cc:Work>
          <cc:License rdf:about="http://creativecommons.org/licenses/publicdomain/">
            <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction" />
            <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution" />
            <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks" />
          </cc:License>
        </rdf:RDF>
      </metadata>
    </svg>
  );

  const playSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
      {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
      <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
    </svg>
  );

  const pauseSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
      {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
      <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
    </svg>
  );

  const skipSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
      {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
      <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z" />
    </svg>
  );

  const resetSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
      {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
      <path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" />
    </svg>
  );

  

  useEffect(() => {
    let interval;
    if (!paused && remainingSeconds > 0) {
      interval = setInterval(() => {
        // Update remaining seconds
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);

        /* Update the progress bar */

        // Determine fraction of time remaining
        const timeLimit = mode === "focus" ? 1500 : 300;
        const rawTimeFraction = remainingSeconds / timeLimit;
        const timeFraction =
          rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);

        // Compute the length of dash representing progress
        // This number is proportional to 251.327 (2 * pi * 40 (radius of the circle in svg))
        const circleDasharray = `${(timeFraction * 251.327).toFixed(
          0
        )} 251.327`;

        // Set the progress bar's length
        document
          .getElementById("timer-path-remaining")
          .setAttribute("stroke-dasharray", circleDasharray);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [paused, remainingSeconds]);

  const handleStart = () => {
    setPaused(false);
    document
      .querySelector("#clockTickAnimation > svg")
      .setAttribute("class", "rotate-svg");
    console.log(`updated paused:${paused}`);
  };
  const handlePause = () => {
    setPaused(true);
    document
      .querySelector("#clockTickAnimation > svg")
      .setAttribute("class", "reset-svg");
  };

  const handleSkip = () => {
    if (mode === "focus") {
      setMode("break");
      setRemainingSeconds(5 * 60);
      document.querySelector(".timer__path-elapsed").style.stroke = "#91EBA0";
      document.querySelector(".timer__path-remaining").style.stroke = "#48DB63";
    } else {
      setMode("focus");
      setRemainingSeconds(25 * 60);
      document.querySelector(".timer__path-elapsed").style.stroke = "#EB9592";
      document.querySelector(".timer__path-remaining").style.stroke = "#DB4F48";
    }
  };

  const handleReset = () => {
    if (mode === "focus") {
      setRemainingSeconds(25 * 60);
    } else {
      setRemainingSeconds(5 * 60);
    }
  };

  const minutes = `${Math.floor(remainingSeconds / 60)}`.padStart(2, 0);
  const seconds = `${remainingSeconds % 60}`.padStart(2, 0);
  let remainingPathColor = "#EB9592";

  const handleKeypress = (event) => {
    if (event.key === " ") {
      if (paused) {
        handleStart();
      }
      else {
        handlePause();
      }
    }
    if (event.key === "ArrowRight") {
      handleSkip();
    }
    if (event.key === "r") {
      handleReset();
    }
  }

  // Listen for keyboard input
  document.addEventListener("keyup", handleKeypress);
  return (
    <>
      <div className="status">
        {mode === "focus" && (
          <>
            <span className="timeTo">Time to </span>
            <br />
            <span className="doWhat">focus!</span>
          </>
        )}
        {mode === "break" && (
          <>
            <span className="timeTo">Take a</span>
            <br />
            <span className="doWhat">short break!</span>
          </>
        )}
      </div>
      <div className="app">
        <div className="btnContainer">
          <button onClick={handleStart} disabled={!paused}>
            <i className="icon">{playSVG}</i>
          </button>
          <button onClick={handlePause} disabled={paused}>
            <i className="icon">{pauseSVG}</i>
          </button>
          <button onClick={handleSkip}>
            <i className="icon">{skipSVG}</i>
          </button>
          <button onClick={handleReset}>
            <i className="icon">{resetSVG}</i>
          </button>
        </div>
        <div className="timer">
          <svg
            className="timer__svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="timer__circle">
              <circle className="outerCircle" cx="50" cy="50" r="50" />
              <circle className="timer__path-elapsed" cx="50" cy="50" r="40" />
              <path
                id="timer-path-remaining"
                strokeDasharray="251.327 251.327"
                className={`timer__path-remaining ${remainingPathColor}`}
                d="
            M 50, 50
            m -40, 0
            a 40,40 0 1,0 80,0
            a 40,40 0 1,0 -80,0
          "
              ></path>
            </g>
          </svg>
          <span id="timeSpan">
            {`${minutes}`}:{seconds}
          </span>
        </div>
        <div id="clockTickAnimation">{clockTicksSVG}</div>
      </div>
    </>
  );
};

export default App;

// To Do:
// 1. create basic state, start button, pause button, reset buttons, skip to break button
// 2. Design app in figma

// 3. Implement design
// Set background color according to mode
