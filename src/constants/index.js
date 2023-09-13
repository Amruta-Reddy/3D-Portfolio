import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    shellscipt,
    html,
    css,
    reactjs,
    tailwind,
    git,
    docker,
    threejs,
    crud,
    wordpress,
    tictactoe,
    calci,
    todolist,
    movies,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Devops Engineer",
      icon: backend,
    },
    {
      title: "Cloud Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "ShellScript",
      icon: shellscipt,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Junior DevOps Intern",
      company_name: "Synergina",
      iconBg: "#383E56",
      date: "Jun 2022 – Aug 2022",
      points: [
        "worked with a team to build and maintain the company’s infrastructure, automate deployments, and improve development workflows.",
        "My responsibilities included working with tools such as Git, Jenkins, and Ansible to deploy applications and manage servers.",
        "I gained hands‑on experience in cloud computing, containerization, and continuous integration and delivery.",
      ],
    },
    {
      title: "Python Intern",
      company_name: "Edugene",
      iconBg: "#383E56",
      date: "Sep 2022 – Nov 2022",
      points: [
        "worked on developing and implementing algorithms to analyze complex datasets.",
        "I leveraged my skills in data visualization to create impactful visual representations of the data, which enhanced the understanding of the insights gained from the analysis",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "CRUD",
      description:
        "It enables users to interact with a data store through the command line, allowing them to create new records, retrieve existing data, update records, and delete entries.",
      tags: [
        {
          name: "bash",
          color: "blue-text-gradient",
        },
        {
          name: "shellscripting",
          color: "green-text-gradient",
        },
        {
          name: "database",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_code_link: "https://github.com/Amruta-Reddy/CRUD---bash.git",
    },
    {
      name: "WordPress Website",
      description:
        " 'CodeFree' is a WordPress website dedicated to frontend and backend development, offering extensive resources on programming languages like JavaScript, Python, and more.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "learning",
          color: "green-text-gradient",
        },
        {
          name: "website",
          color: "pink-text-gradient",
        },
      ],
      image: wordpress,
      source_code_link: "https://codefree16.wordpress.com/",
    },
    {
      name: "MovieLand",
      description:
        "Designed and developed a dynamic Movieland web application using React, offering users an immersive cinematic experience with real-time movie information.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "vscode",
          color: "pink-text-gradient",
        },
      ],
      image: movies,
      source_code_link: "https://github.com/Amruta-Reddy/movieland.git",
    },
    {
      name: "Tic-Tac-Toe",
      description:
        "The gameboard updates in real-time as players make their moves, and the application determines the winner or declares a draw based on the game's rules.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "GUI",
          color: "green-text-gradient",
        },
        {
          name: "game",
          color: "pink-text-gradient",
        },
      ],
      image: tictactoe,
      source_code_link: "https://github.com/Amruta-Reddy/Tic-Ta-Toe.git",
    },
    {
      name: "To Do List",
      description:
        "The application offers a seamless experience for organizing daily tasks and improving productivity, making it a valuable tool for individuals seeking an efficient way to stay organized and focused.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "GUI",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: todolist,
      source_code_link: "https://github.com/Amruta-Reddy/to-do-list.git",
    },
    {
      name: "Calculator",
      description:
        "The calculator provides a user-friendly interface with buttons for numbers, operators, and a display screen to show the input and calculated results.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "GUI",
          color: "green-text-gradient",
        },
        {
          name: "vscode",
          color: "pink-text-gradient",
        },
      ],
      image: calci,
      source_code_link: "https://github.com/Amruta-Reddy/Calculator.git",
    },
  ];
  
  export { services, technologies, experiences, projects };