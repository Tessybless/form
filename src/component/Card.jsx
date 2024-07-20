// import React from 'react';
// import '../styles/Card.css';

// const Card = () => {
//   return (
//     <div className='card'>
//         <img src="/images/tessy.png" alt="" width={300}/>
//         <h1>Tessy</h1>
//         <p>I am a frontend developer/ Learning react</p>
//         <hr />
//         <div className="btns">
//             <button>Download CV</button>
//             <button>Hire Me</button>
//         </div>
//     </div>
//   )
// }

// export default Card

import React from 'react'
import '../styles/Card.css';

const Card = () => {
  return (
    <div className='card'>
        <img className='img' src="/images/tessy.png" alt="" />
        <h1>My Name is Tessy</h1>
        <p>I am a fontend developer | Learning react</p>
        <hr />
        <div className='btn'> 
            <button>Dowloard CV</button>
            <button>Hire Me</button>
        </div>
    </div>
  )
}

export default Card