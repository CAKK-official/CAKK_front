import BannerContainer from './BannerContainer'
// import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import theme from '../../../assets/theme/theme'

export default {
  // / => hierachy
  title: 'Components/BannerContainer',
  component: BannerContainer,
  // decorators (Center)
  // decorators: [(story) => <Center>{story()}</Center>],

  // parameters
  parameters: {
    docs: {
      description: {
        component: 'Button Component for user interaction',
      },
    },
  },
} as ComponentMeta<typeof BannerContainer>

export const Banner = () => (
  <ThemeProvider theme={theme}>
    <BannerContainer />
  </ThemeProvider>
)

// export const Primary = () => <Chip primary>Primary</Chip>;

// ARGS !
// Args point seems more appropriate for storybook purpose
// reduces unique code
// reuse args from another story

// export const Primary = Template.bind({})
// Primary.args = {
//   primary: true,
//   children: 'Chip',
// }

// export const Secondary = Template.bind({})
// Secondary.args = {
//   primary: false,
//   children: 'Chip',
// }

// export const SecondaryA = Template.bind({});
// SecondaryA.args = {
//   variant: "secondary",
//   children: "Secondary Args",
// };

// export const LongPrimaryA = Template.bind({});
// LongPrimaryA.args = {
//   ...PrimaryA.args,
//   children: "Long Primary Args",
//   label: "Long Primary A args",
// };
// LongPrimaryA.parameters = {
//   docs: {
//     description: {
//       story: "Some story **markdown**",
//     },
//   },
// };
