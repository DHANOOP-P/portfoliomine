type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
     education: Required<TSection>;
     skills: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "DHANOOP P ",
    fullName: "DHANOOP P",
    email: "  dhanoopp6@mail.com",
  },
  hero: {
    name: "Dhanoop P",
    p: ["I develop  user", "interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a Results-driven Full Stack Developer with hands-on experience in developing scalable web applications using MERN Stack technologies
      including React.js, Node.js, Express.js, and MongoDB. Skilled in frontend and backend development, RESTful API development,
      authentication and authorization, database management, responsive UI design, and state management. Experienced in integrating
      payment gateways, cloud services, and modern web technologies to build secure and user-friendly applications. Strong problem-solving
      abilities with a passion for software engineering, clean code practices, performance optimization, and continuous learning.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
    education: {
  p: "Where I studied",
  h2: "Education.",
  content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
},
skills: {
  p: "What I work with",
  h2: "Technical Skills.",
    content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
},
  },
};
