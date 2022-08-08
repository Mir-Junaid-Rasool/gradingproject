import './style.css';
export const Footer = ()=>{
    return (
        <div className='footer'>
        &#169; Team Mocha 
        <div className='contact-links'>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src="../Images/Facebook.png" alt="Facebook Logo" className="logo"/></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src="../Images/Instagram.png" alt="Instagram Logo" className="logo"/></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src="../Images/LinkedIn.png" alt="LinkedIn Logo" className="logo"/></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer"><img src="../Images/Twitter.png" alt="Twitter Logo" className="logo"/></a>
          </div> 
        </div>
    )
}