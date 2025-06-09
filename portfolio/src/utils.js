import collinCollegeImg from './assets/history/collin-college.jpg';
import asmeImg from './assets/history/asme.png';
import emailIcon from './assets/contact/emailIcon.png';
import githubIcon from './assets/contact/githubIcon.png';
import linkedinIcon from './assets/contact/linkedinIcon.png';
import closeIcon from './assets/nav/closeIcon.png';
import menuIcon from './assets/nav/menuIcon.png';
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

  // skills images
 // 'skills/skill1.jpg': skill1Img,
  //'skills/skill2.jpg': skill2Img
  // add more as needed
};
export const getImageUrl = (path) => {
  const image = imageMap[path];
  if (!image) {
    console.warn(`Image not found for path: ${path}`);
    return ''; // or a fallback image if you want
  }
  return image;
};
