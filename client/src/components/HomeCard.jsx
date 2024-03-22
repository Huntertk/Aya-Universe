import React, { useState } from 'react'
import {BsFillCalendar2MinusFill} from 'react-icons/bs'
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import './day-picker.css';
import { DayPicker } from 'react-day-picker';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { choosingBooking } from '../features/booking/bookingSlice';
import HomeWhatsIncluded from './HomeWhatsIncluded';
import ImageViewerContainer from './ImageViewerContainer';


const HomeCard = ({data}) => {
    const {image, id, title, desc, type, pricing, preference} = data;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [imgViewer, setImageViwer] = useState(false);
  return (
    <>
      {imgViewer && <ImageViewerContainer imgData={data} setImageViwer={setImageViwer} />}
    <div className="cardContainer">
        <div className="imageContainer">
            {data.image.map((ima, index) =>  <img key={index} src={ima} alt={data.title}  onClick={() => setImageViwer(true)}/>)}
        </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{desc}</p>
                <p>Next available : Tomorrow</p>
            </div>
            <div className="cardBtnContainer">
                <button onClick={() => {
                    dispatch(choosingBooking({type, title, pricing, preference}))
                    return navigate("/date-confirm")
                }} className='checkAvailability'>
                    Book Now
                </button>
            </div>
            <div className="extra">
                <HomeWhatsIncluded />
            </div>
        </div>
    </>
  )
}

export default HomeCard