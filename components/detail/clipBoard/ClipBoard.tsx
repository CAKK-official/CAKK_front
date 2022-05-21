import Icon from '../../icon'
interface ClipBoardInterface {
  content: string
}
const ClipBoard: React.FC<ClipBoardInterface> = ({ content }) => {
  const handleCopy = (text) => {
    if (!document.queryCommandSupported('copy')) {
      return alert('복사하기가 지원되지 않는 브라우저입니다.')
    }

    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.top = '0'
    textarea.style.left = '0'
    textarea.style.position = 'fixed'
    // 흐름 3.
    document.body.appendChild(textarea)
    // focus() -> 사파리 브라우저 서포팅
    textarea.focus()
    // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
    textarea.select()
    // 흐름 4.
    document.execCommand('copy')
    // 흐름 5.
    document.body.removeChild(textarea)
    alert('클립보드에 복사되었습니다.')
  }

  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={() => {
        handleCopy(content)
      }}
    >
      <Icon name="icon_copy_fill" width={24} height={24} color="#E72E40" />
    </div>
  )
}
export default ClipBoard
