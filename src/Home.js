import home from './img/home (2).jpg'

const Home = () => {
    return ( 
        <div className="home">
            <div className="welcome-text">
                <h2>Bienvenidos a Ingles!</h2>
                <p>Aqui, vas a aprender las temas basicas de Ingles</p>
                <img src={home} className="home-image" height="60%" width="60%"alt="Friends celebrating"></img>
            </div>
            <h4>Incluyido aqui es: </h4>
            <div className="learn-list">
                <li>Saludados y Despidas</li>
                <li>Colores</li>
                <li>Partes de Cuerpo</li>
            </div>
            <p>Y muchos mas!</p>
        </div>
     );
}
 
export default Home;