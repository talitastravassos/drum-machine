import React, {useEffect, useState} from 'react'

const SidePanel = (props) => {

    const style = props.power ? {background: "#0ad82c"} : {background: "#063d0f", boxShadow: "none"};
    return (
        <div className="side-panel">
        <div className="label">Drum Machine FCC</div>
        <div style={props.colorStyle} className="display" id="display">{props.currentSound}</div>
        <div>
          <p>Power</p>
          <button style={style} onClick={props.togglePower}></button>
        </div>
        <div>
          <p>Volume</p>
          <input value={props.volumeInput} 
                 type="range"
                 min="1" 
                 max="100" 
                 onChange={props.changeVolume}>
          </input>
        </div>
        <div className="speakers">
          <hr/>
          <hr/>
          <hr/>
          <hr/>
          <hr/>
        </div>
      </div>
    )
}

export default SidePanel
