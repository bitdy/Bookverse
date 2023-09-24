import React from 'react'

const Newsletter = () => {
  return (
    <div><form className="w-full max-w-sm text-center">
    <div className="flex items-center border-b border-teal-500 py-2">
      <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" />
      <button className="flex-shrink-0  text-black border-r-4 border-black hover:bg-black  text-sm border-4 hover:text-white py-1 px-2 rounded" type="button">
        عضویت در خبرنامه
      </button>
    </div>
  </form></div>
  )
}

export default Newsletter