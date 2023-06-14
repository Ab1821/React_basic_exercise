import React, { useState, useEffect, useReducer } from 'react';

function Time_Reducer(props) {
    // const [hour, setHour] = useState('00')
    // const [min, setMin] = useState('00')
    // const [sec, setSec] = useState('00')
    const [timerOn, setTimerOn] = useState(false)
    const initialvalue = { time: 0, hour: '00', min: '00', sec: '00', isRunning: false }

    function Reducer(state, action) {
        switch (action.type) {
            case 'Start': {
                return { setSec: state.setSec + 1 }
            }
            case 'Stop': {

            }

        }

    }
    const [state, dispatch] = useReducer(Reducer, initialvalue)

    return (
        <>
            <div className="main-section mt-10 d-flex justify-content-center align-item-center" style={{ marginTop: 20 }}>
                <div className="clock-holder">
                    <h1>STOPWATCH</h1>
                    <div className='time'>{initialvalue}</div>  <br />
                    <div>
                        <button className='start btn-primary' onClick={() => { dispatch({ type: 'Start' }) }}>Start</button>
                        <button className='stop btn-primary ' onClick={() => { setTimerOn(false) }}>Stop</button>
                        {/* <button className='resume btn-primary' onClick={() => { setTimerOn(true) }}>Resume</button> */}
                        <button className='reset btn-primary' onClick={() => { setTimerOn(false) }}>Reset</button>
                    </div>

                </div>
            </div>
        </>
    );



    /*  const initialState = {
          centiseconds: 0,
          seconds: 0,
          minutes: 0,
          timerOn: false,
      };
  
      const reducer = (state, action) => {
          switch (action.type) {
              case "START":
                  return {
                      ...state,
                      timerOn: true,
                  };
              case "STOP":
                  return {
                      ...state,
                      timerOn: false,
                  };
              case "RESET":
                  return initialState;
              case "SET_CENTISECONDS":
                  return {
                      ...state,
                      centiseconds: action.payload.centiseconds,
                  };
              case "SET_SECONDS":
                  return {
                      ...state,
                      seconds: action.payload.seconds,
                  };
              case "SET_MINUTES":
                  return {
                      ...state,
                      minutes: action.payload.minutes,
                  };
  
              default:
                  return initialState;
          }
      };
  
      function Timer(props) {
          const [state, dispatch] = useReducer(reducer, initialState);
          const { centiseconds, seconds, minutes, timerOn } = state;
  
          useInterval(() => {
              if (!timerOn) return;
  
              dispatch({
                  type: "SET_CENTISECONDS",
                  payload: {
                      centiseconds: centiseconds === 99 ? 0 : centiseconds + 1,
                  },
              });
          }, 10);
  
          useInterval(() => {
              if (!timerOn) return;
  
              dispatch({
                  type: "SET_SECONDS",
                  payload: {
                      seconds: seconds === 59 ? 0 : seconds + 1,
                  },
              });
          }, 1000);
  
          useInterval(() => {
              if (!timerOn) return;
  
              dispatch({
                  type: "SET_MINUTES",
                  payload: {
                      minutes: minutes === 59 ? 0 : minutes + 1,
                  },
              });
          }, 60000);
  
          return (
              <>
                  <div>
                      {String(minutes).padStart(2, "0")} : {String(seconds).padStart(2, "0")}{" "}
                      : {String(centiseconds).padStart(2, "0")}
                  </div>
                  {timerOn === false && (
                      <button onClick={() => dispatch({ type: "START" })}>Start</button>
                  )}
                  {timerOn === true && (
                      <button onClick={() => dispatch({ type: "STOP" })}>Stop</button>
                  )}
                  {<button onClick={() => dispatch({ type: "RESET" })}>Reset</button>}
              </>
          );
      }
  
      // source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
      function useInterval(callback, delay) {
          const savedCallback = useRef();
  
          // Remember the latest callback.
          useEffect(() => {
              savedCallback.current = callback;
          }, [callback]);
  
          // Set up the interval.
          useEffect(() => {
              function tick() {
                  savedCallback.current();
              }
              if (delay !== null) {
                  let id = setInterval(tick, delay);
                  return () => clearInterval(id);
              }
          }, [delay]);
      }
  
  
  }
  */
}
export default Time_Reducer;