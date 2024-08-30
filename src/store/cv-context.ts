import CVData from "../interfaces/CVData";
import {createContext} from "react";

export const data: CVData = {
    photo: "",
    name: "Sheila",
    lastName: "Bagstone",
    position: "Developer",
    address: ["2965 Famous Road", "10010 NY"],
    mail: "sheila@bagstone.oi",
    mobile: "917-739-0562",
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    employment: [
        {year: 2020, description: "Junior developer"},
        {year: 2023, description: "Developer"}
    ],
    education: [
        {year: 2020, description: "Massachusetts Institute of Technology"},
        {year: 2015, description: "West Valley High School"}
    ],
    skills: [],
    passions: []
}

const CVContext = createContext(data);

export default CVContext;
