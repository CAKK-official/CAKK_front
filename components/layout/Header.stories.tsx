import Header from './Header'

// import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import theme from '../../assets/theme/theme'

export default {
  title: 'Page/Header',
  component: Header,

  // parameters
  parameters: {
    docs: {
      description: {
        component: '전체 페이지에 있는 Header',
      },
    },
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => (
  <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
)

export const Basic = Template.bind({})
