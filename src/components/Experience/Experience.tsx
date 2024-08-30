import './Experience.scss';
import { ExperiencePropsTypes } from './Experience.types';
const Experience = ({ className, data }: ExperiencePropsTypes) => {
    return (
        <div className={`experience ${className}`}>
            {data.map(x => (
                <div className="experience__row">
                    <div className="experience__row--year">{x.year}</div>
                    <div className="experience__row--description">{x.description}</div>
                </div>
            ))}
        </div>
    )
}

export default Experience;
