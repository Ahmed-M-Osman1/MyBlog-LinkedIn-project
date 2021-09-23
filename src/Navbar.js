import React from "react"
import {Link} from 'react-router-dom'

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/article">Article</Link>
            </li>
            <li>
                <Link to="/articles-list">Articles List</Link>
            </li>
        </ul>
    </nav>
)
export default Navbar