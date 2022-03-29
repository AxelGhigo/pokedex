import PokeCard from './PokeCard'
import React, { useState } from 'react'
import pokedex from '../pokemon/pokedex.json'
import { CardGroup, Row } from 'react-bootstrap'
import Menu from './Menu'
import Fuse from 'fuse.js'


const Home = () => {
    const [lingua, setLingua] = useState("english")
    const [query, setQuery] = useState("");
    //cambio lingua
    const menuToCard = (menuData) => setLingua(menuData);
    //ricerca
    const result = (result) => setQuery(result);

    const fuse = new Fuse(pokedex, {
        includeScore: true,
        keys: ["name.english"],
    });
    const ricerca = fuse.search(query);
    const chartRicerca = query ? ricerca.map(el => el.item) : pokedex;

    return (
        <>
            <Menu menuToCard={menuToCard} result={result} />
            <div className='container'>
                <Row xs={1} md={4} className="g-2">
                    {
                        chartRicerca.map((el) => {
                            const { name, ...rest } = el
                            return <PokeCard key={el.id} {...rest} name={name[lingua]} />
                        })
                    }
                </Row>
            </div>
        </>
    )
}

export default Home