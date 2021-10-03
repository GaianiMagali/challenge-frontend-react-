import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListCharactersTeam } from '../components/heroes/ListCharactersTeam';
import { characterActions } from '../store/character/actions';
import { getItem } from '../utils/localStorage';
import { averageHeight, averageWeight, sumPowerstats } from '../utils/operations';


export const HomePage = () => {
    const dispatch = useDispatch();
    const { infoCharacter } = useSelector(state => state);
    const [heroes, setHeroes] = useState([]);


    useEffect(() => {
        dispatch(characterActions.loadCharacter(30))
        dispatch(characterActions.loadCharacter(38))
        dispatch(characterActions.loadCharacter(69))
        dispatch(characterActions.loadCharacter(149))
    }, []);


    useEffect(() => {
        setHeroes(getItem("heroesList"));
    }, [infoCharacter]);




    return (
        <div className="container">
            <h1 className="mt-5 mb-5 d-flex justify-content-center align-items-center">Team</h1>
            <div className="mb-5">
                <span className="fw-bold">Total sum of the team's powerstats:</span>
                <div className="container mt-1">
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2">
                                    Intelligence:
                                </div>
                                <div className="col-2">
                                    {heroes && sumPowerstats(heroes, "intelligence")}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-2">
                                    Strength:
                                </div>
                                <div className="col-2">
                                    {heroes && sumPowerstats(heroes, "strength")}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-2">
                                    Speed:
                                </div>
                                <div className="col-2">
                                    {heroes && sumPowerstats(heroes, "speed")}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-2">
                                    Durability:
                                </div>
                                <div className="col-2">
                                    {heroes && sumPowerstats(heroes, "durability")}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-2">
                                    Power:
                                </div>
                                <div className="col-2">
                                    {heroes && sumPowerstats(heroes, "power")}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-2">
                                    Combat:
                                </div>
                                <div className="col-2">
                                    {heroes && sumPowerstats(heroes, "combat")}
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="row">
                                <div className="col-3">
                                    Weight average:
                                </div>
                                <div className="col-1">
                                    {heroes && averageWeight(heroes)}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    Height average:
                                </div>
                                <div className="col-1">
                                {heroes && averageHeight(heroes)}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ListCharactersTeam />
        </div>
    )
}

