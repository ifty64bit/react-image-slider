import {  } from "react";
import Lightbox from "./components/Lightbox";
import Image from "./components/Image";

function App() {
    return (
        <Lightbox>
            <Image src={"https://cdn.pixabay.com/photo/2022/07/15/20/13/strawberries-7323943_960_720.jpg"} alt={"strawberrie"} />
            <Image src={"https://cdn.pixabay.com/photo/2022/03/26/11/43/flower-7092794_960_720.jpg"} alt={"flower"} />
            <Image src={"https://cdn.pixabay.com/photo/2022/07/27/20/29/bumble-bee-7348702_960_720.jpg"} alt={"bumble-bee"}/>
        </Lightbox>
    );
}

export default App;
