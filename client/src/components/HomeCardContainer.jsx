import React, { useEffect, useState } from 'react';
import '../styles/homeCardContainer.scss';
// import { cardData } from '../data';
import HomeCard from './HomeCard';
import {toast} from 'react-toastify';
import LoadingSpinner from './LoadingSpinner';
import {useDispatch} from 'react-redux';
import { initialRender } from '../features/booking/bookingSlice';
import { useGetAllBookingPlanQuery } from '../redux/api/bookingPlanApi';


const HomeCardContainer = () => { 
  const [cardData, setCardData] = useState(null);
  const { data, error, isLoading, isSuccess }= useGetAllBookingPlanQuery();
  const dispatch = useDispatch()

  useEffect(() => {
    if(isSuccess){
      setCardData(data.bookingPlan)
    }
    if(error){
      toast.error("Please refresh the page")
    }
    dispatch(initialRender())
  },[isSuccess,isLoading, error])
  

  if(isLoading){
    return <LoadingSpinner />
  }
  return (
    <section className='HomeCardMainContainer'>
        {cardData?.map((data) => {
            return <HomeCard key={data._id} data={data} />
        })}
    </section>
  )
}

export default HomeCardContainer