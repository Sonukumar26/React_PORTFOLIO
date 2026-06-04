import React, { useState } from 'react';
import { Link } from 'react-scroll'; 
import styled, { useTheme } from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const NavLogo = styled(Link)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
  background-color: transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.6s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + '99'};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ open }) => (open ? '1' : '0')};
  z-index: ${({ open }) => (open ? '1' : '-1')};
`;

const MobileMenuLinks = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
       <NavLogo to="about" smooth={true} duration={500}>
            <a
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                marginBottom: "20px",
                cursor: "pointer",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #854CE6, #6A5AF9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#fff",
                  boxShadow: "0 4px 15px rgba(133, 76, 230, 0.4)",
                }}
              >
                SK
              </div>

              <Span>Portfolio</Span>
            </a>
          </NavLogo>
        <MobileIcon onClick={() => setOpen(!open)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink to="about" smooth={true} duration={250}>About</NavLink>
          <NavLink to="skills" smooth={true} duration={250}>Skills</NavLink>
          <NavLink to="experience" smooth={true} duration={250}>Experience</NavLink>
          <NavLink to="projects" smooth={true} duration={250}>Projects</NavLink>
          <NavLink to="education" smooth={true} duration={250}>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github</GitHubButton>
           <GitHubButton
              href={Bio.linkedin}
              target="_blank"
              style={{ marginLeft: "12px" }}
            >
              LinkedIn
            </GitHubButton>
        </ButtonContainer>
      </NavContainer>
      <MobileMenu open={open}>
        <MobileMenuLinks to="about" smooth={true} duration={250} onClick={() => setOpen(false)}>About</MobileMenuLinks>
        <MobileMenuLinks to="skills" smooth={true} duration={250} onClick={() => setOpen(false)}>Skills</MobileMenuLinks>
        <MobileMenuLinks to="experience" smooth={true} duration={250} onClick={() => setOpen(false)}>Experience</MobileMenuLinks>
        <MobileMenuLinks to="projects" smooth={true} duration={250} onClick={() => setOpen(false)}>Projects</MobileMenuLinks>
        <MobileMenuLinks to="education" smooth={true} duration={250} onClick={() => setOpen(false)}>Education</MobileMenuLinks>
        <GitHubButton style={{ padding: '10px 16px', background: theme.primary, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github</GitHubButton>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
