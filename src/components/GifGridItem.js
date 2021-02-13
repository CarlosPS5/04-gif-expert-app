import React from 'react'

export const GifGridItem = (props) => {

    return  <div className="animate__animated animate__bounce animate__delay-2s">
                <p>{props.title}</p>
                <img src={props.url} />
            </div>

}