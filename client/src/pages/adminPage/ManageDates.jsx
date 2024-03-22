import React from 'react'
import '../../styles/manageDatesContainer.scss'
import { Link } from 'react-router-dom'

const ManageDates = () => {
  return (
    <section className='manageDates'>
      <h1>Manages Dates</h1>
      <div className="btnContainer">
        <Link to="/admin/manage-dates/booktype-one">Skycab 4 in 1</Link>
        <Link to="/admin/manage-dates/booktype-two">Skycab 5 in 1</Link>
        <Link to="/admin/manage-dates/booktype-three">Skycab 6 in 1</Link>
        <Link to="/admin/manage-dates/booktype-four">Eagle's Nest Skywalk</Link>
        <Link to="/admin/manage-dates/booktype-five">Skycab + Eagle's Nest Skywalk</Link>
      </div>
    </section>
  )
}

export default ManageDates