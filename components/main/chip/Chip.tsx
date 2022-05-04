import { css } from '@emotion/react'
import theme from '../../../assets/theme/theme'
import Icon from '../../icon'
import * as Styled from './style'

interface ChipInterface {
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onDelete?: React.MouseEventHandler<HTMLDivElement>
  children: React.ReactNode
  primary: boolean
}

const Chip: React.FC<ChipInterface> = (props) => {
  return (
    <Styled.Chip
      primary={props.primary}
      onDelete={props.onDelete !== undefined ? true : false}
      onClick={props.onClick ? props.onClick : undefined}
    >
      <span>{props.children}</span>
      {props.onDelete && (
        <div className="icon-wrapper" onClick={props.onDelete}>
          <Icon
            name="cross"
            width={10}
            height={11}
            color={theme.colors.primary}
          />
        </div>
      )}
    </Styled.Chip>
  )
}

export default Chip
