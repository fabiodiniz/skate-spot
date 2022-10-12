import { Image } from 'react-native'
import styled from 'styled-components/native'

const BackgroundMolecule: React.FC = props => {
  return (
    <StyledView testID="BackgroundMolecule" {...props}>
      <StyledImage
        style={{ flex: 1 }}
        source={require('auth/presentation/statics/background.png')}
      />
    </StyledView>
  )
}

const StyledImage = styled(Image)`
  align-items: center;
  width: 100%;
`

const StyledView = styled.View`
  width: 100%;
  height: 100%;
  align-items: stretch;
`

export default BackgroundMolecule
