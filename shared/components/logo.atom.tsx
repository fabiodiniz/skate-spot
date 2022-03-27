import { Image, ImageProps, ImageSourcePropType } from 'react-native'

type Props = Omit<ImageProps, 'source'> & {
  source?: ImageSourcePropType
}

const LogoAtom: React.FC<Props> = props => {
  return (
    <Image
      testID="LogoAtom"
      source={require('shared/statics/logo.png')}
      {...props}
    />
  )
}

export default LogoAtom
