import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const cssInJs = () => {
  return <Title>css in js</Title>;
};

export default cssInJs;
