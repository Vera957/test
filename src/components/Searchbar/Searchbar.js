//has prop - onSubmit(func)
import React from "react";
import "styles/style.css";
import { FcBinoculars } from "react-icons/fc";
import { Form, Formik, Field } from 'formik';

import propTypes from 'prop-types';

export const Searchbar = (props) => {

    //const [inputValue, setinputValue] = useState('')

    const search = (e) => {
        e.preventDefalult();
    }

    const val = (values, actions) => {
        props.onSubmit(values.search)
    }

    return (<header className="Searchbar">
        <Formik initialValues={{search: ''}} onSubmit={val}>
            <Form className="SearchForm" >
                <button type="submit" className="SearchForm-button" onSubmit={search}>
                    <FcBinoculars className='FcBinoculars'/>
                </button>
                <Field
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name='search'
                />
            </Form>
        </Formik>
    </header>
    )
}

Searchbar.propTypes = {
    onSubmit: propTypes.func,
}