import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
    return ( 
        <div className="article-list">
            {articles.map(article => ( 
                <div  key={article.id}>
                    <Link to={`/lessons/${article.id}`}>
                        <div className="articles-preview">
                            <div className="article-image-container">
                                <img src={ article.image } style={{ height: 100, width: 150}} alt="article"></img>
                            </div>
                            <div className="article-title-container">
                                <h2>{ article.title }</h2>
                            </div>
                        </div>
                        
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default ArticleList;