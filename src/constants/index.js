import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Backend developer with an year of experience, specializing in building scalable and robust web applications. Proficient in leveraging both front-end technologies like React and back-end technologies like Node.js, MongoDB, MySQL, and PostgreSQL, I create dynamic, efficient solutions. With a strong understanding of RESTful APIs, database management, and deployment processes, I am committed to staying updated with the latest trends and contributing to innovative projects that deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With an year of professional experience, I have worked with a variety of technologies, including React, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy Travelling, Sports, Photography, Fitness & Music.`;

export const EXPERIENCES = [
  {
    year: "Sept 2024 - Present",
    role: "Trainee Software Engineer",
    company: "Juego Studios Pvt. Ltd.",
    description: `In my role as a backend developer using C# and ASP.NET, I focus on building and maintaining RESTful APIs to support various gaming functionalities. I work closely with frontend developers to seamlessly integrate backend services, ensuring a smooth user experience. Additionally, I optimize SQL queries for efficient data retrieval and conduct peer code reviews to maintain high code quality and adhere to best practices.`,
    technologies: [ "C#", "ASP.NET", "MySQL", "JavaScript", "Express.js", "React.js", "Redis", "mongoDB"],
  },
  {
    year: "Feb 2024 - August 2024",
    role: "Intern Programmer",
    company: "Juego Studios Pvt. Ltd.",
    description: `I worked on developing user management and real-time applications, including building a User Management System with features like authentication, registration, password hashing, and session management using Node.js, ExpressJS, Docker, MongoDB, Socket.io, and JWT. Additionally, I developed a real-time chat application using Socket.io. I also contributed to internal projects and a company-developed framework to enhance overall development efficiency.`,
    technologies: ["C#", "JavaScript", "MySQL", "Express.js", "Node.js", "Socket.io"],
  }
];

export const PROJECTS = [
  {
    title: "User Management System",
    image: project1,
    description:
      "Developed a user management system with authentication, registration, password hashing, and session management using Docker, MySQL, Socket.io, and JWT.",
    technologies: ["JavaScript", "Express.js", "HTML", "CSS", "Node.js", "MySQL"],
  },
  {
    title: "Cyberbullying Detection System",
    image: project2,
    description:
      "Built a cyberbullying detection system using Python for backend and React for frontend, leveraging BERT and ResNet50 models to analyze video content and detect bullying.",
    technologies: ["Python", "React.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["JavaScript", "TailwindCSS", "React", "Vite", "Framer Motion"],
  },
  {
    title: "Disaster Management System (DBMS Project)",
    image: project4,
    description:
      "Designed a disaster management database system using Java and MySQL.",
    technologies: ["Java", "MySQL"],
  },
  {
    title: "Helping Hands (A Disaster Safety Application)",
    image: project1,
    description:
      "Disaster forecasting, evacuation assistance, and volunteer coordination for affected individuals.",
    technologies: ["Java", "Android Studio", "Firebase"],
  },
];

export const CONTACT = {
  address: "Karnataka, Dakshina Kannada, Sullia-574239",
  phoneNo: "9108019265",
  email: "jaideepchinnu3@gmail.com",
};
