import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    //Valor por defecto, Valor a setear - sirve para añadir un elemento a la lista
    const [inputValue, setInputValue] = useState('');  //Si se deja useState() toma el valor como undefined

    const handleInputChange = (e) =>{
        //Setea nuevo valor del input
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( cats => [inputValue,...cats ] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>

            {/* <h1>{ inputValue }</h1> */}
            <input type="text" value = {inputValue} onChange={ handleInputChange }/>
        </form>
    )
}


AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}