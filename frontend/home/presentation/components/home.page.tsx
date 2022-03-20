import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const HomePage: React.FC = () => {
  return (
    <StyledPage testID="HomePage">
      <StyledText>Página inicial</StyledText>
    </StyledPage>
  )
}

const StyledPage = styled(View)`
  padding: 100px;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #333;
`

const StyledText = styled(Text)`
  color: white;
`

export default HomePage
