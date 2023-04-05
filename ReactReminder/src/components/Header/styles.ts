import styled from "styled-components";

export const Container = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;

  //width: 100vw; aqui bugou o header com isso ativado
  height: 10vh;
  padding: 0 4rem;

  background-color: var(--black-600);

  > p {
    color: var(--font-white);
  }
`;
