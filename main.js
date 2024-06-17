import "./styles/style.scss";

import { header } from "./sections/header";
import {education, summary, workingExp, languages, skills} from "./sections/main";

document.querySelector("#header").innerHTML = header;
document.querySelector("#summary").innerHTML = summary;
document.querySelector("#skills").innerHTML = skills;
document.querySelector("#working-exp").innerHTML = workingExp
document.querySelector("#education").innerHTML = education
document.querySelector("#languages").innerHTML = languages
