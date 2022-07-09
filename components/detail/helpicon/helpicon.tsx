import * as Styled from './style'
import theme from '../../../assets/theme/theme'
import Icon from '../../icon'

const HelpIcon: React.FC = () => {
  return (
    <Styled.helpIconBox>
      <div>케이크크를</div>
      <Styled.redSpan>도와주세요!</Styled.redSpan>
      <Icon
        name="icon_cake_fill"
        width={62}
        height={62}
        color={theme.colors.red}
      />
    </Styled.helpIconBox>
  )
}
export default HelpIcon
