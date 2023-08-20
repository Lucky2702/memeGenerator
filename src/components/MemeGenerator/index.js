import {Component} from 'react'
import {
  AppContainer,
  FormAndImageContainer,
  FormContainer,
  ImageViewContainer,
  Heading,
  CustomLabel,
  CustomInput,
  SelectElement,
  ButtonElement,
  OptionElement,
  TextElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    isDisplay: false,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
  }

  onChangeImageUrl = e => {
    this.setState({imageUrl: e.target.value})
  }

  onChangeTopText = e => {
    this.setState({topText: e.target.value})
  }

  onChangeBottomText = e => {
    this.setState({bottomText: e.target.value})
  }

  onChangeFontSize = e => {
    this.setState({fontSize: e.target.value})
  }

  onSubmitForm = e => {
    e.preventDefault()
    this.setState({isDisplay: true})
  }

  render() {
    const {isDisplay, imageUrl, topText, bottomText, fontSize} = this.state

    return (
      <AppContainer>
        <Heading>Meme Generator</Heading>
        <FormAndImageContainer>
          <FormContainer onSubmit={this.onSubmitForm}>
            <CustomLabel htmlFor="imgUrl">Image Url</CustomLabel>
            <CustomInput
              type="text"
              placeholder="Enter The Image Url"
              value={imageUrl}
              id="imgUrl"
              onChange={this.onChangeImageUrl}
            />
            <CustomLabel htmlFor="top-text">Top Text</CustomLabel>
            <CustomInput
              type="text"
              placeholder="Enter The Top Text"
              value={topText}
              id="top-text"
              onChange={this.onChangeTopText}
            />
            <CustomLabel htmlFor="bottom-text">Bottom Text</CustomLabel>
            <CustomInput
              type="text"
              placeholder="Enter The Bottom Text"
              value={bottomText}
              id="bottom-text"
              onChange={this.onChangeBottomText}
            />
            <CustomLabel htmlFor="select">Font Size</CustomLabel>
            <SelectElement
              value={fontSize}
              id="select"
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(eachOption => (
                <OptionElement value={eachOption.id} key={eachOption.id}>
                  {eachOption.displayText}
                </OptionElement>
              ))}
            </SelectElement>
            <ButtonElement type="submit">Generate</ButtonElement>
          </FormContainer>
          {isDisplay ? (
            <ImageViewContainer bgImage={imageUrl} data-testid="meme">
              <TextElement fontSize={fontSize}>{topText}</TextElement>
              <TextElement fontSize={fontSize}>{bottomText}</TextElement>
            </ImageViewContainer>
          ) : null}
        </FormAndImageContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
