import * as Styled from './style'
import theme from '../../../assets/theme/theme'
import Icon from '../../icon'

const HelpIcon: React.FC = () => {
  return (
    <a
      target="_blank"
      href="https://forms.gle/UKDrWbytYf32cEAZ9"
      rel="noopener noreferrer"
    >
      <Styled.helpIconBox>
        <div>케이크크를</div>
        <Styled.redSpan>도와주세요!</Styled.redSpan>
        <Icon
          name="icon_cake_fill"
          width={52}
          height={52}
          color={theme.colors.red}
        />
      </Styled.helpIconBox>
    </a>
  )
}
export default HelpIcon
