// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`
export const FormAndImageContainer = styled.div`
  display: flex;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 20px;
  width: 500px;
  height: 700px;
`

export const ImageViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  height: 300px;
  width: 300px;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 36px;
  font-weight: 700;
  line-height: 1.8;
`

export const CustomLabel = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 18px;
  padding-bottom: 5px;
`
export const CustomInput = styled.input`
  color: #5a7184;
  font-family: 'Open Sans';
  font-size: 16px;
  border: 1px solid #5a7184;
  padding: 10px;
  width: 500px;
  border-radius: 8px;
  margin-bottom: 10px;
  outline: none;
`

export const SelectElement = styled.select`
  width: 500px;
  color: #1e293b;
  font-family: 'Open Sans';
  font-size: 20px;
  padding: 10px;
  border-radius: 8px;
  outline: none;
`

export const OptionElement = styled.option`
  color: #1e293b;
  font-family: 'Open Sans';
  font-size: 20px;
  padding: 10px;
`

export const ButtonElement = styled.button`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 700;
  background-color: #0b69ff;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  width: 200px;
  height: 50px;
  margin-top: 20px;
`
export const TextElement = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  text-align: center;
  font-size: ${props => props.fontSize}px;
`
