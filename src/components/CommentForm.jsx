import React from 'react'
import { useState } from 'react';
import '../styles/CommentForm.css'



function CommentForm() {

    return (
        <div className='main'>
            <div className='container'>
                <form>
                    <div className='name-div'>
                        <label htmlFor="name"></label>
                        <input type="text"id="name" placeholder='enter name' required/>
                    </div>

                    <div className='comment-div'>
                        <label htmlFor="comment"></label>
                        <textarea id="comment" placeholder='enter comment'/>
                    </div>
                    <button type="submit">Submit Comment</button>
                </form>
            </div>
        </div>
    )
}

export default CommentForm;
