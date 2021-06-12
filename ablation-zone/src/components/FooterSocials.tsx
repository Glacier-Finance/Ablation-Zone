import styled from "styled-components";
import { Twitter } from '@styled-icons/bootstrap/Twitter'
import { Discord } from '@styled-icons/bootstrap/Discord'
import { Telegram } from '@styled-icons/boxicons-logos/Telegram'
import { Medium } from '@styled-icons/fa-brands/Medium'
import { Github } from '@styled-icons/bootstrap/Github';

const StyledTwitterIcon = styled(Twitter)`
  color: white;
  width: 50px;
  height: 50px;
  padding: 5px;
  
`;

const StyledDiscordIcon = styled(Discord)`
  color: white;  
  width: 50px;
  height: 50px;
  padding: 5px;

`;

const StyledTelegramIcon = styled(Telegram)`
  color: white;
  width: 50px;
  height: 50px;
  padding: 5px;

`;

const StyledMediumIcon = styled(Medium)`
  color: white;
  width: 50px;
  height: 50px;
  padding: 5px;

`;

const StyledGithubIcon = styled(Github)`
  color: white;
  width: 50px;
  height: 50px;
  padding: 5px;

`;

const Box = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    top: 50%;
    text-align: center;

`;

function FooterSocials() {
    return (
            <Box>
                <a href="https://google.com"><StyledTwitterIcon /></a>
                <a href="https://google.com"><StyledDiscordIcon /></a>
                <a href="https://google.com"><StyledTelegramIcon /></a>
                <a href="https://google.com"><StyledMediumIcon /></a>
                <a href="https://google.com"><StyledGithubIcon /></a>
            </Box>
  );
}

export default FooterSocials;
