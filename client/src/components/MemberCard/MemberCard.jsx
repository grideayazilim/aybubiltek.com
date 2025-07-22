import {
  FaLinkedin,
  FaSquareGithub,
  FaSquareBehance,
  FaDribbble,
  FaPinterest,
} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import "./MemberCard.scss";
import AnimatedItem from "../AnimatedItem";

const MemberCard = ({ member, index }) => {
  return (
    <AnimatedItem hasInterval={true} motionIndex={index + 1} delay={0.8}>
      <div className="member-card">
        <div className="image-container">
          <img src={member.image} alt="member photo" />
        </div>

        <div className="member-info">
          <div className="subtitle">{member.position}</div>
          <p>{member.name}</p>
        </div>

        <div className="accounts">
          {member.linkedin && (
            <a
              href={member.linkedin}
              className="member-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          )}
          {member.gmail && (
            <a
              href={member.gmail}
              className="member-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGmail />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              className="member-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub />
            </a>
          )}
          {member.behance && (
            <a
              href={member.behance}
              className="member-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareBehance />
            </a>
          )}
          {member.dribble && (
            <a
              href={member.dribble}
              className="member-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDribbble />
            </a>
          )}
          {member.pinterest && (
            <a
              href={member.pinterest}
              className="member-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest />
            </a>
          )}
        </div>
      </div>
    </AnimatedItem>
  );
};

export default MemberCard;
