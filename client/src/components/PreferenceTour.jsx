import '../styles/preferenceTour.scss'
import {useDispatch, useSelector} from 'react-redux'
import { countTotalBookingAmount, setPreference } from '../features/booking/bookingSlice'


const CardData = ({cardData}) => {
    const {pref}  = useSelector(state => state.booking)
    const dispatch = useDispatch()
    let price = cardData.price.adult;
    
    return (
        <div className="prefrenceTabCard">
        <h1>{cardData.title}</h1>
        <div className="content">
             <p>MYR {price}</p>
            
            <button onClick={() => {
                dispatch(setPreference({pref: cardData.title}))
            }}>{pref === cardData.title ? "✔ Selected": "Select"}</button>
        </div>
        <ul>
            {
                cardData.details.map((d, index) => (
                    <li key={index}>{d}</li>
                ))
            }
        </ul>
    </div>
    )
}

const PreferenceTour = ({data, selectedDate}) => {
    const day = selectedDate?.toString()?.split(' ')[0]
  return (
    <section className='prefrenceTab'>
        <h1>Select your preference</h1>
        <div className="prefrenceTabCardContainer">
            {
                data.map((d, index) => (
                    <CardData key={index} cardData={d} />
                ))
            }
            
        </div>
    </section>
  )
}

export default PreferenceTour