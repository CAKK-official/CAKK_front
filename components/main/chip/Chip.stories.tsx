import Chip from './Chip'
import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'

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
        component: 'Button Component for user interaction',
      },
    },
  },
} as ComponentMeta<typeof Chip>

// export const Primary = () => <Chip primary>Primary</Chip>;

// ARGS !
// Args point seems more appropriate for storybook purpose
// reduces unique code
// reuse args from another story

export const Primary = () => (
  <div style={{ width: '20%' }}>
    <Chip primary onClick={action('onClick action')}>
      Chip
    </Chip>
  </div>
)

export const Secondary = () => (
  <div style={{ width: '20%' }}>
    <Chip primary={false} onClick={action('onClick action')}>
      Chip
    </Chip>
  </div>
)

export const DelatableChip = () => (
  <div style={{ width: '40%', display: 'flex' }}>
    <Chip
      primary
      onClick={action('onClick action')}
      onDelete={action('onDelete action')}
    >
      Chip
    </Chip>
    <Chip
      primary={false}
      onClick={action('onClick action')}
      onDelete={action('onDelete action')}
    >
      Chip
    </Chip>
  </div>
)

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
