import React from 'react';
import { useHistory, useParams } from 'react-router';
import { getItem } from '../utils/localStorage';


export const HeroeDetailPage = () => {
    const history = useHistory()
    const { id } = useParams();
    


    const heroesListLocalStorage = getItem("heroesList");
    const hero = heroesListLocalStorage.find(hero => hero.id === id);


    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }


    return (
        <div className="row mt-5">
            <div className="col-5 d-flex justify-content-center  align-items-center">
                <img
                    src={hero.image && hero.image.url}
                    alt={hero.name}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-4 animate__animated animate__fadeIn mt-5">
                <h5>Hero Details</h5>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Name: </b> {hero.name && hero.name}</li>
                    <li className="list-group-item"> <b>Weight: </b> {hero.appearance.weight[1] && hero.appearance.weight[1]}</li>
                    <li className="list-group-item"> <b>Height:</b> {hero.appearance.height[1] && hero.appearance.height[1]}</li>
                    <li className="list-group-item"> <b>Alias: </b>
                        {
                            hero.biography.aliases.map(a => { return <span>{a},  </span> })

                        }
                    </li>
                    <li className="list-group-item"> <b>Eye color: </b> {hero.appearance["eye-color"]}</li>
                    <li className="list-group-item"> <b>Color de cabello:</b> {hero.appearance["hair-color"]}</li>
                    <li className="list-group-item"> <b>Lugar de trabajo:</b> {hero.work.base && hero.work.base}</li>
                </ul>


                <button
                    type="button"
                    className="btn btn-outline-primary mt-5"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
