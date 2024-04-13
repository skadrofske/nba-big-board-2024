import React from 'react'

const Player = (props) => {
  return (
    <div className='mb-8'>
        <div className="bg-gray-300 px-8 py-6 rounded-t-xl relative">
            <div className="h-12 w-12 bg-gray-600 text-white text-center rounded-full absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-2xl font-semibold">{props.id}</div>
            <h2 className=''><span className='font-semibold text-4xl'>{props.name}</span><br className='md:hidden'/> <span className="text-gray-600 text-3xl md:text-4xl">{props.team}</span></h2>
            <p className='text-gray-600 font-semibold'>{props.position} | {props.age}yo | {props.height} | {props.weight}lb</p>
        
        </div>
        <div className="md:flex gap-8 p-4 md:p-8 bg-gray-200 rounded-b-xl">
            <img className="rounded-lg object-cover md:w-1/3 h-72 mb-2 md:mb-0" src={props.img.url} alt={props.img.alt} />
            <div className="">
                <p className='mb-4'>{props.content}</p>
                <a href={props.url} target='_blank' className='text-blue-500 underline'>Stats</a>
            </div>
        </div>
    </div>
  )
}

export default Player