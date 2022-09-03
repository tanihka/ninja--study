import "./faq.css"
// import "../images/faq.jpg"
import QNA from "./QNA"







const Faq = () => {

    return (
        <>
            <div className="faq-heading">Answers to FAQs ;)</div>
            <div className="faq">
            <div className="qna">
                    <QNA/>
                </div> 
                <div className="img"><img src={require('../../images/FAQs-amico.png')} alt="" /></div>
                

            </div>

        </>
    )

}

export default Faq