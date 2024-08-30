import './Contact.scss';
import { RiMapPinLine } from "react-icons/ri";
import { BsEnvelope } from "react-icons/bs";
import { FaLinkedin, FaFacebook, FaInstagram, FaMobileAlt } from "react-icons/fa";
import {useContext} from "react";
import CVContext from '../../store/cv-context';
const Contact = () => {
    const cvCtx = useContext(CVContext);
    return (
        <div className="contact">
            <ul className="contact__list">
                <li><RiMapPinLine/>{cvCtx.address[0]}</li>
                <li><RiMapPinLine/>{cvCtx.address[1]}</li>
                <li><BsEnvelope/>{cvCtx.mail}</li>
                <li><FaMobileAlt/>{cvCtx.mobile}</li>
                <li><a href={cvCtx.linkedin} target="_blank"><FaLinkedin/>{cvCtx.linkedin}</a></li>
                <li><a href={cvCtx.facebook} target="_blank"><FaFacebook/>{cvCtx.facebook}</a></li>
                <li><a href={cvCtx.instagram} target="_blank"><FaInstagram/>{cvCtx.instagram}</a></li>
            </ul>
        </div>
    )
}

export default Contact;
