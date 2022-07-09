import { Link } from 'react-router-dom';

const QuizList = ({ quiz }) => {

    console.log(quiz);
    
    return ( 
        <div className="quiz-container">
            {quiz.map(quizzes => ( 
                <div className="quiz-preview" key={quiz.id}>
                    <Link to={`/quiz/${quizzes.title}`}>
                        <div className="quiz-list">
                            <img src={ quizzes.image } style={{ height: 100, width: 150, marginRight: 25}}alt="quiz"></img>
                            <div>
                                <h2>{ quizzes.title }</h2>
                            </div>
                        </div> 
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default QuizList;