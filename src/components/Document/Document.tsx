import CVContext from "../../store/cv-context";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Icon from "../Icon/Icon";
import Stamps from "../Stamps/Stamps";
import WhoIAm from "../WhoIAm/WhoIAm";
import './Document.scss';
import { useContext } from "react";
import { SiPhotobucket } from "react-icons/si";
import { FaMobileAlt, FaBriefcase, FaMouse, FaHeadphones } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDotnet } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaMusic } from "react-icons/fa";
import { LuPlane } from "react-icons/lu";
import { MdOutlineSportsBasketball } from "react-icons/md";

const Document = () => {
    const cvCtx = useContext(CVContext);
      return (
        <div className="wrapper">
            <div className="document">
                <div className="document__first-row">
                    <WhoIAm />
                    <Icon kind={<SiPhotobucket />} />
                    <Icon kind={<FaBriefcase />} />
                    <Experience className="work" data={cvCtx.employment} />
                </div>
                <div className="document__second-row">
                    <Contact />
                    <Icon kind={<FaMobileAlt />} />
                    <Icon kind={<FaMouse  />} />
                    <Stamps className="skills" positions={[<FaHtml5 />, <FaCss3Alt />, <FaReact />, <IoLogoJavascript />, <SiDotnet />, <TbBrandCSharp />]}/>
                </div>
                <div className="document__third-row">
                    <Experience className="education" data={cvCtx.education} />
                    <Icon kind={<GiDiploma />} />
                    <Icon kind={<FaHeadphones />} />
                    <Stamps className="passion" positions={[<FaMusic />, <LuPlane />, <MdOutlineSportsBasketball />]}/>
                </div>
            </div>
        </div>
      )  
};

export default Document;
