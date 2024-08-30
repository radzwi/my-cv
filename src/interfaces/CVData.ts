import Experience from "./Experience";

export default interface CVData {
    photo: string;
    name: string;
    lastName: string;
    position: string;
    address: string[];
    mail: string;
    mobile: string;
    linkedin: string;
    facebook: string;
    instagram: string;
    employment: Experience[];
    education: Experience[];
    skills: any[];
    passions: JSX.Element[];
}
