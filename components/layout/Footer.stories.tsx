import Footer from './Footer'

// import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import theme from '../../assets/theme/theme'

export default {
  title: 'Page/Footer',
  component: Footer,

  // parameters
  parameters: {
    docs: {
      description: {
        component: '전체 페이지에 있는 Footer',
      },
    },
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => (
  <ThemeProvider theme={theme}>
    <Footer />
  </ThemeProvider>
)

export const Basic = Template.bind({})
