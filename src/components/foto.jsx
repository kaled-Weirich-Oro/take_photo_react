import React, {useState, useRef, useCallback} from "react";
import Webcam from "react-webcam";

function Foto(){
    const [image, setImage] = useState();
    const webcamRef = useRef(null);
    const capture = useCallback(
      () => {
        setImage(webcamRef.current.getScreenshot());
      },
      [webcamRef]
    );
    return (
      <>
        <Webcam 
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
        />
        <button onClick={capture}>Tirar foto</button>
        <img src={`${image}`} />
      </>
    )
};
export default Foto;