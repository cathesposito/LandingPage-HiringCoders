import styled from 'styled-components';
import PurpleFriday from '../../images/purplefriday.jpg';

export const Purple = styled.main`
  height: 100vh;
  background-image: url(${PurpleFriday});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  width: auto;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 50vh;
    padding-bottom: 2rem;
  }
`;

export const Login = styled.p`
  font-weight: 120;
  font-size: 50px;
  color: white;
  margin: 1rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  font-size: 50px;
  padding-top: 35px;

  @media (max-width: 1024px) {
    margin: 0.7rem 3.4375rem;
    width: 15%;
    font-size: 1.3rem;
  }
`;