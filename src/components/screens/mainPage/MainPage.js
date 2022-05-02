import { Link } from 'react-router-dom';
import Light from '../../../resourses/img/homeScreenImg/light.png';
import Lamp from '../../../resourses/img/homeScreenImg/lamp.png';
import './MainPage.scss';

const MainPage = ({ theme }) => {
    //Theme
    const styleLight = theme ? { opacity: '0%' } : { opacity: '100%' }

    return (
        <section className="main-lamp">
            <div className="lamp-container">
                <img src={Lamp} alt="lamp" className="lamp" />
                <img src={Light} alt="light" className="light" style={styleLight} />
            </div>

            <div className="main-text_container">
                <h1>Lamps</h1>
                <p>Desc</p>
                <Link to='/catalog'>Catalog</Link>
            </div>
        </section>
    )
}

export default MainPage;