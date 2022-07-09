import useFetch from "./useFetch";
import QuizList from './QuizList'

const Articles = () => {

    const { data: quiz, isPending, error } = useFetch('http://localhost:8000/QuizList')

    return ( 
        <div className="quizzes">
            <img style={{ marginLeft: 125 }}src="https://iesmartinezm.es/wp-content/uploads/2021/06/examen.jpg" alt="quizzes!"></img>
            <div>
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div>}
                { quiz && <QuizList quiz={quiz} />}
            </div>
        </div>
     );
}
 
export default Articles;