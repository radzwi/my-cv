import './Icon.scss';
import { IconPropsTypes } from './Icon.types';
const Icon = ({ kind }: IconPropsTypes) => {
    return (
        <div className="icon">{kind}</div>
    )
}

export default Icon;
