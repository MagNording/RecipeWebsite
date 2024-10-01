import React, { useState, useEffect } from 'react';
import './CommentForm.css';

function CommentForm() {

    const [message, setMessage] = useState('')

    const [firstName, setFirstName] = useState('')
    const [anonymous, setAnonymous] = useState(false)
    const [comment, setComment] = useState('')


    function handleSubmit(event) {
        event.preventDefault();

        const displayName = anonymous ? 'Anonymous' : firstName
        console.log(`name ${displayName}, comment ${comment}`)
        // här ska funktion finnas för att spara i databasen i swagger 

        setMessage('tack för din kommentar!')


    

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
        <div className='main'>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <h2>Kommentar</h2>
                    <div className='name-div'>
                        <label htmlFor="name"></label>
                        <input type="text"
                            id="name"
                            placeholder='ange namn'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            disabled={anonymous}
                            required={!anonymous} /> <br />

                        <label htmlFor="anonymous" className='anonymous-label'>förbli anonym?</label>
                        <input type="checkbox"
                            id="anonymous"
                            checked={anonymous}
                            onChange={(e) => setAnonymous(e.target.checked)} />
                    </div>

                    <div className='comment-div'>
                        <label htmlFor="comment"></label>
                        <textarea id="comment" placeholder='ange din kommentar' cols={20} rows={5} value={comment} onChange={(e) => setComment(e.target.value)} />
                    </div>

                    <div className='button-container'>
                        <button type="submit">Ange kommentar</button>
                        <button type='submit'>Tillbaka</button>
                    </div>

                </form>
                <br />
                <div>
                    {message && <p>{message}</p>}
                </div>

            </div>
        </div>
    )
}

export default CommentForm;
