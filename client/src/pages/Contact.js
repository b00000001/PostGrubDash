import React from 'react';


const Contact = () => {

    return (
        <>
            <h2 className="text-center text-2xl font-serif"> Questions, comments, concerns? Contact us here!</h2>
            <form className="text-center border-2">
                <label>Name:</label><br />
                <input className="border-2" type="text" /><br />
                <label>Email:</label><br />
                <input className="border-2" type="text" /><br />
                <label>Comment:</label><br />
                <textarea className="border-2" rows="3" /><br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Contact;