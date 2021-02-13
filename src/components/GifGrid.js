import React from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = (props) => {

    const { data:images, loading} = useFetchGifs(props.categorias)

    return  <>
                <h3>{props.categorias}</h3>

                {loading && <p>Cargando...</p>}
                <ol className="card">
                    {images.map(image => <li key={image.id}><GifGridItem title={image.title} url={image.url} /></li>)}
                </ol>
            </>
}