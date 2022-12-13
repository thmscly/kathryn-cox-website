import React from 'react'
import About from './pages/About'
import Home from './pages/Home'

function NavBar() {
    return (
        <div className="sticky top-0 bg-slate-100 h-15">
            <div className=' grid grid-flow-col place-items-center gap-6 text-center'>
                <div className=''>
                    <a href={Home}><h1 className='text-5xl text-slate-700 text-center font-tangerine p-2'>Katie DeVault Consultations</h1></a>
                </div>
                <div>
                    <a href={About}>About</a>
                </div>
                <div>
                    <a href="">Services</a>
                </div>
                <div>
                    <a href="">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar