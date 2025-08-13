import collinCollegeImg from './assets/history/collin-college.jpg';
import asmeImg from './assets/history/asme.png';
import emailIcon from './assets/contact/emailIcon.png';
import githubIcon from './assets/contact/githubIcon.png';
import linkedinIcon from './assets/contact/linkedinIcon.png';
import closeIcon from './assets/nav/closeIcon.png';
import menuIcon from './assets/nav/menuIcon.png';
import portfolioImg from './assets/hero/portfolio.jpg';
import ieeeImg from './assets/history/images.png';
import reactIcon from './assets/skills/react.png';
import cppIcon from './assets/skills/cpp.png';
import mongodbIcon from './assets/skills/mongodb.png';
import pythonIcon from './assets/skills/python.png';
import SQLIcon from './assets/skills/SQL.png';
import tensorflowIcon from './assets/skills/tensorflow.png';
import cortanaProjImg from './assets/projects/cortana_proj.jpg';
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
  'hero/portfolio.jpg': portfolioImg,
  // ieee image
  'history/images.png': ieeeImg,
  // skills icons
  'skills/react.png': reactIcon,
  'skills/cpp.png': cppIcon,
  'skills/mongodb.png': mongodbIcon,
  'skills/python.png': pythonIcon,
  'skills/SQL.png': SQLIcon,
  'skills/tensorflow.png': tensorflowIcon,
  // projects images
  'projects/cortana_proj.jpg': cortanaProjImg,
};
export const getImageUrl = (path) => {
  const image = imageMap[path];
  if (!image) {
    console.warn(`Image not found for path: ${path}`);
    return ''; // or a fallback image if you want
  }
  return image;
};
