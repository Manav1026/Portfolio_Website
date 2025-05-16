import Header from "../components/Header";
import Footer from "../components/Footer";
import SkillBar from "../components/SkillBar";

const About = () => {
  const skills = [
    { skill: "JavaScript", level: 90 },
    { skill: "React.js", level: 85 },
    { skill: "Node.js", level: 80 },
    { skill: "Java", level: 75 },
    { skill: "MongoDB", level: 70 },
  ];

  return (
    <div>
      <Header />
      <main>
        <h2>About Me</h2>
        <p>
          Results-driven Software Developer with expertise in various
          technologies...
        </p>
        <h3>Skills</h3>
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.skill} level={skill.level} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default About;
