import "./styles.css";

const profile = {
  name: "Brandon Kitt",
  imageUrl: "./image.png",
  desc: "Studying developer and student at Udemy. When not coding or preparing a course, I like to play board games, computer games and tinker",
  skills: [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA",
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D",
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF",
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33",
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB",
    },
    {
      skill: "Svelte",
      level: "beginner",
      color: "#FF3B00",
    },
  ],
};

function Avatar({ src }) {
  return <img className="avatar" src={src} />;
}

function Header({ name }) {
  return <h1>{name}</h1>;
}

function Description({ desc }) {
  return <span>{desc}</span>;
}

function Skills({ skillsArr }) {
  return (
    <div className="skill-list">
      {skillsArr.map((skillObj, index) => (
        <Skill key={index} skillObj={skillObj} />
      ))}
    </div>
  );
}

function getLevelIcon(level) {
  if (level === "beginner") {
    return "😳";
  } else if (level === "intermediate") {
    return "👍";
  } else if (level === "advanced") {
    return "💪";
  } else {
    return "🚫";
  }
}

function Skill({ skillObj: { skill, level, color } }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      {skill} {getLevelIcon(level)}
    </div>
  );
}

export default function App() {
  const { name, desc, imageUrl, skills } = profile;

  return (
    <div className="card">
      <Avatar src={imageUrl} />
      <div className="data">
        <Header name={name} />
        <Description desc={desc} />
        <Skills skillsArr={skills} />
      </div>
    </div>
  );
}
