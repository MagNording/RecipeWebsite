import React from 'react';
import style from './ViewRecipe.module.css';

export default function ({ comments }) {


    if (comments.length === 0) {
        return <p>Inga kommentarer än, bli den första!!</p>
    }

    return (

        <ul className={`${style['scroll-list']} ${style.comments}`}>
            {comments.map((comment, index) => (
                <li key={index}>
                    <strong>{comment.name}</strong>: {comment.comment}
                </li>
            ))}
        </ul>

    )
}
