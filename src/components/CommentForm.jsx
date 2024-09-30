import React from 'react'
import '../styles/CommentForm.css'

function CommentForm() {

    return (
        <div className='main'>
            <div className='container'>
                <form>
                    <h2>Kommentar</h2>
                    <div className='name-div'>
                        <label htmlFor="name"></label>
                        <input type="text" id="name" placeholder='ange namn' required /> <br />

                        <label htmlFor="anonymous" className='anonymous-label'>förbli anonym?</label>
                        <input type="checkbox"id="anonymous" /> 
                    </div>

                    <div className='comment-div'>
                        <label htmlFor="comment"></label>
                        <textarea id="comment" placeholder='ange din kommentar' cols={20} rows={5} />
                    </div>

                    <div className='button-container'>
                        <button type="submit">Ange kommentar</button>
                        <button type='submit'>Tillbaka</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CommentForm;
