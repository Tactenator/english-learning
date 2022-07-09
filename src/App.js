import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Quiz from './Quiz';
import Create from './Create';
import Navbar from './Navbar';
import Articles from './Articles';
import Error from './Error';
import QuizDisplay from './QuizDisplay'
import Article1 from './pages/article-1';
import Article2 from './pages/article-2';
import Article3 from './pages/article-3';
import Article4 from './pages/article-4';
import Article5 from './pages/article-5';
import Article6 from './pages/article-6';
import Article7 from './pages/article-7';
import Article8 from './pages/article-8';
import Article9 from './pages/article-9';
import Article10 from './pages/article-10';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/quizzes" element={<QuizDisplay />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/create" element={<Create />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/lessons/1" element={<Article1 />} />
          <Route path="/lessons/2" exact element={<Article2 />} />
          <Route path="/lessons/3" element={<Article3 />} />
          <Route path="/lessons/4" exact element={<Article4 />} />
          <Route path="/lessons/5" exact element={<Article5 />} />
          <Route path="/lessons/6" element={<Article6 />} />
          <Route path="/lessons/7" exact element={<Article7 />} />
          <Route path="/lessons/8" element={<Article8 />} />
          <Route path="/lessons/9" exact element={<Article9 />} />
          <Route path="/lessons/10" exact element={<Article10 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
