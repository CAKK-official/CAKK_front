import Select from './Select'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import theme from '../../../assets/theme/MuiTheme'

export default {
  // / => hierachy
  title: 'Components/Select',
  component: Select,
  // decorators (Center)
  // decorators: [(story) => <Center>{story()}</Center>],

  // parameters
  parameters: {
    docs: {
      description: {
        component:
          'Material- UI와 비슷한 개념의 Select이며, 주로 메인페이지에서 장소를 검색할 때 사용된다. 현재 버전에서는 장소만 검색하기 때문에 Menu Item을 임의로 변경할 수 없다.',
      },
    },
  },
  // argTypes
  argTypes: {
    handleChange: {
      description: 'Select 아이템이 변경되면 현재 loc의 상태가 변경된다.',
      control: {
        action: 'on Change',
      },
    },
    loc: {
      type: { name: 'string', required: true },
      description: '현재 장소 (label)',
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => (
  <MuiThemeProvider theme={theme}>
    <Select {...args} />
  </MuiThemeProvider>
)

export const Basic = Template.bind({})
// Basic.args = {
//   primary: true,
//   children: 'Chip',
// }

// export const Clickable = Template2.bind({})
// Clickable.args = {
//   primary: true,
//   children: 'Chip',
// }
