import PokeCard from './PokeCard'
import React, { useState, useEffect, useMemo } from 'react'
import pokedex from '../pokemon/pokedex.json'
import { Row } from 'react-bootstrap'
import Menu from './Menu'
import Fuse from 'fuse.js'


const Home = () => {


    const [lingua, setLingua] = useState("english")
    const [query, setQuery] = useState({ search: "", HP: "", Attack: "", Defense: "", spAttack: "", spDefense: "", Speed: "" });
    const type = ["HP", "Attack", "Defense", "spAttack", "spDefense", "Speed"]
    //cambio lingua
    const menuToCard = (menuData) => setLingua(menuData);
    //ricerca
    const hendolChange = (event) => {
        const name = event.target.name;
        const deta = { ...query, [name]: event.target.value };
        setQuery(deta)
    }

    const fuse = new Fuse(pokedex, { keys: ['name.' + lingua] });
    const ricerca = fuse.search(query.search);
    const chartRicerca = query.search ? ricerca.map(el => el.item) : pokedex;
    useEffect(() => {
        console.log(pokedex.filter((elle) => type.some((key) => elle.base[key].toString().includes(query[key]))))

    }, [query])

    return (
        <>
            <Menu menuToCard={menuToCard} result={hendolChange} />
            <div className='container'>
                <Row xs={1} md={4} className="g-3">
                    {
                        chartRicerca.filter((elle) => type.every((key) => elle.base[key].toString().includes(query[key]))).map((el) => {
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

//.filter((elle) => type.some((key) => elle.base[key].toString().includes(query[key].toString())))