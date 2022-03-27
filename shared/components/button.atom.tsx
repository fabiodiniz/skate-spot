import {
  View,
  ButtonProps,
  TouchableOpacity,
  Text,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleProp,
  ViewStyle,
} from 'react-native'
import styled from 'styled-components/native'

type CustomProps = {
  color?: string
  textColor?: string
  disabled?: boolean
  flat?: boolean
  style?: StyleProp<ViewStyle>
}

type Props = ButtonProps & CustomProps

const ButtonAtom = (props: Props) => {
  const onPress = (ev: NativeSyntheticEvent<NativeTouchEvent>) => {
    props.onPress(ev)
  }

  const spreadProps = { ...props, onPress: null }

  return (
    <StyledTouchableOpacity onPress={onPress} disabled={props.disabled}>
      <StyledView testID="ButtonAtom" {...spreadProps}>
        <StyledText textColor={props.textColor} flat={props.flat}>
          {props.title}
        </StyledText>
      </StyledView>
    </StyledTouchableOpacity>
  )
}

const StyledTouchableOpacity = styled(TouchableOpacity)`
  border-radius: 50px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`

const StyledView = styled(View)<CustomProps>`
  padding: 16px 32px;
  background-color: ${props => {
    if (props.flat) return 'transparent'
    return props.color || '#FFF'
  }};
  align-items: center;
  border-radius: 50px;
  justify-content: center;
`

const StyledText = styled(Text)<CustomProps>`
  color: ${props => {
    if (props.flat) return '#FFF'
    return props.textColor || 'black'
  }};
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'RobotoSlab_700Bold';
  text-transform: none;
`

export default ButtonAtom
