import * as Styled from './style'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.FooterInnerBox>
        <strong>CAKK</strong> | <Link href="/about"> Brand Story</Link>
      </Styled.FooterInnerBox>
      <div>© 2022 CAKK all rights reserved</div>
      <Styled.Icon>
        <Link href="https://www.instagram.com/cakk_site/" target="_blank">
          <InstagramIcon />
        </Link>
      </Styled.Icon>
    </Styled.Footer>
  )
}

export default Footer
