import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'

const Nav = () => {
const {search, setSearch} = useContext(DataContext);
  return (
    <nav className='Nav'>
        <form onSubmit={(e) => e.preventDefault()} className='searchForm'>
          <label htmlFor="search">search posts</label>
          <input 
            id='search'
            type="text"
            placeholder='search post'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="post">Posts</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Nav