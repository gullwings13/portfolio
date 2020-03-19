import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Layout(props)
{
    return (
        <React.Fragment>
            <header className="bg-gray-200 rounded-bl-lg shadow ">
                <div className="flex flex-col sm:flex-row">
                    <h1 className="font-sans text-5xl sm:text-5xl md:text-6xl ml-2">Trevor </h1>
                    <h1 className="font-sans text-5xl sm:text-5xl md:text-6xl ml-2"> Smith-Holbourn</h1>
                </div>
                <h2 className="ml-4 text-lg sm:text-2xl">Software Engineer | Gameplay Programmer </h2>
            </header>
            <main className=" p-4 rounded-bl-lg shadow">
                {props.children}
            </main>
            <footer className="p-4 mb-24 sm:mb-4">
                <h5>© 2020 Trevor Smith-Holbourn</h5>
            </footer>
            <nav className="p-4 flex min-w-full justify-around fixed bottom-0 text-lg bg-gray-400 rounded-tl-lg">
                <NavLink activeClassName="bg-red-300"
                    exact to="/"
                    className="hover:text-red-400 btn btn-gray text-center active:bg-red-300 focus:bg-red-300">Home</NavLink>

                <NavLink activeClassName="bg-blue-300"
                    exact to="/unity"
                    className="hover:text-blue-400 btn btn-gray text-center active:bg-blue-300 focus:bg-blue-300">Unity Projects</NavLink>

                <NavLink activeClassName="bg-green-300"
                    exact to="/fullstack"
                    className="hover:text-green-400 btn btn-gray text-center active:bg-green-300 focus:bg-green-300">Fullstack Projects</NavLink>

                <NavLink activeClassName="bg-yellow-300"
                    exact to="/contact"
                    className="hover:text-yellow-500 btn btn-gray text-center active:bg-yellow-300 focus:bg-yellow-300">Contact</NavLink>
            </nav>
        </React.Fragment>
    )
}
