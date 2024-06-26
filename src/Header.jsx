import React from 'react'

const Header = () => {
  return (
    <div className='w-full'>
        <div className="container">
            <div className="h-svh flex items-center justify-center relative mb-12">
                <div className="text-center md:px-32">
                    <h1 className='text-4xl md:text-5xl text-white font-semibold mb-4 text-pretty'>The 2024 NBA Big Board</h1>
                    <p className="text-white text-pretty md:text-balance">A lot of people think this class is weak, but every draft has produced multiple All-Stars, and if Sam Presti says he likes it, I like it too.</p>
                </div>
                <svg className="absolute bottom-8 animate-bounce" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1024 1024"><path fill="white" d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"/></svg>
            </div>
        </div>
    </div>
  )
}

export default Header