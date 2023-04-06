import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import "./Profilephoto.css";
import { useState, useEffect } from "react";

const Profile = (props) => {
  const { fullName, bio, profession, handleName } = props;
// Ajout d'un state pour stocker le temps initial
  const [time, setTime] = useState(0);
  const [isProfileHidden, setIsProfileHidden] = useState(false);

  function startTimer() {
    setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }

  useEffect(() => {
    startTimer();
    return () => clearInterval(startTimer);
  }, []);

  function handleClick() {
    clearInterval(startTimer);
    setIsProfileHidden(!isProfileHidden);
    if (isProfileHidden) {
      setTime(0);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      {isProfileHidden ? (
        <Button onClick={handleClick} variant="primary">
          Show Profile
        </Button>
      ) : (
        <div id="x">
          <img className="roundedCircle" src="\Imag4.jpg" width="250" alt="" />
          {props.children}
          <h2>{fullName}</h2>
          <p>{bio}</p>
          <p>{profession}</p>
          <p>{`Time since component mounted: ${time} seconds`}</p>
          <Button onClick={handleClick} variant="danger">
          Masquer le profil
          </Button>
        </div>
      )}
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Profile.defaultProps = {
  fullName: "YASSINE BOUA",
  bio: "Développeur Full Stack.",
  profession: "Développeur Full Stack JavaScript",
};

export default Profile;

