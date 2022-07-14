import useFetch from "./useFetch";
import QuizList from './QuizList'
import Exams from './exams.png';

const Articles = () => {

    const { data: quiz, isPending, error } = useFetch('http://localhost:8000/QuizList')

    return ( 
        <div className="quizzes">
            <div className="quiz-header-image-container">
                <img className="quiz-header-image" src={Exams} alt="quizzes!"></img>
                <h1>Examenes</h1>
            </div>
            
            <div>
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div>}
                { quiz && <QuizList quiz={quiz} />}
            </div>
        </div>
     );
}
 
export default Articles;