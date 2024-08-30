import CVContext from '../../store/cv-context';
import './WhoIAm.scss'
import {useContext} from "react";
const WhoIAm = () => {
    const cvCtx = useContext(CVContext);
    
    return (
        <div className="whoIAm">
            <div className="whoIAm__name">{`${cvCtx.name} ${cvCtx.lastName}`}</div>
            <img className="whoIAm__photo" src="https://picsum.photos/id/64/200/200" alt="Portrait"/>
            <div className="whoIAm__position">{cvCtx.position}</div>
        </div>
    )
}

export default WhoIAm;
