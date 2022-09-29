import React from 'react'
import ReactDOM from 'react-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer>
    <a href=""><TwitterIcon/></a>
      <a href="https://www.facebook.com/insane.brainiac/" target="_blank" ><FacebookIcon/></a>
      <a href="https://www.instagram.com/arshan_alee/" target="_blank"><InstagramIcon/></a>
      <a href="https://www.linkedin.com/in/mir-arshan-ali-06431b20a/" target="_blank"><LinkedInIcon/></a>
      <a href="https://github.com/arshan-alee" target="_blank"><GitHubIcon/></a>
    </footer>
  )
}
