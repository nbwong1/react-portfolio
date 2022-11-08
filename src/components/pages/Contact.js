import React from 'react';

export default function Contact() {
    return (
        <div>
            <h3>Contact me!</h3>
            <form>
                <div>
                    <label>Name: </label>
                </div>
                <div>
                    <input type="text" id="contactName" placeholder='Name' required="required" ></input>
                </div>
                
                <br></br>
                
                <div>
                    <label>Email: </label>
                </div>
                <div>
                    <input type="text" id="emailAddress" placeholder='Email Address' required="required"></input>
                </div>
                <br></br>
                <div>
                    <label>Message: </label>
                </div>
                <div>
                    <input type="text" id="message" placeholder='Message' required="required"></input>
                </div>    
            </form>
        </div>
    );
}