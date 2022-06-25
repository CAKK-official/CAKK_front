import ItemGridContainer from './ItemGridContainer'

// import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import theme from '../../assets/theme/theme'

const toyData = [
  {
    id: 1,
    name: '키키네하우스',
    address: '송파구 오금로 130',
    img: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    name: '케키하우스',
    address: '백제 고분로 41길 35',
    img: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    name: '희스케이크',
    address: '백제고분로27길 26',
    img: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    name: '키키네하우스',
    address: '송파구 오금로 130',
    img: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    name: '케키하우스',
    address: '백제 고분로 41길 35',
    img: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    name: '희스케이크',
    address: '백제고분로27길 26',
    img: 'https://picsum.photos/200/300',
  },
]

export default {
  // / => hierachy
  title: 'Page/Item Grid Container',
  component: ItemGridContainer,
  // decorators (Center)
  // decorators: [(story) => <Center>{story()}</Center>],

  // parameters
  parameters: {
    docs: {
      description: {
        component:
          '케이크집의 데이터를 보여주는 그리드 형식의 컴포넌트, 주로 메인페이지에서 사용된다.',
      },
    },
  },

  argTypes: {
    row: {
      type: { name: 'number', required: true },
      description: '한 열에 존재하는 아이템의 갯 수',
    },
    ranking: {
      type: { name: 'boolean', required: false },
      description: '인기 순으로 정열되어있는 아이템은 이미지에 숫자를 포함한다',
    },
    itmes: {
      type: { name: 'array', required: true },
      description: '아이템의 정보',
    },
  },
} as ComponentMeta<typeof ItemGridContainer>

const Template: ComponentStory<typeof ItemGridContainer> = (args) => (
  <ThemeProvider theme={theme}>
    <ItemGridContainer
      row={args.row}
      ranking={args.ranking}
      items={args.items}
    />
  </ThemeProvider>
)

export const Basic = Template.bind({})
Basic.args = {
  row: 3,
  ranking: false,
}
