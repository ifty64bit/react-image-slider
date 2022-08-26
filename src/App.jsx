import { useState, useEffect } from "react";
import Lightbox from "./components/Lightbox";

function App() {
    return (
        <Lightbox>
            <div className="bg-red-600 w-full flex justify-center items-center flex-none">
                <img
                    className=""
                    src="https://cdn.pixabay.com/photo/2022/07/15/20/13/strawberries-7323943_960_720.jpg"
                    alt="strawberrie"
                    draggable="false"
                />
            </div>
            <div className="bg-violet-600 w-full flex justify-center items-center flex-none">
                <img
                    src="https://cdn.pixabay.com/photo/2022/03/26/11/43/flower-7092794_960_720.jpg"
                    alt="flower"
                    draggable="false"
                />
            </div>
            <div className="w-full bg-green-500 flex justify-center items-center flex-none">
                <img
                    src="https://cdn.pixabay.com/photo/2022/07/27/20/29/bumble-bee-7348702_960_720.jpg"
                    alt="bumble-bee"
                    draggable="false"
                />
            </div>
        </Lightbox>
    );
}

export default App;
