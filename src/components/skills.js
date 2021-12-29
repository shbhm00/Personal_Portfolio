import { Avatar, Card } from "@mui/material";
import SkillSet from "./skill";
const Skill = () => {
  return (
    <div className="skill-wrapper">
      <div>
        <h1 id="skill" className="skill-heading">
          Professional Skillset
        </h1>
      </div>
      <div>
        <SkillSet />
      </div>
    </div>
  );
};
export default Skill;
