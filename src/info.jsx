import React from 'react'
import ReactDOM from 'react-dom'
import EmailIcon from '@mui/icons-material/Email'
import { fontSize } from '@mui/system';

export default function Info(props) {
  // const pic = "./pfp.JPG";
  return (
    <div className='info-card'>
    <img className='info-pfp' src={props.pic} />
    <h1 className='info-name'>{props.name}</h1>
    <h2 className='info-headline'>{props.headline}</h2>
    <h3 className='info-web'>{props.website}</h3>
    <button className='email-btn'><EmailIcon style={{fontSize:"18px"}} />Email</button>
    </div>
  )
}
