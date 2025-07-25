import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Keyframes for Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


// Styled Components
const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgb(25, 22, 60); /* Dark violet for header */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: rgb(206, 113, 105); /* New highlight color */
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;

  a {
    color: rgb(206, 113, 105); /* New highlight color */
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    position: relative;
    transition: color 0.3s;

    &:hover {
      color: #ffffff; /* Hover effect */
    }
  }
`;





const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: rgb(25, 22, 60); /* Consistent background with header */
  color: #ffffff;
`;

const HeroContent = styled.div`
  max-width: 800px;
  animation: ${fadeIn} 2s ease-out;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: rgb(206, 113, 105); /* New highlight color */
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #e0e7ff; /* Light text for readability */
  }
`;



const Button = styled.button`
  padding: 1rem 3rem;
  font-size: 1.2rem;
  color: #ffffff;
  background: linear-gradient(45deg, #f59e0b, #d97706);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;


const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background: rgb(25, 22, 60); /* Same background */
  color: #ffffff;

  p {
    margin: 0;
    opacity: 0.8;
  }
`;



// Main Component
export const LandingPage = () => {
    const navigate=useNavigate();
  return (
    <>
      {/* Navigation Bar */}
      <Navbar>
        <Logo>Placement Pulse</Logo>
        <NavLinks>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/login"}>Login</Link></li>
          <li><Link to={"/register"}>Signup</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
         
        </NavLinks>
      </Navbar>

      {/* Hero Section */}
      <HeroSection id="home">
        <HeroContent>
          <h1>Welcome to Placement Pulse</h1>
          <p>Revolutionizing your placement management with style and precision.</p>
          <Button onClick={()=>navigate('/login')}>Get Started</Button>
        </HeroContent>
      </HeroSection>

      

      {/* Footer */}
      <Footer>
        <p>&copy; 2024 Placement Pulse. All rights reserved.</p>
      </Footer>
    </>
  );
};