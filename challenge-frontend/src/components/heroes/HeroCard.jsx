import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { characterActions } from '../../store/character/actions';


export const HeroCard = ({
    id,
    name,
    powerstats,
    biography,
    appearance,
    work,
    connections,
    image,
    addHero
}) => {

    const dispatch = useDispatch();

    const handleDeleteHero = () => {
        dispatch(characterActions.deleteCharacter(Number(id)))
    }

    const handleAddHero = () => {
        dispatch(characterActions.addCharacter({id, name, powerstats, biography, appearance, work, connections,image,}))
        console.log("add");
    }

    return (
        <>
            <div className="card">
                <img src={image && image.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name && name}</h5>
                    <span className="card-text">
                        <span className="fw-bold">Powerstats:</span>
                        <div className="container mt-1">
                            <div className="row">
                                <div className="col">
                                    Intelligence:
                                </div>
                                <div className="col">
                                    {powerstats && powerstats.intelligence}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    Strength:
                                </div>
                                <div className="col">
                                    {powerstats && powerstats.strength}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    Speed:
                                </div>
                                <div className="col">
                                    {powerstats && powerstats.speed}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    Durability:
                                </div>
                                <div className="col">
                                    {powerstats && powerstats.durability}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    Power:
                                </div>
                                <div className="col">
                                    {powerstats && powerstats.power}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    Combat:
                                </div>
                                <div className="col">
                                    {powerstats && powerstats.combat}
                                </div>
                            </div>
                        </div>
                    </span>


                    <div className="row mt-5">
                        <div className="col-6">
                            <Link to={`./hero/${id}`} >
                                Más...
                            </Link>
                            <div></div>
                        </div>

                        <div className="col-6 d-flex justify-content-end">
                            {addHero ? <button
                                className="btn btn-success btn-sm"
                                onClick={handleAddHero}
                            >
                                Add
                            </button>

                                :
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={handleDeleteHero}
                                >
                                    Delete
                                </button>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
