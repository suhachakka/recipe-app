import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredient}) => {

    return(
      <div className={style.recipe}>
          <h1>{title}</h1>
          <ol>
              {ingredient.map(ingredient =>(
                <li> {ingredient.text}</li>
              ))}
          </ol>
          <p><b>{calories}</b></p>
          <img className={style.image} src={image} alt="" />
      </div>

    );
}

export default Recipe;