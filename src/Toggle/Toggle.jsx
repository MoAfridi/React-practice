import React, {useState} from 'react'

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  const handleShowHide = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div style={{color: "red",backgroundColor: "black"}}> 
      {isVisible && <p>Rimi ki amk biye korbe</p>}
      <div style={{textAlign : "center", paddingTop : "50px", gap : "20px"}}>
      <button onClick={handleShowHide} value={isVisible}>
        {isVisible ? "Hide" : "Show"}
      </button>
      </div>
    </div>
  )
}
