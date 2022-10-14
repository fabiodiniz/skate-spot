import theme from 'shared/presentation/styles/settings/theme.style'

import { ReactNode } from 'react'
import { View, Text, TextInput, TextInputProps } from 'react-native'
import styled from 'styled-components/native'

type Props = { icon?: ReactNode } & TextInputProps

const InputAtom: React.FC<Props> = (props: Props) => {
  const spreadProps = { ...props, placeholder: undefined, style: undefined }

  return (
    <View testID="InputAtom" style={props.style}>
      {props.placeholder && (
        <StyledText style={{ marginBottom: 6 }}>{props.placeholder}</StyledText>
      )}
      <StyledTextInput {...spreadProps} />
      {props.icon && <StyledIcon>{props.icon}</StyledIcon>}
    </View>
  )
}

const StyledTextInput = styled(TextInput)<Props>`
  padding: 15px 12px;
  background-color: ${theme.colors.input};
  border-radius: 10px;
  color: white;
  font-family: 'RobotoSlab_500Medium';
  ${props => props.icon && 'padding-right: 40px;'}
`

const StyledText = styled(Text)`
  color: white;
  font-family: 'RobotoSlab_700Bold';
`

const StyledIcon = styled.View`
  position: absolute;
  right: 12px;
  top: 15px;
`

export default InputAtom
