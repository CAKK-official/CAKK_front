import React from 'react'
import ClipBoard from '../clipBoard/ClipBoard'
import styled from '@emotion/styled'
import Icon from '../../icon'
import { SVGIconType } from '../../icon/Icon'
import theme from '../../../assets/theme/theme'

interface InfoBoxInterface {
  title: string
  sub: string
  canCopy?: boolean
  iconName: SVGIconType
}
const InfoBox: React.FC<InfoBoxInterface> = ({
  iconName,
  title,
  sub,
  canCopy,
}) => {
  return (
    <InfoBoxDiv>
      <div>
        <div className="title-wrapper">
          <Icon
            name={iconName}
            width={24}
            height={24}
            color={theme.colors.black}
          />
          <div className="title">{title}</div>
        </div>
        <div className="subtitle-wrapper">
          <div>{sub ? sub : '정보가 없습니다'}</div>
        </div>
      </div>
      <div>{canCopy ? <ClipBoard content={sub} /> : ''}</div>
    </InfoBoxDiv>
  )
}
const InfoBoxDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  padding: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.A20};
  }

  .title-wrapper {
    display: flex;
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
    font-size: 16px;
    .title {
      margin-left: 0.75rem;
    }
  }

  .subtitle-wrapper {
    margin-top: 1rem;
    word-break: keep-all;
  }
`
export default InfoBox
