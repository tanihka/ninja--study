import {useState} from 'react'
import {Data} from  "../../data"

const QNA = () => {
    const [selected, setselected] = useState(null)
    const toggle = i =>{
        if (selected === i){
            return setselected(null)
        }
        setselected(i)
    }
  return (
    <>
    <div className="accordion">
        {Data.map((item,i)=>(
            <div className="item">
                <div className="question" onClick={()=>toggle(i)}>
                    <h2>{item.question}</h2>
                    <span>{selected===i? <><i class="fa-solid fa-angle-up"></i></>: <><i class="fa-solid fa-angle-down"></i></> }</span>
                </div>
                <div className={selected===i? 'answer show': 'answer' }>
                    <p>{item.answer}</p>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default QNA