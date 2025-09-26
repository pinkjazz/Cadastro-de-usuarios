import styled from 'styled-components'




export const Title = styled.h2`
  color: #ff548f ;
  font-size: 38px;
  font-weight: 600;
  margin: 25px 0;
  text-align: center;
  text-shadow: 2px 2px 9px rgba(255, 255, 255, 0.69);`


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;`

export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;
`

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #abe6fdff ;
    background-color: #63d3ff ;
    padding: 12px 20px;
    outline: none;
    width: 100%;
    margin-top: 2px;
`
export const InputLabel = styled.label`
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    


    span{
      color: #ee2b1eff;
      font-weight: bold;
    }
`


// Note: The Button component is imported from src/components/Button/styles.js
export const SuccessMessage = styled.p`
  color: #ff548f ;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;
