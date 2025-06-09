import collinCollegeImg from './assets/history/collin-college.jpg';
import asmeImg from './assets/history/asme.png';
const imageMap = {
  // history images
  'history/collin-college.jpg': collinCollegeImg,
  'history/asme.png': asmeImg,
  // 'history/other.jpg': otherImg,

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
