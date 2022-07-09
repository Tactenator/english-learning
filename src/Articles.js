import useFetch from "./useFetch";
import ArticleList from './ArticleList';

const Articles = () => {

    const { data: article, isPending, error } = useFetch('http://localhost:8000/articles')

    return ( 
        <div className="articles">
            <div>
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div>}
                { article && 
                    <div className="articles">
                        <ArticleList articles={article} />
                    </div>}
            </div>
        </div>
     );
}
 
export default Articles;