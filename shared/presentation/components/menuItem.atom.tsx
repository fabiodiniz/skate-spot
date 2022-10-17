import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  active?: boolean
  label: string
  onPress?: () => void
}

const MenuItemAtom: React.FC<Props> = props => {
  return (
    <StyledView testID="MenuItemAtom" {...props} onPress={props.onPress}>
      <StyledTextContainer active={props.active}>
        <StyledText active={props.active}>{props.label}</StyledText>
      </StyledTextContainer>
    </StyledView>
  )
}

const StyledView = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.Text`
  color: white;
  font-size: 18px;
  font-family: 'RobotoSlab_900Black';
  border-bottom: 3px solid white;
`

const StyledTextContainer = styled.View<{ active?: boolean }>`
  padding-bottom: 4px;
  ${props =>
    props.active && 'border-bottom-width: 2px; border-bottom-color: white;'};
`

export default MenuItemAtom
