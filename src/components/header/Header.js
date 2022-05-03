import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ swapTheme, theme }) => {
    //Theme
    const buttonLight = theme ? 'button-light' : 'button-light active';
    return (
        <header>
            <div className='Logo'><Link to="/">Ecommerce</Link></div>
            <div className="anymoreInHeader">
                <div className="optionInSite">
                    <Link to="cart.html">Cart</Link></div>
                <div className="optionInSite">
                    <Link to="signin.html">Sign In</Link>
                </div>
                <button className={buttonLight} onClick={() => swapTheme()}><span></span></button>
            </div>
        </header>
    )
}

export default Header;