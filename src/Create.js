import { useState, useEffect } from "react";

//import { useNavigate} from 'react-router-dom';

const Create = () => {

    const [ english, setEnglish ] = useState('');
    const [ name, setName ] = useState('Saludos y Despidas');
    const [ options, setOptions ] = useState('');
    const [ correct, setCorrect ] = useState('');
    const [ id, setID ] = useState();

    // let mySpan = document.querySelector(".close")
    // let myModal = document.querySelector(".input-modal");
    // let quizSelect = document.querySelector(".quiz-select");
    let newOptions; 

    useEffect(() => {
        fetch('http://localhost:8000/' + name) 
        .then(res => {
            return res.json();
        })
        .then(data => {
            setID(data.length + 1);
        })
     });

    const handleSubmit = (e) => { 
        const newWords = { english, options, correct, id };

        fetch('http://localhost:8000/' + name, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newWords)
        })
    }

    const handleQuiz = (e) => 
    {
        setName(e.target.value);
        fetch('http://localhost:8000/' + name) 
        .then(res => {
            return res.json();
        })
        .then(data => {
            setID(data.length + 1);
        })
    }

    // const handleModal = () => {
    //     myModal.style.display = "block";
    // }

    // const handleNewQuiz = () => {
    //     let quizInput = document.querySelector(".new-quiz-input");
    //     let newQuiz = quizInput.value; 
    //     let tag = document.createElement("option");
    //     var text = document.createTextNode(newQuiz);
    //     tag.appendChild(text);
    //     let element = document.querySelector(".quiz-select");
    //     element.appendChild(tag);
        
    //     myModal.style.display = "none";
    // }
    
    return ( 
        <div className="create">
            <h2>Add New Word</h2>
            <form onSubmit={handleSubmit}>
                <label>Name of Quiz</label>
                    <select
                    required
                    className="quiz-select"
                    value={name}
                    onChange={handleQuiz}>
                        <option>Saludos y Despidas</option>
                        <option>En la Cocina</option>
                        <option>Dinero</option>
                        <option>Familia</option>
                        <option>Verbos Basicos</option>
                        <option>Días de la semana</option>
                        <option>Los Meses</option>
                        <option>Colores</option>
                        <option>Partes de Cuerpo</option>
                        <option>Pronombres</option>
                        <option>Frases Común</option>
                    </select>
                <label>English Word</label>
                    <input type="text"
                    required
                    value={english}
                    onChange={(e) => setEnglish(e.target.value)}
                    />
                <label>Options</label>
                <input type="text"
                required
                value={options}
                onChange={(e) => {
                    newOptions = e.target.value.split(',');
                    setOptions(newOptions);
                }}
                />
                 <label>Correct Word</label>
                <input type="text"
                required
                value={correct}
                onChange={(e) => {
                    setCorrect(e.target.value);
                }}
                />
                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default Create;