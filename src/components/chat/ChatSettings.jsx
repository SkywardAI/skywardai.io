import { useState, useEffect } from 'react';
import '../../styles/chatSettings.css';
import settingsIcon from '../../media/settings-icon.svg' ;
import leftArrow from '../../media/left-arrow.svg';
import { loadModel, resetInstance } from "../../utils/worker";

const Settings = ({setNpredict, setTemp, setNbatch, setNctx}) => {
  const [open, setOpen] = useState(true);
  const [nPredict, nPredictValue] = useState(50);
  const [temp, tempValue] = useState(0.2);
  const [nBatch, nBatchValue] = useState(64)
  const [nCtx, nCtxValue] = useState(2048)

  const openSettings = () => setOpen(!open);

  const maximums = {nBatch: 128, nCtx: 4096, nPredict: 128, temp: 100}

  useEffect(() => {
            setNpredict(nPredict);
            setTemp(temp);
            setNbatch;
            setNctx;
  }, [nPredict, temp, setNpredict, setTemp, setNbatch, setNctx]);

  function reload(event) {
    event.preventDefault();
    try {
        resetInstance();
        loadModel('completion', parseInt(nBatch), parseInt(nCtx))
        return alert("Model successfully reloaded");
    }
    catch(error) {
        console.error(error)
    }
  }

  return (
    <div>
      <div className={`settings ${open ? 'open' : ''}`}>
        <div className="main-content">
        <h3>Chat Settings</h3>
          <div className="slider-container">
            <label htmlFor="nPredict"><b>Predictions:</b></label><br/>
            <input className="number-input"
              type="number"
              id="nPredict"
              max={maximums.nPredict}
              value={nPredict}
              onChange={(e) => nPredictValue(e.target.value)}/>
            <input
              type="range"
              id="nPredict"
              step={1}
              max={maximums.nPredict}
              value={nPredict}
              onChange={(e) => nPredictValue(e.target.value)}/>
          </div>

          <div className="slider-container">
            <label htmlFor="temp"><b>Temperature:</b></label><br/>
            <input className="number-input"
              type="number"
              id="temp"
              step={0.15}
              max={maximums.temp}
              value={temp}
              onChange={(e) => tempValue(e.target.value)}/>
            <input
              type="range"
              id="temp"
              step={0.15}
              max={maximums.temp}
              value={temp}
              onChange={(e) => tempValue(e.target.value)}/>
          </div>
          <hr/>
            <div className="slider-container">
            <label htmlFor="nCtx"><b>Context Length:</b></label><br/>
            <input className="number-input"
              type="number"
              id="nCtx"
              max={maximums.nCtx}
              value={nCtx}
              onChange={(e) => nCtxValue(e.target.value)}/>
            <input
              type="range"
              id="nCtx"
              step={1}
              max={maximums.nCtx}
              value={nCtx}
              onChange={(e) => nCtxValue(e.target.value)}/>
          </div>
          <div className="slider-container">
            <label htmlFor="nBatch"><b>Batch size:</b></label><br/>
            <input className="number-input"
              type="number"
              id="nBatch"
              max={maximums.nBatch}
              value={nBatch}
              onChange={(e) => nBatchValue(e.target.value)}/>
            <input
              type="range"
              id="nBatch"
              step={1}
              max={maximums.nBatch}
              value={nBatch}
              onChange={(e) => nBatchValue(e.target.value)}/>
          </div>
          <b  className='notice'>Changing the context length or Batch size will require you to reload the model.</b>
          <hr/>
          <button onClick={reload} className='reload'>Reload Model</button>
        </div>
        <button onClick={openSettings} className={`toggle ${open ? 'open' : ''}`}>
          {open ? <img className="settingsIcon" src={settingsIcon}></img> : <img className='leftArrow' src={leftArrow}></img>}
          </button>
        </div>
          
      </div>
  );
};

export default Settings;