import React from 'react'

interface ProcessCardProps {
    img: string;
    title: string;
    desc: string;
}

const ProcessCard = ({img, title, desc}: ProcessCardProps) => {
  return (
    <div>
      <div>
        <img src={img} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default ProcessCard
