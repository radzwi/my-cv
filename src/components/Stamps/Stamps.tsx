import './Stamps.scss';
import { StampsPropsTypes } from './Stamps.types';
const Stamps = ({ className, positions }: StampsPropsTypes) => {
    return (
        <div className={`stamps ${className}`} >
            {positions.map(x => x)}
        </div>
    )
}

export default  Stamps;
