import React, { useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { searchCharacterActions } from '../store/search-character/actions';
import { HeroCard } from '../components/heroes/HeroCard';

export const SearchPage = ({ history }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const { result_search } = useSelector(state => state)

    useEffect(() => {
        return() => {
            dispatch(searchCharacterActions.resetSearchCaracter())
        }
    }, [])

    return (
        <div className="container">
            <h1 className="mt-5">Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4 className="mt-5"> Search Form </h4>
                    <hr />

                    <Formik
                        initialValues={{
                            searchText: q
                        }}

                        onSubmit={(inputsValues, { resetForm }) => {
                            console.log(inputsValues);
                            history.push(`?q=${inputsValues.searchText}`);
                            dispatch(searchCharacterActions.loadSearchCaracter(inputsValues["searchText"]))
                        }}
                    >
                        {({ errors, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <Field
                                    id="searchText"
                                    type="text"
                                    placeholder="Find your hero"
                                    className="form-control"
                                    name="searchText"
                                    autoComplete="off"
                                />

                                <div className="d-grid gap-0">
                                    <button
                                        type="submit"
                                        className="btn mt-3 btn-block btn-primary"
                                    >
                                        SEARCH...
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className="col-7">
                    <h4 className="mt-5"> Results </h4>
                    <hr />

                    {
                        (q === '') &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    {
                        (q !== '' && result_search.data.results && result_search.data.results.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There is no a hero with {q}
                        </div>
                    }

                    <div className="row">
                        {
                            result_search.data.results && result_search.data.results.map(hero => (
                                <div className="col-6 mb-5">
                                    <HeroCard
                                        key={hero.id}
                                        {...hero}
                                        addHero={true}
                                    >
                                    </HeroCard>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
