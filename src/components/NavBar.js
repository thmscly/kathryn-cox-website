import React from 'react'

function NavBar() {
    return (
        <div className="sticky top-0 bg-slate-100 h-20">
            <div className=' grid grid-flow-col items-center gap-4 text-center text-slate-700 font-italiana'>
                <div className=''>
                    <a href='/'><h1 className='text-5xl text-slate-700 text-center font-tangerine p-2'>Katie DeVault Consultations</h1></a>
                </div>
                <div>
                    <a href='/about'>About</a>
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