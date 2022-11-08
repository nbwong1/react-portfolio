import React from 'react';

const styles = {
    contactHeader: {
        color: 'white',
        weight: 'bold',
    },
    contactText: {
        color: 'white',
    }
}

export default function Contact() {
    return (
        <div>
            <h3 style={styles.contactHeader}>Contact me!</h3>
            <form>
                <div>
                    <label style={styles.contactText}>Name: </label>
                </div>
                <div>
                    <input type="text" id="contactName" placeholder='Name' required="required" ></input>
                </div>
                
                <br></br>
                
                <div>
                    <label style={styles.contactText}>Email: </label>
                </div>
                <div>
                    <input type="text" id="emailAddress" placeholder='Email Address' required="required"></input>
                </div>
                <br></br>
                <div>
                    <label style={styles.contactText} >Message: </label>
                </div>
                <div>
                    <input type="text" id="message" placeholder='Message' required="required"></input>
                </div>    
            </form>
        </div>
    );
}