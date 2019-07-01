import React, {useEffect, useState} from 'react'

const onStyle = {transform: "scale(0.95)", boxShadow: "1px 1px 4px 4px #FC2D00, -1px -1px 4px 4px #FC2D00"};
const offStyle = {transform: "scale(1)", boxShadow: "none"};

const Drum = (props) => {
    const [isPlaying, setIsPlaying] = useState(false)

      const onPlay = () => {
        if(props.power) {
          const sound = document.getElementById(props.drum.letter);
          sound.currentTime = 0;
          sound.volume = props.volume;
          sound.play();
          props.updateDisplay(props.drum.id);
          setIsPlaying(true)

          setTimeout(() => {
            setIsPlaying(false)
          }, 100);
        }
      }

    const style = !props.power ? {background: '#FC2D00'} : isPlaying ? onStyle : offStyle;

    return (
        <div style={style} className="outer-drum-pad">
            <div className="drum-pad"
             id={props.drum.id}
             onClick={onPlay}
            >
                <audio id={props.drum.letter} 
                 src={props.drum.url}
                 className="clip"
                >
                </audio>
                {props.drum.letter}
            </div>
        </div>
    )
}

export default Drum
