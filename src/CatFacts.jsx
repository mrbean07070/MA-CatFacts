import axios from 'axios';
import CatLogo from './assets/cat.svg'
import './CatFacts.css';
import {useState, useEffect} from "react";

// insert your name here
// Zhuangzhuang Cui

function CatFacts() {

    const [catFact, setCatFact] = useState(''); //控制显示catFact
    const [loading, setLoading] = useState(false); //用于控制load状态

    //页面启动时，加载一条
    useEffect(() => {
        generateCatFact();
    }, []);

    function generateCatFact() {
        setLoading(true);
        axios.get('https://catfact.ninja/fact')
            .then(response => {
                setCatFact(response.data.fact);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div className="App">
            <div className="catFactsText">
                {loading ? "Loading..." : catFact}
            </div>
            <div>
                <button onClick={generateCatFact} className="catFactBtn">
                    Click me for a cat fact!
                </button>
            </div>
            <div>
                <img src={CatLogo} className="catFactImg"/>
            </div>
        </div>
    );
}
export default CatFacts
