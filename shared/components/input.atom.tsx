import theme from 'shared/styles/settings/theme.style'

import { View, Text, TextInput, TextInputProps } from 'react-native'
import styled from 'styled-components/native'

type Props = TextInputProps

const InputAtom: React.FC<Props> = (props: Props) => {
  const spreadProps = { ...props, placeholder: undefined, style: undefined }

  return (
    <View testID="InputAtom" style={props.style}>
      <StyledText style={{ marginBottom: 6 }}>{props.placeholder}</StyledText>
      <StyledTextInput {...spreadProps} />
    </View>
  )
}

const StyledTextInput = styled(TextInput)`
  padding: 15px 12px;
  background-color: ${theme.colors.input};
  border-radius: 10px;
  color: white;
  font-family: 'RobotoSlab_500Medium';
`

const StyledText = styled(Text)`
  color: white;
  font-family: 'RobotoSlab_700Bold';
`

export default InputAtom
