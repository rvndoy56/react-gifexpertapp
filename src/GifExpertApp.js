import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);
    //setCategories es lo que se usara para cambiar las propiedades

    // const handleAdd = () => {
    //         //operador spec
    //     setCategories(cats => [...categories,'HunterxHunter']); 
    // }
    //Comuniocacion entre componentes
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />
            
            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = {category}
                            category = {category} ></GifGrid>
                    ))
                }
            </ol>


        </>
    )
}
