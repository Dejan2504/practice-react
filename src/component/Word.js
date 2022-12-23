import { useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";

import { wordAction } from "../store/wordSlice";

const Word = function() {
    const [input, setInput] = useState('');
    const word = useSelector(state => state.word.word);
    const dispatch = useDispatch();

    const addWord = function()
    {
        dispatch(wordAction.setWord(input))
        
        setInput('');
    }

    return(
        <div>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={addWord}>Fetch</button>

        <ul>
        {word.map((word) => 
            <li key={Math.random()}>{word}</li>
    )}
        </ul>

        
        </div>
    )
}

export default Word;