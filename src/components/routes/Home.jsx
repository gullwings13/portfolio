import React, { Component } from 'react'

export default class Home extends Component
{
    render()
    {
        return (
            <div className="text-xl">
                <span className="font-bold">Hello.</span> I’m an empathic and imaginative software engineer with over 20 years working in technology. Having previously designed and implemented reliable, fast and secure Cisco networks, I am now building complex full stack web applications and games in JS/React/Node/Rails and C#/Unity. Coding is my passion because I love problem-solving and creating useful things. I aspire to make a positive contribution in an inclusive and collaborative environment.
                <div className="mt-4">
                    Please find me on Github and Linkedin:
                     <div>
                        <a href="https://github.com/gullwings13/"><i className="fab fa-github-square text-6xl hover:text-gray-400"></i></a>
                        <a href="https://www.linkedin.com/in/trevor-smith-holbourn/"><i className="fab fa-linkedin text-6xl hover:text-gray-400 ml-3"></i></a>
                    </div>
                </div>
                <div className="mt-4">
                    You can download my resume here:
                     <div>
                        <a href="https://trevorsmithholbourn.xyz/resume.pdf"><i class="far fa-file-pdf text-6xl hover:text-gray-400"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}