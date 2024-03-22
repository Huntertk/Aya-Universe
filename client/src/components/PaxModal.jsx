import React, { useEffect, useState } from 'react'
import '../styles/paxModal.scss'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { 
    generalCountIncrease, 
    generalCountDecrease, 
    countTotalBookingAmount,
    cancelBooking,
    closePaxModel,
    generalTotalAmount,
} from '../features/booking/bookingSlice';



const Pax = ({category, ageText, count, actionType, total}) => {
    const dispatch = useDispatch()
    
    const handleIncrese = () => {
        dispatch(actionType.increase())
    }
    
    const handleDecrease = () => {

        dispatch(actionType.decrease())
    }    
    return (
         <div className="pax">
            <p>
                <span>{category}</span>
                <span>{ageText}</span>
            </p>
            <div className="btnContainer">
                {
                    count === 0 ? <AiOutlineMinusCircle className='disabledBtn'  /> : <AiOutlineMinusCircle onClick={handleDecrease} />
                }
                <p>{count}</p>
                {
                    count === 10 ? <AiOutlinePlusCircle className='disabledBtn'  /> : <AiOutlinePlusCircle onClick={handleIncrese} />
                }
                    
            </div>
            <div className="price">
                <span>AED {total}</span>
            </div>
        </div>
    )
}

const PaxModal = ({selectedDate}) => {
    const {
        totalAmount,
        bookingDate,
        pref,
        bookingTitle,
        generalCount,
        generalTotal
    } = useSelector((store) => store.booking)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(generalTotalAmount())
        dispatch(countTotalBookingAmount())

    },[generalCount])
    const navigate = useNavigate()

  return (
    <div className='paxSelectorContainer'>
        <div className='cancelBookingContainer'>
            <button  className='backIcon' onClick={() => dispatch(closePaxModel())}>Back</button>
            <button  className='crossIcon' onClick={() => {
                dispatch(cancelBooking())
                return navigate("/")
            }}>Cancel</button>
        </div>
        <p className='bookingType'>{bookingTitle}</p>
        {pref && <p className='bookingType'>{pref}</p>}
        <h1>Select number of tickets</h1>
        <div className="paxSelector">
                <Pax  
                category ={"General"} 
                ageText={"3 to 99 yrs"} 
                count={generalCount}
                actionType={{
                    increase: generalCountIncrease,
                    decrease: generalCountDecrease
                }}
                total={generalTotal}
                />
        </div>
            <div className="totalPayable">
                <span>Total</span>
               <span>AED {totalAmount}</span>
            </div>
            
        <div className="dateContainer">

                <p>{bookingDate}  </p> 
                {
                    totalAmount > 0 &&
                    <Link to="/booking"><button>Next</button></Link> 
                    
                }
            
        </div>
                
    </div>
  )
}

export default PaxModal