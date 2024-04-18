import React from 'react'
import Mycard from '../component/card'

const Person = () => {
  return (
    <div className='page d-flex align-items-center  flex-column'>
       <div className="title py-5">
        <h2>فريق العمل</h2>
      </div>
      <div className="cards">
        <Mycard />
      </div>
    </div>
  )
}

export default Person