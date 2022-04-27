import React from 'react'
import { Card, Table } from 'react-bootstrap';

const PokeCard = ({ id, name, type, base }) => {
    let link = window.location.origin + `/images/${id}.png`;
    if (id <= 9) {
        link = window.location.origin + `/images/00${id}.png`;
    } else if (id > 9 && id <= 99) {
        link = window.location.origin + `/images/0${id}.png`;
    }

    return (
        <Card style={{ maxWidth: '11rem' }}>
            <Card.Img variant="top" src={link} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <Table responsiver size="sm">
                        <tbody>
                            <tr>
                                <td>HP</td>
                                <td>{base.HP}</td>
                            </tr>
                            <tr>
                                <td>Attack</td>
                                <td>{base.Attack}</td>
                            </tr>
                            <tr>
                                <td>Defense</td>
                                <td>{base.Defense}</td>
                            </tr>
                            <tr>
                                <td>Sp. Attack</td>
                                <td>{base.spAttack}</td>
                            </tr>
                            <tr>
                                <td>Sp. Defense</td>
                                <td>{base.spDefense}</td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>{base.Speed}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PokeCard