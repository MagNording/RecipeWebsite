import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import style from './CommentForm.module.css';

function CommentForm() {

    const [message, setMessage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [anonymous, setAnonymous] = useState(false)
    const [comment, setComment] = useState('')

    const params = useParams();

    function handleSubmit(event) {
        event.preventDefault();

        const displayName = anonymous ? 'Anonymous' : firstName
        console.log(`name ${displayName}, comment ${comment}`)
        // här ska funktion finnas för att spara i databasen i swagger 

        const commentData = {
            name: displayName,
            comment: comment
        }

        fetch('https://recept3-bolen.reky.se/recipes/' + params.recipeId + '/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
        })
            .then(response => {
                if (response.ok) {
                    setMessage('Tack för din kommentar!');
                } else {
                    setMessage('Något gick fel. Försök igen.');
                }
            })
            .catch(err => {
                console.error('Error saving comment:', err);
                setMessage('Ett fel uppstod vid sparning av kommentaren.');

            })


        setMessage('Tack för din kommentar!')

        //restore the inputs after successful save
        setFirstName('');
        setComment('');
        setAnonymous(false);
    }



    useEffect(() => {
        // Clear the message after 3 seconds
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 3000);
            return () => clearTimeout(timer)
        }

    }, [message])

    return (
        <div className={style.main}>
            <div className={style.container}>
                <form onSubmit={handleSubmit}>
                    <h2>Kommentar</h2>
                    <div className={style['name-div']}>
                        <label htmlFor="name"></label>
                        <input type="text"
                            id="name"
                            placeholder='ange namn'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value.trim())}
                            disabled={anonymous}
                            required={!anonymous} /> <br />

                        <label htmlFor="anonymous" className={style['anonymous-label']}>förbli anonym?</label>
                        <input type="checkbox"
                            id="anonymous"
                            checked={anonymous}
                            onChange={(e) => setAnonymous(e.target.checked)} />
                    </div>

                    <div className={style['comment-div']}>
                        <label htmlFor="comment"></label>
                        <textarea id="comment"
                            placeholder='din kommentar'
                            cols={20} rows={5}
                            value={comment}
                            onChange={(e) => setComment(e.target.value.trim())} required />
                    </div>

                    <div className={style['button-container']}>
                        <button type="submit">Ange kommentar</button>
                        <button type='submit'>
                            <Link to=".." relative="path" className={style['no-underline']}>
                                Tillbaka
                            </Link>
                        </button>
                    </div>

                </form>
                <br />
                <div className={style.message}>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    )
}

export default CommentForm;
