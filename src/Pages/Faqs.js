import React from "react"
import { Link } from "react-router-dom"
import "./Faqs.css"


export const Faqs = () => {
    return (
        <div className="page-container">
            <h1>Frequently Asked QUestions</h1>
            <div className="faq-item">
                <h3>How long does shipping take?</h3>
                <p>Orders are processed within 2–3 business days and shipping usually takes 5–7 business days.</p>
            </div>
            <div className="faq-item">
        <h3>Are your items original?</h3>
        <p>Yes, they are.</p>
        <p>Be rest assured that whenever you shop with us – you are getting the best quality at the best price at Jersey Dynasty. </p>
        </div>
        <div className="faq-item">
                <h3>Difference between Player Grade & Fan Grade jerseys</h3>
                <p>Player Grade jerseys (also known as authentic & stadium grade jerseys) is identical to the exact jersey’s players wear on the pitch. It is made with technologically enhanced fabric that helps move/dry out sweat from the body while players run around the pitch. It is also breathable and clingy to the body. </p>  
                <p>Fan Grade jerseys (also known as regular & spectator grade jerseys) are made with fabric that is also breathable but not technologically enhanced like the player grade jerseys. It is durable, easy to maintain and just like the name implies – it’s for the fans!</p>
            </div>
            <div className="faq-item">
                <h3>Do you sell jerseys for women and kids too?</h3>
                <p>Yes, we do.</p>
                <p>Female & kids jerseys are usually sold out very quickly but we restock quickly as well.</p>
            </div>
            <div className="faq-item">
                <h3>How do I know my size?</h3>
                <p>Please check our size guide <Link to="/size-guide">here</Link> for more details.</p>
                <p>We typically advise that you use the same size as your regular shirt, blouse or the age range you get when sopping for your kid's clothes (e.g Age 2-4 years old jerseys).</p>
                <p>Ladies are advised to get a regular Large jersey if they wear XL.</p>
            </div>
            <div className="faq-item">
                <h3>How do you customize jerseys?</h3>
                <p>We customize jerseys using suede prints only. The customization is durable and long lasting.</p>
                <p>You can customize your jerseys in unique ways (using symbols, drawings etc) but we advise that you send a graphic or drawing depicting exactly how you intend the customization to be done if you want something unorthodox.</p>
                <p>Please contact us via our WhatsApp channel as soon as possible concerning unique customization requests.</p>
            </div>
        </div>
    )
}