import React from 'react'
import Telefono from '../img/Iphone.jpg'

const Card = (props) => {
    const { nomTel, prezzo } = props
    return (
        <div className='col'>
            <div className="card m-1 rounded-3" style={{ width: '12rem', textAlign: 'center' }}>
                <img src={Telefono} className="card-img-top" alt='ciao' />
                <div className="card-body">
                    <h5 className="card-title">{nomTel}</h5>
                    <p className="card-text">{prezzo} €</p> <button className="btn btn-primary">Aggiungi al carrello</button>
                </div>
            </div>
        </div>
    );
}

export default Card