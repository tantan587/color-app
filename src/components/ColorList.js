import React from 'react'
import Color from './Color.js'

const ColorList = ({colors=[], onRemove=f=>f,onRate=f=>f}) => 
<div className="color-list">
    {
        (colors.length===0) ?
        <p>No Colors Listed</p> :
        colors.map(color => 
            <Color key={color.id}{...color} 
            onRate={(rating) => onRate(color.id,rating)}
            onRemove={()=> onRemove(color.id)} />
        )
    }
</div>



export default ColorList;