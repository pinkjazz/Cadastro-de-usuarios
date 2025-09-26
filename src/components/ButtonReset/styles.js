import styled from 'styled-components';

export const ButtonReset = styled.button`
  border: none;
  border-radius: 50%;
  background: linear-gradient(145deg, #9061c2, #be80ff);
  color: #ff548f ;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.66);
  font-size: 28px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 1px 2px 3px #ffc1d78f;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #ff548f ;
    color: #fff;
  }

  &:active {
    opacity: 0.7;
  }
`;
