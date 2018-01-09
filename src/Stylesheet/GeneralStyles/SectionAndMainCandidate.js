import Background from '../../Resources/Images/StartBackground.png';
import GeneralBackground from '../../Resources/Images/GeneralBackground.png';
import ObstacleBackground from '../../Resources/Images/ObstacleBackground.png';
import ObstacleAnsBackground from '../../Resources/Images/ObstacleAnsBackground.png';

export const backgroundImage = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    position: "fixed"
};

export const obstacleBackground = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${ObstacleBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    position: "fixed"
};

export const obstacleAnsBackground = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${ObstacleAnsBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    position: "fixed"
};

export const sectionName = {
    position: "fixed",
    marginTop: 250,
    fontSize: 100,
    fontFamily: 'Cambria',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    color: 'white'
};