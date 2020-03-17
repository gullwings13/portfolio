import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout(props)
{
    return (
        <React.Fragment>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/unity">Unity</Link>
                    <Link to="/fullstack">Fullstack</Link>
                </nav>
                Trevor Smith-Holbourn
            </header>
            <main>
                {props.children}
            </main>
            <footer>

            </footer>
        </React.Fragment>
    )
}
