import '../styles/homeFaq.scss';
import {BiSolidChevronDownCircle, BiSolidChevronUpCircle} from 'react-icons/bi';
import { addQues } from '../data';
import { useState } from 'react';

const QuestionContainer = ({data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return  (
        <div className='questionNanswerContainer' >
            <div className="questionContainer" onClick={() => setIsModalOpen(prev => !prev)}>
                <h2>{data.ques}</h2>
                <div className="icon">
                   {isModalOpen ? 
                   <BiSolidChevronUpCircle />
                   : 
                   <BiSolidChevronDownCircle/>
                }
                </div>
            </div>
            {
                isModalOpen && <div className="answer">
                    {data.ans.map((li, i) => (
                    <div key={i}>
                        <span>●</span>
                        <span>{li}</span>
                        </div>
                    )
                    )}
                </div>
            }
                

        </div>
    )
}

const HomeAdditionalInformation = () => {
    return  (
        <section className='homeFAQMainContainer'>
            <h1>Additional Information</h1>
        <div className="questionMainContainer">
        {
            addQues.map((data) => {
                return(
                    <QuestionContainer key={data.id} data={data} />
                )
            })
            
        }
    </div>
</section>
      
    )
}

export default HomeAdditionalInformation