import Typewriter from 'typewriter-effect';
import profilePictureHero from '../../img/profile-picture-5.png';
import './HeroProfile.css';

import { useTheme } from '../../context/ThemeContext';

interface HeroProfileprops {}

export const HeroProfile = ({ ...props }: HeroProfileprops) => {
  const { activeTheme } = useTheme();
  return (
    <>
      <div className="hero-profile-container">
        <div className="hero-profile">
          <img src={profilePictureHero} alt="YangYi Hao Profile" />
          <p>Hey there I'm,</p>
          <h1>YangYi Hao</h1>
          <Typewriter
            options={{
              strings: [
                'Full Stack Software Developer',
                'Software Engineer',
                'Scrum Master',
                'devotee',
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="hero-profile-tagline">
            Building websites, apps is my goal, intention and pleasure
          </p>
          <a
            href="https://github.com/tiger-eagle"
            target="_blank"
            rel="noopener noreferrer"
            className={
              activeTheme === 'light'
                ? 'hero-profile-button-light-theme'
                : 'hero-profile-button-dark-theme'
            }
          >
            Find me on the future work with me
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroProfile;
