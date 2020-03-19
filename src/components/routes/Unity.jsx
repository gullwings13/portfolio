import React, { Component } from 'react'
import spacejumpfun from '../../media/spacejumpfun.png'
import polymino from '../../media/polyminogardens.png'
import vrprototype from '../../media/vrprototype.png'
import witchsword from '../../media/witchsword.png'

export default class Unity extends Component
{
    render()
    {
        return (
            <React.Fragment>
                <div className="text-xl">I have been making my own prototypes and games for the last several years in my spare time. Take a look at my demo reel here on Vimeo <a className="font-bold text-purple-600 hover:underline" href="https://vimeo.com/369092145">https://vimeo.com/369092145 <i className="fab fa-vimeo-square text-purple-600"></i></a> (the volume is a little loud, please adjust your volume lower before playing)

                    <div className="mt-4">
                        and check out some of my projects below:
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">

                    <div className="project-card">
                        <img className="w-full h-48" src={spacejumpfun} alt="Space Jump Fun" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Space Jump Fun</div>
                            <p className="text-gray-700 text-base">
                                A simple platformer making use of c# interfaces. Give it a try on <a
                                    className="font-bold"
                                    href="https://tsh.itch.io/space-jump-fun">
                                    <span className="text-purple-600 hover:underline">itch.io <i className="fab fa-itch-io text-purple-600"></i></span></a></p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="hashtag">#csharp</span>
                            <span className="hashtag">#unity</span>
                            <span className="hashtag">#interfaces</span>
                        </div>
                    </div>

                    <div className="project-card">
                        <img className="w-full h-48" src={polymino} alt="Polymino Gardens" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Polymino Gardens</div>
                            <p className="text-gray-700 text-base">
                                A puzzle game featuring an animated UI and procedural gardens. Download for PC and MAC at <a
                                    className="font-bold"
                                    href="https://tsh.itch.io/polyminogardens">
                                    <span className="text-purple-600 hover:underline">itch.io <i className="fab fa-itch-io text-purple-600"></i></span></a></p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="hashtag">#csharp</span>
                            <span className="hashtag">#unity</span>
                            <span className="hashtag">#ui</span>
                            <span className="hashtag">#procedural</span>
                        </div>
                    </div>

                    <div className="project-card">
                        <img className="w-full h-48" src={vrprototype} alt="VR Prototype" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">VR Prototype</div>
                            <p className="text-gray-700 text-base">
                                This VR prototype explores different firing mechanics. Watch a quick gameplay video on <a
                                    className="font-bold"
                                    href="https://tsh.itch.io/vrprototype">
                                    <span className="text-purple-600 hover:underline">itch.io <i className="fab fa-itch-io text-purple-600"></i></span></a></p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="hashtag">#csharp</span>
                            <span className="hashtag">#unity</span>
                            <span className="hashtag">#vr</span>
                        </div>
                    </div>

                    <div className="project-card">
                        <img className="w-full h-48" src={witchsword} alt="Witchsword" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Witchsword</div>
                            <p className="text-gray-700 text-base">
                                The beginnings of an action RPG exploring VR elements <a
                                    className="font-bold"
                                    href="https://tsh.itch.io/witchswordv2">
                                    <span className="text-purple-600 hover:underline">itch.io <i className="fab fa-itch-io text-purple-600"></i></span></a></p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="hashtag">#csharp</span>
                            <span className="hashtag">#unity</span>
                            <span className="hashtag">#vr</span>
                        </div>
                    </div>

                </div>
            </React.Fragment>

        )
    }
}
