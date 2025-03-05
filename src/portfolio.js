/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Chandan Kondapuram",
  logo_name: "CK",
  nickname: "Chandu",
  full_name: "Chandan Kondapuram",
  subTitle: "Data Scientist, Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1LYFi6PYaydIYOz5RUeqyepIpeaKqAVfZ/view?usp=drive_link",
  mail: "mailto:chandanmudhiraj@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Chandan-Kondapuram",
  linkedin: "https://www.linkedin.com/in/chandan-kondapuram/",
  gmail: "chandanmudhiraj@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://x.com/Chandan49581626",
  instagram: "https://www.instagram.com/chandan_kondapuram/",
};

const skills = {
  data: [
    {
      title: "Data Scientist",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Expertise in developing Machine learning models, specializing in Natural Language Processing (NLP)",
        "⚡ Certified in AI and Machine Learning by deeplearning.ai and Stanford Online",
        "⚡ Completed 5+ projects, applying data-driven solutions across various domains",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },

    // {
    //   title: "React Developer",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive website front end using ReactJS",
    //     "⚡ Developed reusable components and optimized performance for scalable solutions",
    //     "⚡ Collaborated with cross-functional teams to integrate frontend features with backend services and deliver high-quality web solutions",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#FFFFFF",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "PHP",
    //       fontAwesomeClassname: "simple-icons:php",
    //       style: {
    //         color: "#7377AD",
    //       },
    //     },
    //     {
    //       skillName: "Java",
    //       fontAwesomeClassname: "simple-icons:java",
    //       style: {
    //         color: "#f89820",
    //       },
    //     },

    //     {
    //       skillName: "Visual Basic",
    //       fontAwesomeClassname: "simple-icons:dot-net",
    //       style: {
    //         color: "#029FCE",
    //       },
    //     },

    //     {
    //       skillName: "C",
    //       fontAwesomeClassname: "simple-icons:c",
    //       style: {
    //         color: "#E94E32",
    //       },
    //     },
    //     {
    //       skillName: "C++",
    //       fontAwesomeClassname: "simple-icons:cplusplus",
    //       style: {
    //         color: "#E94E32",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },

    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "simple-icons:node-dot-js",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#439743",
    //       },
    //     },

    //     {
    //       skillName: "MySQL",
    //       fontAwesomeClassname: "simple-icons:mysql",
    //       style: {
    //         color: "#4479A1",
    //       },
    //     },

    //     {
    //       skillName: "Wordpress",
    //       fontAwesomeClassname: "simple-icons:wordpress",
    //       style: {
    //         color: "#207297",
    //       },
    //     },

    //     {
    //       skillName: "Git",
    //       fontAwesomeClassname: "simple-icons:git",
    //       style: {
    //         color: "#E94E32",
    //       },
    //     },
    //   ],
    // },

    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Certified AWS Developer Associate and Cloud Practioner",
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Experience hosting and managing web apps on GCP and AWS",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Netlify",
    //       fontAwesomeClassname: "simple-icons:netlify",
    //       style: {
    //         color: "#38AFBB",
    //       },
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "simple-icons:heroku",
    //       style: {
    //         color: "#6863A6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kent State University",
      subtitle: "Masters in Data Science",
      logo_path: "Kent.png",
      alt_name: "DAL",
      duration: "2023 - Present",
      descriptions: [
        "⚡ Studying Data Science at Kent State University, focusing on advanced analytical techniques and machine learning",
        "⚡ Studied Applied Statistics, Advanced Database Systems, and Computational Learning to build a strong foundation in data-driven decision making",
        "⚡ Engaged in hands-on projects involving Data Mining, Visualization, and Predictive Modeling, applying skills to real-world data science problems",
      ],
      website_link: "https://www.kent.edu/",
    },
    {
      title: "BV Raju Institute of Technology",
      subtitle: "Bachelors in Information Technology",
      logo_path: "bvrit.jpg",
      alt_name: "SETI",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for ML/DS, Web Development, etc.",
        "⚡ I have implemented several projects.",
      ],
      website_link: "https://bvrit.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "AWS Developer Associate",
    //   subtitle: "Amazon Web Services",
    //   logo_path: "aws.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
    //   alt_name: "AWS",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "AWS Certified Cloud Practioner",
    //   subtitle: "Amazon Web Services",
    //   logo_path: "aws.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/8b2db191-702d-427c-91aa-0f926be447a6/public_url",
    //   alt_name: "AWS",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "Google Summer of Code 2019",
    //   subtitle: "Google / Sugar Labs",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "Google Code-In Student",
    //   subtitle: "2014-2017",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#1e70c1",
    // },
    // {
    //   title: "Google Summer of Code Mentor",
    //   subtitle: "2017 / 2018 / 2020",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffbfae",
    // },
    // {
    //   title: "Google Code-In Mentor",
    //   subtitle: "2017 / 2018 / 2019",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#b190b0",
    // },
    {
      title: "Python Programming",
      subtitle: "University of Michigan",
      logo_path: "Michigan.png",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
    {
      title: "AI For Everyone",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "What is Data Science",
      subtitle: "IBM",
      logo_path: "IBM.jpeg",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#000000",
    },

    {
      title: "Machine Learning Specilization",
      subtitle: "deeplearning.ai",
      logo_path: "stanford_logo.png",
      certificate_link: "",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    // {
    //   title: "Neural Networks and Deep Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
    //   alt_name: "Google",
    //   color_code: "#7A7A7A",
    // },
    // {
    //   title: "Improving Deep Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am actively seeking internship and co-op opportunities to apply my skills and gain hands-on industry experience. I have a strong passion for knowledge sharing and enjoy organizing workshops to help others learn and grow.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Data Scientist",
          company: "Visual Analytics Laboratory",
          company_url: "",
          logo_path: "Kent.png",
          duration: "Jan 2025 - Present",
          location: "Kent, Ohio",
          description: "",
          color: "#f10000",
        },
        {
          title: "Data & AI Researcher",
          company: "Advanced Telerobotics Research Laboratory",
          company_url: "https://www.atr.cs.kent.edu/",
          logo_path: "ATR.jpg",
          duration: "Jan 2025 - Present",
          location: "Kent, Ohio",
          description: "",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Analyst",
          company: "Virtusa",
          company_url: "https://www.virtusa.com/",
          logo_path: "virtusa.jpg",
          duration: "December 2022 - March 2023",
          location: "Work From Home",
          description:
            "I acquired hands-on experience in data analysis and predictive modeling. I analyzed large datasets to uncover trends, streamlining data preprocessing pipelines to improve efficiency by 30%. Collaborating with my team, I contributed to developing predictive models with an accuracy of 85%, enabling more effective business trend forecasting. This role enhanced my problem-solving skills and deepened my understanding of data-driven decision-making.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Leader",
          company: "Enlightening Lives",
          company_url:
            "https://mybvrit.com/2015/06/01/enlightening-lives-the-social-welfare-organization-of-bvrit/",
          logo_path: "lives.jpg",
          duration: "January 2021 - December 2022",
          location: " ",
          description:
            "I worked closely with individuals with disabilities, organizing activities and providing mentorship to foster their personal growth and inclusion. This role strengthened my leadership, communication, and empathy skills while making a positive impact in the community.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "chandu.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    // link: "",
    // avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    // {
    //   name: "CineScope",
    //   url: "https://github.com/Hrishi1999/CineScope",
    //   description: "An IMDB-like application.",
    //   languages: [
    //     {
    //       name: "React.js",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "TypeScript",
    //       iconifyClass: "devicon-typescript",
    //     },
    //     {
    //       name: "Node.js",
    //       iconifyClass: "devicon-nodejs",
    //     },
    //     {
    //       name: "Express.js",
    //       iconifyClass: "devicon-express",
    //     },
    //     {
    //       name: "MongoDB",
    //       iconifyClass: "logos-mongodb",
    //     },
    //   ],
    // },
    // {
    //   name: "RecipesAPI",
    //   url: "https://rapidapi.com/Hrishi1999/api/recipesapi2",
    //   description: "Get recipes for hundreds and thousands of dishes",
    //   languages: [
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //   ],
    // },
    // {
    //   name: "opPortfolio",
    //   url: "https://github.com/Hrishi1999/opPortfolio",
    //   description: "(This) A clean and full customizable portfolio template.",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    // },
    // {
    //   name: "Cab Security System",
    //   url: " ",
    //   description:
    //     "Driver drowsiness detection, profanity detection, violence detection, SMS alerts, cab driver tracking.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "OpenCV",
    //       iconifyClass: "logos-opencv",
    //     },
    //   ],
    // },
    // {
    //   name: "Lensinator",
    //   url: " ",
    //   description:
    //     "Published on Play Store back in 2017, crossed 55K downloads. Performed object detection, image captioning, OCR, handwritten OCR, barcode and QR code scanning with product information.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //   ],
    // },
    // {
    //   name: "Doorbell.io",
    //   url: "https://github.com/Hrishi1999/Doorbell.io",
    //   description:
    //     "A sound-classifier webapp made with ReactJS + TensorflowJS.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "TensorflowJS",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //   ],
    // },
    // {
    //   name: "Video Summarization",
    //   url: "https://github.com/Hrishi1999/Video-Summarization",
    //   description:
    //     "A video summarization webapp. A Flask-based backend which servers the Tensorflow model and a frontend made in ReactJS.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //   ],
    // },
    // {
    //   name: "Dashboard Activity",
    //   url: "https://github.com/Hrishi1999/Dashboard.activity",
    //   description:
    //     "Google Summer of Code project. A Dashboard activity for Sugar OS which tracks user activity so user can know where they use their most time and where they create most files.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Project Pickle",
    //   url: " ",
    //   description:
    //     "An app similar to Uber Eats but targeted for Gruhudhyogs (homemade pickles and products). Order management, live order tracking, rating and reviews system, etc.",
    //   languages: [
    //     {
    //       name: "Java",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Project Health Card",
    //   url: "",
    //   description:
    //     "An aadhard-card like utility card which keeps track of all your health records suchs as: Medicines, Lab Reports, Recent Diseases, Allergies, etc.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "MongoDB",
    //       iconifyClass: "logos-mongodb",
    //     },
    //   ],
    // },
    // {
    //   name: "Food Classifier",
    //   url: " ",
    //   description:
    //     "A food classifier app using tflite which classfier over 50 Indian Dishes.",
    //   languages: [
    //     {
    //       name: "Flutter",
    //       iconifyClass: "logos-flutter",
    //     },
    //     {
    //       name: "Dart",
    //       iconifyClass: "logos-dart",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "Image Clustering",
    //   url: " ",
    //   description:
    //     "A simple use of K-Means Clustering algorithm to sort images by automatically predicting number of classes. This can be used to clean an image dataset.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "Antivirus",
    //   url: " ",
    //   description:
    //     "A project from 2012. Made an antivirus with realtime scanning. Implemented by using comparison of md5 hashes.",
    //   languages: [
    //     {
    //       name: "Visual Basic",
    //       iconifyClass: "logos-dotnet",
    //     },
    //   ],
    // },
    // {
    //   name: "Sugar on Windows",
    //   url: " ",
    //   description:
    //     "Run and setup Sugar OS to be able to run on Windows using Windows Subsystem for Linux",
    //   languages: [
    //     {
    //       name: "Visual Basic",
    //       iconifyClass: "logos-dotnet",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Object + Face Detection",
    //   url: " ",
    //   description: "2017 project. Object detection + accurate face detection.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "OpenCV",
    //       iconifyClass: "logos-opencv",
    //     },
    //   ],
    // },
    // {
    //   name: "Image Captioning with Visual Attention",
    //   url: " ",
    //   description: "Ongoing. Used MSCOCO 2014/2017 for image captioning.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "DalSocial",
    //   url: " ",
    //   description:
    //     "An Android app to meet new people in the university, organize and join events. ",
    //   languages: [
    //     {
    //       name: "Kotlin",
    //       iconifyClass: "simple-icons:kotlin",
    //       color: "#F18E33",
    //     },
    //     {
    //       name: "Android",
    //       iconifyClass: "simple-icons:android",
    //       color: "#3DDC84",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //   ],
    // },
    // {
    //   name: "HalifaxFoodie",
    //   url: " ",
    //   description:
    //     "CSCI5410 Project. A multi-client recipe app for Halifax Foodies.",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "AWS",
    //       iconifyClass: "logos-aws",
    //     },
    //     {
    //       name: "Google Cloud",
    //       iconifyClass: "logos-google-cloud",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
