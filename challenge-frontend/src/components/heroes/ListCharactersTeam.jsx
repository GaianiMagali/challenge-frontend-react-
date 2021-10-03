import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getItem, setItem } from '../../utils/localStorage';
import { removeDuplicates } from '../../utils/removeDuplicates';
import { HeroCard } from './HeroCard';

export const ListCharactersTeam = () => {
    const { infoCharacter } = useSelector(state => state);
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        const heroesList = infoCharacter.team.length === 4 ? infoCharacter.team : removeDuplicates(infoCharacter.team);
        setItem("heroesList", heroesList)
        setHeroes(getItem("heroesList"))
    }, [infoCharacter]);

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="row">
                {
                    heroes.map(hero =>
                        <div className="col-3 mb-5" key={hero.id}>
                            <HeroCard
                                {...hero}
                                addHero={false}
                            >
                            </HeroCard>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
