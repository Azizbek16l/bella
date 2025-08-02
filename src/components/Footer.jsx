
import { FaTwitter,FaFacebook,FaInstagram } from "react-icons/fa";
function Footer() {
  return (
   <footer>
    <div className="container">
      <h2>Bella Ollange</h2>
      <ul>
        <li><a href="#"><FaTwitter/></a></li>
        <li><a href="#"><FaFacebook/></a></li>
        <li><a href="#"><FaInstagram/></a></li>
      </ul>

      <span id="copyright">Copywright 2020 Bella Onojie.com</span>
    </div>
   </footer>
  )
}

export default Footer