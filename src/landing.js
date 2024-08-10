import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(135deg, #004d00, #99ff99);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Tagline = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Countdown = styled.div`
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  border-radius: 10px;
  margin-bottom: 3rem;
`;

const Content = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const Quote = styled.blockquote`
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 3rem;
`;

const CallToAction = styled.button`
  background-color: #005c00;
  color: white;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007300;
  }
`;

const LandingPage = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-31') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <Container>
      <Title>Shifting Solutions DAO</Title>
      <Tagline>Building a Sustainable Future with ReFi, Art, and Technology</Tagline>
      <Countdown>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</Countdown>
      <Content>
        Shifting Solutions DAO is reimagining the role of art and music in society, transforming them from mere expressions into powerful gateways for understanding the possibilities of Web3, regenerative finance (ReFi), and decentralized systems. 
        <br /><br />
        Through immersive festivals, AI-supported education, and collaborative ReFi projects, we are building a new societal framework where creativity and technology converge to empower communities. 
        <br /><br />
        As we grow, we’re planning to utilize platforms like DAObase.io to accelerate this movement and bring our shared vision to life.
      </Content>
      <CallToAction onClick={() => window.location.href = '#'}>Learn More</CallToAction>
      <Quote>“Only together can we achieve strength and create lasting impact.”</Quote>
    </Container>
  );
};

export default LandingPage;