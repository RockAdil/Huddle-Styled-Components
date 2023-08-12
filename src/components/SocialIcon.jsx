import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcon } from './styles/SocialIcon.styled';

const SocialIcon = () => {
  return (
    <StyledSocialIcon>
      <li>
        <a href='https://www.facebook.com/'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://twitter.com/'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/'>
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcon>
  );
};

export default SocialIcon;
