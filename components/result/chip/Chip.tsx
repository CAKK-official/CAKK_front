import theme from '../../../assets/theme/theme'
import Icon from '../../icon'
import * as Styled from './style'

interface ChipInterface {
  handleClick?: React.MouseEventHandler<HTMLDivElement>
  handleDelete?: React.MouseEventHandler<HTMLDivElement>
  children: React.ReactNode
  primary: boolean
}

const Chip: React.FC<ChipInterface> = (props) => {
  return (
    <Styled.Chip
      primary={props.primary}
      handleDelete={props.handleDelete !== undefined ? true : false}
      onClick={props.handleClick ? props.handleClick : undefined}
    >
      <span>{props.children}</span>
      {props.handleDelete && (
        <div className="icon-wrapper" onClick={props.handleDelete}>
          <Icon
            name="cross"
            width={10}
            height={11}
            color={theme.colors.white}
          />
        </div>
      )}
    </Styled.Chip>
  )
}

export default Chip
