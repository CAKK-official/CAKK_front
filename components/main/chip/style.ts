import styled from '@emotion/styled'

export const Chip = styled.div<{ primary: boolean; onDelete?: boolean }>`
  cursor: pointer;
  margin: 8px 12px;
  padding: 4px;
  box-shadow: 0px 3px 30px rgba(164, 164, 164, 0.15);
  border: 1px solid ${(props) => (props.primary ? '#e72d3f' : 'white')};
  background-color: ${(props) => (props.primary ? '#FEF6F4' : 'white')};
  border-radius: 19.5px;
  color: ${(props) => (props.primary ? '#e72d3f' : '#7d756d')};
  display: flex;
  justify-content: ${(props) => (props.onDelete ? 'space-between' : 'center')};
  align-items: center;

  span {
    margin-left: ${(props) => (props.onDelete ? '0.4rem' : '0')};
  }
  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.4rem;
  }
`
