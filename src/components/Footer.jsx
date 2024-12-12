import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const currentYear = new Date().getFullYear(); // get the current year
  return (
    <p className='bg-black text-white text-center py-2 '>&copy; Copyright under sanjeev || {currentYear} made using <i class="fa-brands fa-react fa-spin"></i></p>
   
  )
}

export default Footer