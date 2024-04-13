import React from 'react'

const Player = (props) => {
  return (
    <div className='mb-8'>
        <div className="bg-gray-300 px-8 py-6 rounded-t-xl relative">
            <div className="h-12 w-12 bg-gray-600 text-white text-center rounded-full absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-2xl font-semibold">{props.id}</div>
            <h2 className='text-4xl'><span className='font-semibold'>{props.name}</span> <span className="text-gray-600">{props.team}</span></h2>
            <p className='text-gray-600 font-semibold capitalize'>{props.position} | {props.height} | {props.weight}lb</p>
        
        </div>
        <div className="flex gap-8 p-8 bg-gray-200 rounded-b-xl">
            <img className="rounded-lg object-cover w-1/3 h-80" src={props.img.url} alt={props.img.alt} />
            <div className="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sit. Animi, officiis et? Praesentium beatae quo error, itaque eveniet minima adipisci sit placeat? Non porro eos, neque sapiente iure doloribus.</p>
            </div>
        </div>
    </div>
  )
}

export default Player