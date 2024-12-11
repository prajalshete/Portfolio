import { motion } from "framer-motion";
import "../components/Home.css";

const Home = () => {
  return (
    <div className="home">
      
      <div className="home-content row">
       
        <div className="col-12 col-md-6">
          <motion.div
            className="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h1>I'm Prajal Shete</h1>
            <p>MERN Stack Developer</p>
          </motion.div>
        </div>

       
        <div className="col-12 col-md-6">
          <motion.div
            className="profile-image"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src="/Images/PRAJAL_Image.JPG" 
              alt="Profile"
            />
          </motion.div>
        </div>
      </div>

    
      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-item">
            <img
              src="/Images/javascript.png" alt="JavaScript"
            />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <img
              src="/Images/react.jpg" alt="React"
            />
            <p>React</p>
          </div>
          <div className="skill-item">
            <img
              src="/Images/node.png" alt="Node.js"
            />
            <p>Node.js</p>
          </div>
          <div className="skill-item">
            <img
              src="/Images/html.png" alt="HTML"
            />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <img
              src="/Images/css.png" alt="CSS"
            />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <img
              src="/Images/bootstrap.png" alt="Bootstrap"
            />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>

     
      <div className="education">
        <h2>Education</h2>
        <div className="education-container">
          <div className="education-item">
            <h3>Bachelor of Computer Science</h3>
            <p>DBATU University | Graduated: 2021</p>
            <p>Specialized in full-stack web development, focusing on MERN stack technologies.</p>
          </div>
          <div className="education-item">
            <h3>HSC</h3>
            <p>Purohit Kanya Prashala & Junior College, Sangli  | Graduated: 2017</p>
            <p>Completed high school with a focus on science and mathematics.</p>
          </div>
        </div>
      </div>

      
      <div className="experience">
        <h2>Experience</h2>
        <div className="experience-container">
          <div className="experience-item">
            <h3>MERN Stack Developer Intern</h3>
            <p>Scalefull technologies LLP | Jan 2024 - Present</p>
            <ul>
            <li>Assisted in building REST APIs using Node.js.</li>
              <li>Collaborated with the design team to implement responsive designs.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Front End Developer Intern</h3>
            <p>Rajyug IT Solutions | May 2023 - Dec 2023</p>
            <ul>
              
              <li>Developed user-friendly interfaces using React.js.</li>
              <li>Contributed to front-end development using JavaScript and Bootstrap.</li>
            </ul>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
