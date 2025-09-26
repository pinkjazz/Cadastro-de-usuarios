import styled from "styled-components";


export const Titlelist = styled.h1`
  color: #ff548f;
  font-size: 35px;
  font-weight: 600;
  margin: 20px 0;
  text-align: center;
  text-shadow: 2px 2px 9px rgba(255, 255, 255, 0.69);
  `

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 40px 0;
  


  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`


export const CardUsers = styled.div`
  background-color: #be80ff;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  box-shadow: 1px 2px 3px #ffc1d78f;
  transition: box-shadow 0.3s ease , transform 0.3s ease;
  

  &:hover{
    box-shadow: 0 4px 25px rgba(230, 130, 230, 0.25);
    transform: translateY(-3px);
  }

  h3{
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 5px;
    text-transform: capitalize;
  }

  p{
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 3px;
   
  }

  `

export const TrashIcon = styled.img`
  cursor: pointer;
  height: 20px;
  margin-left: auto;
  margin-right: 6px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  
  &:hover{
    opacity: 0.8;

  }

  &:active{
    opacity: 0.5;
    transform: scale(0.95);
  }
    `

export const AvatarUsers = styled.img`
border: solid 3px #ff548f;
border-radius: 50%;
height: 60px;`

export const DeleteMessage = styled.p`
  color: #ff548f ;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;
