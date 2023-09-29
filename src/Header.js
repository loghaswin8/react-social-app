import React from 'react'
import {FaMobileAlt, FaLaptop, FaTabletAlt} from 'react-icons/fa'
import DataContext from './context/DataContext'
import { useContext } from 'react'

const Header = ({title}) => {
  const {width} = useContext(DataContext);
  return (
    <header className='Header'>
        <h1>{title}</h1>
        {width < 762 ? <FaMobileAlt />
          : width < 992 ? <FaTabletAlt />
            : <FaLaptop /> }
    </header>
  )
}

export default Header