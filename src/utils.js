import collinCollegeImg from './assets/history/collin-college.jpg';
import asmeImg from './assets/history/asme.png';
import emailIcon from './assets/contact/emailIcon.png';
import githubIcon from './assets/contact/githubIcon.png';
import linkedinIcon from './assets/contact/linkedinIcon.png';
import closeIcon from './assets/nav/closeIcon.png';
import menuIcon from './assets/nav/menuIcon.png';
import portfolioImg from './assets/hero/portfolio.jpeg';
import swgohIMG from './assets/projects/swgoh_FarmingCalc.jpg';
import reactIcon from './assets/skills/react.png';
import cppIcon from './assets/skills/cpp.png';
import vhdlIcon from './assets/skills/vhdl.png';
import pythonIcon from './assets/skills/python.png';
import SQLIcon from './assets/skills/SQL.png';
import cortanaProjImg from './assets/projects/cortana_proj.jpg';
import fpgadashImg from './assets/projects/fpga_dashboard.jpg';
const imageMap = {
  // history images
  'history/collin-college.jpg': collinCollegeImg,
  'history/asme.png': asmeImg,
  // contact section icons
  'contact/emailIcon.png': emailIcon,
  'contact/githubIcon.png': githubIcon,
  'contact/linkedinIcon.png': linkedinIcon,
  // main nav bar icons
  'nav/closeIcon.png': closeIcon,
  'nav/menuIcon.png': menuIcon,
  // portfolio hero image
  'hero/portfolio.jpeg': portfolioImg,

  // skills icons
  'skills/react.png': reactIcon,
  'skills/cpp.png': cppIcon,
  'skills/vhdl.png': vhdlIcon,
  'skills/python.png': pythonIcon,
  'skills/SQL.png': SQLIcon,
  // projects images
  'projects/cortana_proj.jpg': cortanaProjImg,
  'projects/swgoh_FarmingCalc.jpg': swgohIMG,
  'projects/fpga_dashboard.jpg': fpgadashImg,

};
export const getImageUrl = (path) => {
  const image = imageMap[path];
  if (!image) {
    console.warn(`Image not found for path: ${path}`);
    return ''; // or a fallback image if you want
  }
  return image;
};
