import React from "react";

function Contact(){

    return(
        <div className="contactFrame">
            <form className="contactForm">
                <div className="email">
                    <label htmlFor="email">보내는 분 이메일:</label>
                    <input id="email" type="email" name="email" placeholder="example@email.com" required/>
                </div>
                <div className="msg">
                    <label htmlFor="name">보내는 분 성함:</label>
                    <input id="name" type="text" name="name" placeholder="my name is..."/>
                    <label htmlFor="title">제목:</label>
                    <input id="title" type="text" name="title" placeholder="hello:)" required></input>
                    <label htmlFor="content">메시지:</label>
                    <textarea id="content" name="message" placeholder="내용(500자 제한)" rows="7" minLength="10" maxLength="500" required></textarea>
                </div>
                <input id="submit" type="submit" value="전송"/>
            </form>
            <div id="success" className="success">
                <span>메일이 성공적으로 발송되었습니다😊</span>
            </div>
        </div>
    )
}

export default Contact;