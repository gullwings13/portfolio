import React, { Component } from 'react'
import stocplay from '../../media/stocplay.png'
import rmtradinggame from '../../media/rmtradinggame.png'
import njtransit from '../../media/njtransit.png'
import yaywalker from '../../media/yaywalker.png'

export default class Fullstack extends Component
{
    render()
    {
        return (
            <React.Fragment>
                <div className="text-xl">
                    While attending the GA Software Engineering Immerisive I completed the following projects
                </div>
                <div className="flex flex-wrap justify-center">

                    <div className="project-card">
                        <img className="w-full h-48 object-cover object-left-top" src={yaywalker} alt="Yaywalker" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Yay!Walker</div>
                            <p className="text-gray-700 text-base">
                                A simple platformer using interfaces. Give it a try <a
                                    className="font-bold"
                                    href="https://tsh.itch.io/space-jump-fun">here</a> </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="hashtag">#rubyonrails</span>
                            <span className="hashtag">#react</span>
                            <span className="hashtag">#tailwindcss</span>
                        </div>
                    </div>

                    <div className="project-card">
                        <img className="w-full h-48 object-cover object-left-top" src={njtransit} alt="NJ Transit" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">NJ Transit</div>
                            <p className="text-gray-700 text-base">
                                Some text about this project. And a little but more, check it out <a
                                    className="font-bold"
                                    href="https://tsh.itch.io/space-jump-fun">here</a> </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="hashtag">#express</span>
                            <span className="hashtag">#sequlize</span>
                            <span className="hashtag">#react</span>
                        </div>
                    </div>

                    <div className="project-card">
                        <img className="w-full h-48 object-cover object-left-top" src={rmtradinggame} alt="Rick and Morty Trading Game" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Rick and Morty Trading Game</div>
                            <p className="text-gray-700 text-base">
                                Trade exotic goods while you explore the Rick and Morty Multiverse, try it out<a
                                    className="font-bold"
                                    href="https://tsh.itch.io/space-jump-fun">here</a> </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="hashtag">#react</span>
                            <span className="hashtag">#rest</span>
                            <span className="hashtag">#api</span>
                        </div>
                    </div>

                    <div className="project-card">
                        <img className="w-full h-48 object-cover object-left-top" src={stocplay} alt="StocPlay" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">StocPlay</div>
                            <p className="text-gray-700 text-base">
                                Trade virtual stocks to become more confident in the stock market <a
                                    className="font-bold"
                                    href="https://tsh.itch.io/space-jump-fun">here</a> </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="hashtag">#html</span>
                            <span className="hashtag">#css</span>
                            <span className="hashtag">#javascript</span>
                        </div>
                    </div>

                </div>
            </React.Fragment>

        )
    }
}
