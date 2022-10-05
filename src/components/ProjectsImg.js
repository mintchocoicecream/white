import React, { useState } from "react";

function ProjectsImg(){
    const [hover, setHover] = useState(false);
    const onMouse = () => {
      setHover(true);
    }

    const offMouse = () => {
      setHover(false);
    }
    return(
        <div className="projImg" onMouseEnter={onMouse} onMouseLeave={offMouse}>
            {hover===false?(
            <img src="https://user-images.githubusercontent.com/64584574/194051190-5ee26990-3da4-4a44-a065-ad8982690c38.png" alt="icecup"/>
            ):(
            <img src="https://user-images.githubusercontent.com/64584574/194051196-303552e7-cf40-43ce-9c3f-5689d4ee8c2d.png" alt="icecup"/>
            )}
        </div>
    )
}

export default ProjectsImg;