'use client';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowUp, FaInstagram } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/deepanshu-thakur-985a5a215/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="http://github.com/digrajthakur/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/deepanshuthakur360/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* Scroll to Top */}
        <button onClick={scrollToTop} className="scroll-top-btn" title="Scroll to top">
          <FaArrowUp />
        </button>
        <p className="footer-text">© {new Date().getFullYear()} Deepanshu. All rights reserved.</p>

      </div>
    </footer>
  );
}



// import './Footer.css';

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <p>© {new Date().getFullYear()} Deepanshu. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }
