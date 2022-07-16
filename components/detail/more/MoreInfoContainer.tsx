import * as Styled from './style'
import ReactMarkdwon from 'react-markdown'

interface MarkdownInterface {
  source: string
}

const MoreInfoContainer: React.FC<MarkdownInterface> = ({ source }) => {
  return (
    <Styled.MoreInfoContainer>
      <ReactMarkdwon
        components={{
          h3: ({ children }) => (
            <div className="title-wrapper">
              <div className="bulletpoint"></div>
              <h3>{children}</h3>
            </div>
          ),
          p: ({ children }) => (
            <div className="content-wrapper">
              <div className="timeline"></div>
              <div className="content">{children}</div>
            </div>
          ),
          ul: ({ children }) => (
            <div className="content-wrapper">
              <div className="timeline"></div>
              <div className="content">{children}</div>
            </div>
          ),
        }}
      >
        {source}
      </ReactMarkdwon>
    </Styled.MoreInfoContainer>
  )
}

export default MoreInfoContainer
