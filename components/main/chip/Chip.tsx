import { css } from '@emotion/react'

interface ChipInterface {
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onDelete?: React.MouseEventHandler<HTMLDivElement>
  children: React.ReactNode
  primary: boolean
}

const Chip: React.FC<ChipInterface> = (props) => {
  return (
    <div
      onClick={props.onClick ? props.onClick : undefined}
      css={css`
        ${props.onClick ? 'cursor: pointer;' : ''}
        margin: 8px 12px;
        padding: 4px;
        box-shadow: 0px 3px 30px rgba(164, 164, 164, 0.15);
        border: 1px solid ${props.primary ? '#e72d3f' : 'white'};
        background-color: ${props.primary ? '#FEF6F4' : 'white'};
        border-radius: 19.5px;
        color: ${props.primary ? '#e72d3f' : '#7d756d'};
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <span>{props.children}</span>
    </div>
  )
}

export default Chip
