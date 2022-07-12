import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
    return ( 
        <div className="article-list">
            {articles.map(article => ( 
                <div  key={article.id}>
                    <Link to={`/lessons/${article.id}`}>
                        <div style={{backgroundColor: `${article.style}` }} className="articles-preview">
                            <div style={{backgroundColor: `${article.style}` }} className="article-image-container">
                                <img style={{backgroundColor: `${article.style}` }}className="article-icon" src={ article.icon }  alt="article"></img>
                            </div>
                            <div style={{backgroundColor: `${article.style}` }} className="article-title-container">
                                { article.title }
                            </div>
                        </div>
                        
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default ArticleList;