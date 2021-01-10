import './styles.css';
import {ReactComponent as InstagramIcon} from './Instagram.svg';
import {ReactComponent as YoutubeIcon} from './Youtube.svg';
import {ReactComponent as LinkedInIcon} from './Linkedin.svg';


function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento <b>Semana DevSuperior</b>
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new"><YoutubeIcon /></a>
                <a href="https://www.linkedin.com/school/devsuperior/"><LinkedInIcon /></a>
                <a href="https://www.instagram.com/devsuperior.ig"><InstagramIcon /></a>
            </div>
        </footer>
      
      )
}

export default Footer;