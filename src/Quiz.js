import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Quiz = () => {

    useEffect(() => {
        let ignore = false;  
        
        if (!ignore)  handleQuestion()  
        return () => { ignore = true; }
        },[]);

    const [ question, setQuestion ] = useState('');
    const [ options, setOptions ] = useState([]);
    const [ isCorrect, setCorrect] = useState('');
    const [ selected, setSelected ] = useState('');
    const [ count, setCount ] = useState(0);
    const [ length, setLength ] = useState(0); 
    const [ displayed, setDisplayed ] = useState(false);
    const [ right, setRight ] = useState(0);

    const { id } = useParams();
    const spanRef = useRef(); 

    const fetchData = async () => {
        const response = await fetch('http://localhost:8000/' + id);
        const data = await response.json(); 
        setLength(data.length);
        return data; 
    }

    const handleOptions = () => { 
        fetchData()
       .then(data => {
           setOptions(data[count].options);
       });
    }

    const handleQuestion = () => { 
        setCount(count + 1);
        handleOptions();
        fetchData()
       .then(data => {
           setQuestion(data[count].english);
           setCorrect(data[count].correct);
       });
    }

    const resetRadio = () => {
        let allRadio = document.querySelectorAll(".radio-options");
        allRadio.forEach((radio) => {
            radio.checked = false; 
        })
    }
      
    const handleClick = () => 
    {
       if(selected === isCorrect)
       {
           setRight(right + 1)
           alert('Correct!')
       }
       else 
       {
           alert(`Incorrect! the correct answer is ${isCorrect}` )
       } 
       if(count === length)
       {
        setDisplayed(true);
       }
       else{
        handleQuestion(); 
        resetRadio();
       }
       
    }

    const handleChange = (e) => {
        setSelected(e.target.value);
    }

    return ( 
        <div className="quiz">
            <div className="quiz-test-word">
                <div>
                    Que significa es... <br></br><br></br>
                    { question }
                </div>
                <div className="radio-options-div">
                    <div className="radio-options-flex">
                        <input className="radio-options" onChange={handleChange} 
                        name="options-group" type="radio" value={ options[0] } /> <span>{ options[0] }</span>
                    </div>
                    <div className="radio-options-flex">
                        <input className="radio-options"  onChange={handleChange}
                        name="options-group" type="radio" value={ options[1] } /> { options[1] }
                    </div>
                    <div className="radio-options-flex">
                        <input className="radio-options" onChange={handleChange}
                        name="options-group" type="radio" value={ options[2] } /> { options[2] }
                    </div>
                    <div className="radio-options-flex">
                        <input className="radio-options" onChange={handleChange} 
                        name="options-group" type="radio" value={ options[3] } /> { options[3] }
                    </div>
                </div>
                <button onClick={ handleClick }>Submit</button>
                
                <span ref={spanRef} style={{display: displayed ? 'block' : 'none'}}>Muy bien!</span>
                <span ref={spanRef} style={{display: displayed ? 'block' : 'none'}}>Has anotado {right}/{length}</span>
            </div>
        </div>
     );
}
 
export default Quiz;