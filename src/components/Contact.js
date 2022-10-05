import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact(){
    const initialTargets = {
        email: "",
        name: "",
        title: "",
        message: "",
    };

    const [data, setData] = useState({...initialTargets});
    const [success, setSuccess] = useState(false);

    const handleChange = ({target}) => {
        setData({
            ...data,
            [target.name]:target.vlaue,
        });
    }

    const SendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_pz6ou8j', 'template_rg2uug3', e.target, 'rUsmjHcmBH5XqZ_--')
        .then((result) => {
            // console.log(result.text);
            setSuccess(true);
            setData({...initialTargets});
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div className="contactFrame">
            <form className="contactForm" onSubmit={SendEmail}>
                <div className="msg">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" value={data.email} placeholder="youremail@email.com" onChange={handleChange} required/>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" name="name" value={data.name} onChange={handleChange} placeholder="my name is..." required/>
                    <label htmlFor="title">Title:</label>
                    <input id="title" type="text" name="title" value={data.title} onChange={handleChange} placeholder="hello:)" required></input>
                    <label htmlFor="content">Message:</label>
                    <textarea id="content" name="message" placeholder="내용(500자 제한)" rows="7" minLength="10" maxLength="500" value={data.message} onChange={handleChange} required></textarea>
                </div>
                    <input id="submit" type="submit" value="🚀"/>
            </form>
            {success&&(
                <div id="success" className="success">
                    <span>메일이 성공적으로 발송되었습니다😊</span>
                </div>
            )}

        </div>
    )
}

export default Contact;