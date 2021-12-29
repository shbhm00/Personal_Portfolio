import { Avatar, Card } from "@mui/material";
import SkillSet from "./skill";
const Skill = () => {
  return (
    <div id="skill" className="skill-wrapper">
      <div>
        <h1 className="skill-heading">Professional Skillset</h1>
      </div>
      <div className="skill-wrapper-parent">
        <SkillSet />
      </div>
    </div>
  );
};
export default Skill;
