/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Iaroslav (Eric) Samitov",
  title: "Hi all, I'm Eric",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1wJOtzBSDT9803wE5ixDaCSz55ifZrNI-/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/EricoHello",
  linkedin: "https://www.linkedin.com/in/eric-samitov/",
  gmail: "samitoveric24@gmail.com",
  //facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@samitoveric24",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Washington, Bothell",
      logo: require("./assets/images/UWBlogo.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "September 2023 - March 2025",
      desc: "First Generation Graduate - Participated in the research of Robotics Club and published 3 projects.",
      descBullets: [
        "Learn2Code a Web-Based Coding Study Platform.",
        "Faculty Connect a Web-Based Faculty Availability Monitor.",
        "APLAS an AI-powered Learning Assistant System."
      ]
    },
    {
      schoolName: "Bellevue College",
      logo: require("./assets/images/BClogo.png"),
      subHeader: "Associate of Arts and Sciences",
      duration: "September 2021 - August 2023",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Volunteered as a Note Taker at Disability Center.",
        "Participated in the Robotics Club."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Technician",
      company: "Kaiser Permanente",
      companylogo: require("./assets/images/KPlogo.png"),
      date: "March 2025 – Present",
      desc: "Replaced and deployed over 300+ end-user devices across multiple hospital departments, ensuring zero data loss and minimal workflow disruption.",
      descBullets: [
        "Configured and imaged laptops/desktops using Microsoft SCCM and Active Directory; reduced setup time by 35%.",
        "Created and used custom scripts in PowerShell to automate routine cleanup tasks, cutting manual work by 2 hours per device."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Summit Transportation",
      companylogo: require("./assets/images/SummitTlogo.png"),
      date: "May 2024 – Feb 2025",
      desc: "Built a Python script that parses fuel logs and matches them with GPS routes to detect anomalies, reducing fraud by 10%.",
      descBullets: [
        "Developed a web-based load scheduling dashboard using React and Firebase, improving dispatcher visibility.",
        "Automated rate sheet uploads to the TMS via REST API, reducing manual entry by 80%."
      ]
    },
    {
      role: "Advance Repair Agent",
      company: "Geek Squad @Best Buy",
      companylogo: require("./assets/images/GSlogo.png"),
      date: "Sep 2022 – May 2024",
      desc: "Diagnosed and repaired of over 10,000 of computers and mobile devices.",
      descBullets: [
        "Achieved a 4.7/5 customer satisfaction rating, surpassing the company goal of 4.6.",
        "Onboarded and mentored dozens of new team members, accelerating their proficiency."
      ]
    },
    {
      role: "Lifeguard",
      company: "Renton City",
      companylogo: require("./assets/images/RentonLogo.png"),
      date: "May 2021 – Aug 2022",
      desc: "Monitored pool and beach areas to ensure safety of guests, responding to emergencies with CPR and first aid as trained."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Mobile App Coming Soon",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Learn2Code.png"),
      projectName: "Learn2Code",
      projectDesc:
        "It’s a lightweight web app built with React and Node.js that helps beginners practice coding concepts.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/EricoHello/Team5"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "CompTIA A+",
      subtitle:
        "CompTIA A+ is the industry standard for establishing a career in IT.",
      image: require("./assets/images/comptiaLogo.png"),
      imageAlt: "CompTIA A+ Logo",
      footerLink: [
        {
          name: "Certification Coming Soon",
          url: ""
        },
        {
          name: "Award Letter Coming Soon",
          url: ""
        }
      ]
    },
    {
      title: "Google AI Essential",
      subtitle:
        "Google AI Essentials is a course that teaches the fundamentals of AI and machine learning.",
      image: require("./assets/images/googleAI.jpeg"),
      imageAlt: "Google AI Essentials Logo",
      footerLink: [
        {
          name: "Certification Cooming Soon",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+425-503-1987",
  email_address: "samitoveric24@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
