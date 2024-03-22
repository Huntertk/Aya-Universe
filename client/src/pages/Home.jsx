import React, { useEffect } from 'react'
import '../styles/home.scss'
import {
    HomeTopContainer,
    HomeCardContainer,
    HomeWhyVisit,
    HomeHighlights,
    HomeFaq,
    HomeMap,
    HomeAdditionalInformation
} from '../components/index'
import ThingsTodo from '../components/ThingsTodo'
import { initialRender } from '../features/booking/bookingSlice'
import {useDispatch} from 'react-redux';

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialRender())
  },[])
  return (

     <section className='homeMainContainer'>
      <HomeTopContainer />
      <HomeCardContainer />
      <HomeWhyVisit />
      <HomeHighlights />
      <ThingsTodo />
      {/* <TourMap /> */}
      <HomeAdditionalInformation />
      <HomeMap />
      <HomeFaq />
     </section>
  )
}

export default Home