import { useState } from "react";

function Image({ src, alt }) {
    const [isZoomed, setIsZoomed] = useState("scale-100");
    const zoom = () => {
        if (isZoomed == "scale-100") {
            setIsZoomed("scale-150");
        }
        else {
            setIsZoomed("scale-100")
        }
    };
    return (
        <div
            className={`bg-red-600 w-full flex justify-center items-center flex-none scale-150`}
        >
            <img className={`transition-transform duration-300 ${isZoomed}`} src={src} alt={alt} onClick={zoom} draggable="false"/>
        </div>
    );
}

export default Image;
