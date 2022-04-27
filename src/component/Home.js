import PokeCard from './PokeCard'
import React, { useState, useEffect, useMemo } from 'react'
import pokedex from '../pokemon/pokedex.json'
import { Row } from 'react-bootstrap'
import Menu from './Menu'
import Fuse from 'fuse.js'
import ReactPaginate from 'react-paginate'

const Home = () => {
    const [lingua, setLingua] = useState("english")
    const [query, setQuery] = useState({ search: "", HP: "", Attack: "", Defense: "", spAttack: "", spDefense: "", Speed: "" });
    const [pageNumber, setPageNumber] = useState(0)
    const Stat = ["HP", "Attack", "Defense", "spAttack", "spDefense", "Speed"]

    //cambio lingua
    const menuToCard = (menuData) => setLingua(menuData);

    //ricerca
    const hendolChange = (event) => {
        setQuery({ ...query, [event.target.name]: event.target.value })
    }

    const fuse = new Fuse(pokedex, { keys: ['name.' + lingua] });
    const ricerca = fuse.search(query.search);
    const chartRicerca = query.search ? ricerca.map(el => el.item) : pokedex;
    const ricercaPerStat = chartRicerca.filter((elle) => Stat.every((key) => elle.base[key].toString().includes(query[key])));
    //impaginazione

    const usersPerPage = 30;
    const pageVisited = pageNumber * usersPerPage;

    const displayUsers = ricercaPerStat.slice(pageVisited, pageVisited + usersPerPage);
    const pageCount = Math.ceil(ricercaPerStat.length / usersPerPage);
    const handlepageclink = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <>
            <Menu menuToCard={menuToCard} result={hendolChange} />
            <div className='container'>
                <Row xs={1} md={4} className="g-3">
                    {
                        displayUsers.map((el) => {
                            const { name, ...rest } = el
                            return <PokeCard key={el.id} {...rest} name={name[lingua]} />
                        })
                    }
                    <ReactPaginate
                        pageCount={pageCount}
                        onPageChange={handlepageclink}
                        containerClassName={'pagination'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                    />
                </Row>
            </div>
        </>
    )
}

export default Home