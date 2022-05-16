import Chip from './Chip'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ExpandOutlined } from '@mui/icons-material'

export default {
  // / => hierachy
  title: 'Components/Chip',
  component: Chip,
  // decorators (Center)
  // decorators: [(story) => <Center>{story()}</Center>],

  // parameters
  parameters: {
    docs: {
      description: {
        component:
          'Material- UI와 비슷한 개념의 버튼이며, 주로 메인페이지에서 장소를 검색하거나 카테고리를 검색할 때 사용되는 버튼의 종류이다.',
      },
    },
  },
  // argTypes
  argTypes: {
    primary: {
      type: { name: 'boolean', required: true },
      description: 'primary/secondary',
    },
    onClick: {
      control: {
        action: 'clicked',
      },
      description: 'Chip을 클릭할 때 실행되는 EventHandler',
    },
    onDelete: {
      control: {
        action: 'deleted',
      },
      description: 'Chip에 X마크를 생성하며, 클릭시 실행시키는 EventHandler',
    },
  },
} as ComponentMeta<typeof Chip>

const Template1: ComponentStory<typeof Chip> = ({ primary, children }) => (
  <div style={{ width: '10%' }}>
    <Chip primary={primary}>{children}</Chip>
  </div>
)

const Template2: ComponentStory<typeof Chip> = (args) => (
  <div style={{ width: '10%' }}>
    <Chip {...args}>{args.children}</Chip>
  </div>
)

export const Basic = Template1.bind({})
Basic.args = {
  primary: true,
  children: 'Chip',
}

export const Clickable = Template2.bind({})
Clickable.args = {
  primary: true,
  children: 'Chip',
}
