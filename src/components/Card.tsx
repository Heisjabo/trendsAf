import React from 'react'

type CardProps = {
    text: string;
}

const Card: React.FC<CardProps> = ({text}) => {
  return (
    <div className='bg-white px-4  cursor-pointer text-center rounded-[5px] py-12 '>
      <h4 className='text-[#2245fe] text-xl hover:text-[#161616] font-medium'>{text}</h4>
    </div>
  )
}

export default Card
