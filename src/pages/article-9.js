import useFetch from "../useFetch";

const Article9 = () => {

    const { data: lessons, error, isPending} = useFetch('http://localhost:8000/articles/9');

    return ( 
        <div>
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div>}
        {lessons && 
        <div className="lessons-container">
        <div style={{textAlign: "center"}} className="lessons-title">
            <h2>{lessons.title}</h2>
            <img style={{ margin: "auto", height: "100%", width: "100%", marginTop: 50}}src={ lessons.image } alt="Conversaciones"></img>
        </div>
        <div className="article-goals">
            <h2>Las Metas por la lección</h2>
            <div className="goals-list">
                <li>Aprenda saludados y despedidas comun en ingles</li>
                <li>Practica el pronunciacion</li>
                <li>Dase usted la confedencia para intentar a usarlos</li>
            </div>
        </div>
        <div className="vocab-grid">
            <h3>Espanol</h3>
            <h3>Ingles</h3>
            <h3>Como Suena</h3>
        </div>
        <div className="vocab-flex">
            <div className="vocab-spanish vocab">
            { lessons.vocab.map(vocab => ( 
                        <div className="vocab">
                            { vocab.spanish }
                        </div>
                    ))}
            </div>
            <div className="vocab-word vocab">
            { lessons.vocab.map(vocab => ( 
                        <div className="vocab">
                            { vocab.english }
                        </div>
                    ))}
            </div>
            <div className="vocab-sounds ">
            { lessons.vocab.map(vocab => ( 
                        <div className="vocab">
                            { vocab.sounds }
                        </div>
                    ))}
            </div>
        </div>
      
    </div>
        }
    </div>
     );
}
 
export default Article9;