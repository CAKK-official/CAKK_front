import { css } from '@emotion/react'
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
      onClick={props.onClick ? props.onClick : undefined}
    >
      <span>{props.children}</span>
    </Styled.Chip>
  )
}

export default Chip
