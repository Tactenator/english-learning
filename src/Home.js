import home from './home.jpg'

const Home = () => {
    return ( 
        <div className="home">
            <div className="home-svg-div">
                <div className="home-title-text">
                    Bienvenidos a Chillona!
                </div>
                <div className="sun">
                </div>
                <div className="house">
                    <div className="roof"></div>
                    <div className="door"></div>
                    <div className="window"></div>
                    <div className="window"></div>
                </div>
                <div className="title-grass"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,0L80,37.3C160,75,320,149,480,165.3C640,181,800,139,960,154.7C1120,171,1280,245,1360,282.7L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
                </path>
            </svg>
            </div>
            <div className="home-site-info-container">
                <img className="home-image" src={home} alt="Two girls chatting"></img>
                <div className="about-text">
                    Que es Chillona?
                    <div className="about-info">
                        Chillona es una proyecta para aprender Ingles. Aqui, puede aprender las cosas basicas de Ingles. 
                    </div>
                </div>
                
            </div>
            
        </div>
     );
}
 
export default Home;