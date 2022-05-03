import './Card.scss';
import Rating from '../../../other/Rating'

const Card = (props) => {

    const { name, img, price, stars } = props

    return (
        <div className='card shadow'>
            <img src={img} alt={name} />
            <div className='card-info'>
                <span>{name}</span>
                <span>{price}$</span>
            </div>
            <Rating stars={stars} />
        </div>
    )

}

export default Card