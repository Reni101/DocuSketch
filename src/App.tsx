import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode, faBarcode, faHeart, faBoxOpen, faVideo,faRightLeft} from '@fortawesome/free-solid-svg-icons'
import s from './App.module.css'
import {useState} from "react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

function App() {
    const icons = [faBarcode, faBoxOpen, faCode, faHeart, faVideo,faRightLeft];
    const [randomIcon, setRandomIcon] = useState<IconDefinition | null>(null);


    const setIconHandler = () => {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * icons.length);
            const randomIcon = icons[randomIndex];
            setRandomIcon(randomIcon);
        }, 3000);

    }

    return (
        <div className={s.container}>
            {randomIcon && <FontAwesomeIcon icon={randomIcon}/>}
            <button onClick={setIconHandler}>show random icon</button>
        </div>
    )
}

export default App
