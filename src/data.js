// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
} from "react-icons/fa";
import {
  SiJavascript,
  SiStyledcomponents,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
// import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "ShinaJr";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo = `Hi there, I am Shina and I am a React native developer with a year experience in building high quality and scalable cross-platform apps leveraging the use of react native technology. I enjoy learning about the latest technologies and helping others use it to improve their lives and be more productive.`;
export const info = `If Shina is not developing apps, you can find him watching football,learning new languages, playing with new technologies and exploring the latest trends in
    the world of technology, sports etc.
    `;

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "React-Native/Expo",
  },
  {
    id: 6,
    skill: <SiStyledcomponents className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <SiRedux className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <SiTailwindcss className="display-4" />,
    name: "Tailwind CSS",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume =
  "https://drive.google.com/file/d/1w_bKNThPR5T_9fAQtVKalOy0p-UIl2IR/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
  "deliveroo-clone",
  "Pelia",
  "SuperFoods",
  "NFT_APP",
];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "deliveroo-clone",
    image: require("./images/Deliveroo1.jpg"),
    image1: require("./images/Deliveroo2.jpg"),
    image2: require("./images/Deliveroo3.jpg"),
    image3: require("./images/Deliveroo4.jpg"),
    image4: require("./images/Deliveroo6.jpg"),
    image5: require("./images/Deliveroo5.jpg"),
    video: require("./videos/deliverooVid.mp4"),
  },
  {
    name: "Pelia",
    image: require("./images/Pelia1.jpg"),
    image1: require("./images/Pelia2.jpg"),
    image2: require("./images/Pelia3.jpg"),
    image3: require("./images/Pelia4.jpg"),
    image4: require("./images/Pelia6.jpg"),
    image5: require("./images/Pelia7.jpg"),
    image6: require("./images/Pelia8.jpg"),
    video: require("./videos/peliaVid.mp4"),
  },
  {
    name: "SuperFoods",
    image: require("./images/SF1.jpg"),
    image1: require("./images/SF2.jpg"),
    image2: require("./images/SF1.jpg"),
  },
  {
    name: "NFT_APP",
    image: require("./images/NFT1.jpg"),
    image1: require("./images/NFT1.jpg"),
    image2: require("./images/NFT2.jpg"),
    video: require("./videos/nftVid.mp4"),
  },
];
//images for project features for matching repo below
// export const projectFeaturesImages = [
//   {
//     name: "deliveroo-clone",
//     image1: require("./images/Deliveroo2.jpg"),
//     image2: require("./images/Deliveroo3.jpg"),
//     image3: require("./images/Deliveroo4.jpg"),
//     image4: require("./images/Deliveroo5.jpg"),
//     image5: require("./images/Deliveroo6.jpg"),
//     video: require("./videos/deliverooVid.mp4"),
//   },
//   {
//     name: "Pelia",
//     image1: require("./images/Pelia2.jpg"),
//     image2: require("./images/Pelia3.jpg"),
//     image3: require("./images/Pelia4.jpg"),
//     image4: require("./images/Pelia5.jpg"),
//     image5: require("./images/Pelia6.jpg"),
//     image6: require("./images/Pelia7.jpg"),
//     image7: require("./images/Pelia8.jpg"),
//     video: require("./videos/peliaVid.mp4"),
//   },
//   {
//     name: "SuperFoods",
//     image1: require("./images/SF1.jpg"),
//     image2: require("./images/SF2.jpg"),
//   },
//   {
//     name: "NFT_APP",
//     image1: require("./images/NFT1.jpg"),
//     image2: require("./images/NFT2.jpg"),
//     video: require("./videos/nftVid.mp4"),
//   },
// ];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mnqypdlj";
