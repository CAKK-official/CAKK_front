import styled from '@emotion/styled'
import theme from '../../../assets/theme/theme'

export const Chip = styled.div<{ primary: boolean; handleDelete?: boolean }>`
  cursor: pointer;
  user-select: none; /* standard syntax */
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
  margin: 10px 12px;
  padding: 10px 15px;
  /* border: 1px solid ${(props) =>
    props.primary ? theme.colors.black : 'white'}; */
  border: 1px solid ${({ theme }) => theme.colors.gray.A80};
  background-color: ${(props) =>
    props.primary ? theme.colors.black : 'white'};
  border-radius: 10px;
  color: ${(props) => (props.primary ? theme.colors.white : '#7d756d')};
  display: flex;
  justify-content: ${(props) =>
    props.handleDelete ? 'space-between' : 'center'};
  align-items: center;

  span {
    margin-left: ${(props) => (props.handleDelete ? '0.4rem' : '0')};
  }
  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.4rem;
  }
`
