import styled from "styled-components";

const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex: column;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;

const Main = ({
  title = "React Avançado",
  description = "Typescript, ReactJS, NextJS e Styled Components"
}) => (
  <Wrapper>
    <Logo
      src="img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Illustration
      src="img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </Wrapper>
);

export default Main;
