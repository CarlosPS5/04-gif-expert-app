import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {

    const [categorias, setCategoria] = useState([])

    return  <>
                <h2>GifExpertApp</h2>
                <AddCategory setCategoria={setCategoria} categorias={categorias}/>
                <hr />
                <ol>
                    {categorias.map((categoria,i) => <li key={i}><GifGrid categorias = {categoria} /></li>)}      
                </ol>
            </>
}