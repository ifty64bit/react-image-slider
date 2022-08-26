import { useState, useEffect, useRef } from "react";

function Lightbox({ children }) {
    const [controller, setController] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const [translate, setTranslate] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const wrapper = useRef();

    const imageLength = children.length;

    const styles = {
        transform: `translateX(${translate}px)`,
    };

    const handelMouseDown = (e) => {
        setIsClicked(true);
        e.target.style.cursor = "grabbing";
    };

    const handelMouseMove = (e) => {
        e.preventDefault();
        if (isClicked === true) {
            const distance = e.movementX;
            if (translate > 0) {
                setTranslate(0);
            }
            else if (translate < -(wrapper.current.scrollWidth - width)) {
                setTranslate(-(wrapper.current.scrollWidth - width));
            }
            setTranslate((pre) => pre + distance);
        }
    };

    const handelMouseUp = (e) => {
        e.target.style.cursor = "pointer";
        setIsClicked(false);
    };

    const handelMouseLeave = (e) => {
        setIsClicked(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
    });

    useEffect(() => {
        setTranslate(-(controller * width));
    }, [controller])
    


    return (
        <div className="relative overflow-hidden w-screen">
            <div className="absolute z-10 left-5 inset-y-0 flex items-center">
                <button
                    className="px-4 py-2 bg-gray-300"
                    onClick={() =>
                        setController((pre) =>
                            (pre - 1) % imageLength < 0
                                ? imageLength - 1
                                : (pre - 1) % imageLength
                        )
                    }
                >
                    Prev
                </button>
            </div>
            <div className="absolute z-10 right-5 px-4 py-2 inset-y-0 flex items-center">
                <button
                    className="px-4 py-2 bg-gray-300"
                    onClick={() =>
                        setController((pre) => (pre + 1) % imageLength)
                    }
                >
                    Next
                </button>
            </div>
            <div
                ref={wrapper}
                style={styles}
                className={`flex w-screen transition-transform duration-300 snap-x snap-mandatory cursor-pointer select-none`}
                onMouseDown={handelMouseDown}
                onMouseMove={handelMouseMove}
                onMouseUp={handelMouseUp}
                onMouseLeave={handelMouseLeave}
            >
                {children}
            </div>
        </div>
    );
}

export default Lightbox;
