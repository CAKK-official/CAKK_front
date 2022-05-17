import Layout from './Layout'

// import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import theme from '../../assets/theme/theme'

export default {
  title: 'Page/Layout',
  component: Layout,

  // parameters
  parameters: {
    docs: {
      description: {
        component: '전체 페이지에 있는 Layout',
      },
    },
  },
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <main
        style={{
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        main goes here...
      </main>
    </Layout>
  </ThemeProvider>
)

export const Basic = Template.bind({})
