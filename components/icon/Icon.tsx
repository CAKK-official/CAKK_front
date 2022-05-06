import React from 'react'
import Cross from './Cross'
import IconForkFill from './IconForkFill'
import IconUserFill from './IconUserFill'
// IconCakeFill,
// IconClockFill,
// IconCopyFill,
// IconDirectionLeft,
// IconDirectionRight,
// IconFlagFill,
// IconForkFill,
// IconHolidayFill,
// IconInstaFill,
// IconLocationFill,
// IconPhoneFill,
// IconUserFill,
import Logo from './Logo'

export interface IconInterface {
  width: number
  height: number
  color?: string
}

const Icon: React.FC<{
  name:
    | 'cross'
    | 'icon_cake_fill'
    | 'icon_clock_fill'
    | 'icon_copy_fill'
    | 'icon_direction_left_fill'
    | 'icon_direction_right_fill'
    | 'icon_flag_fill'
    | 'icon_fork_fill'
    | 'icon_holiday_fill'
    | 'icon_insta_fill'
    | 'icon_location_fill'
    | 'icon_phone_fill'
    | 'icon_user_fill'
    | 'logo'
  width: number
  height: number
  color?: string
}> = ({ name, width, height, color }) => {
  switch (name) {
    case 'cross':
      return <Cross width={width} height={height} color={color} />
    // case 'icon_cake_fill':
    //   return <IconCakeFill />
    // case 'icon_clock_fill':
    //   return <IconClockFill />
    // case 'icon_copy_fill':
    //   return <IconCopyFill />
    // case 'icon_direction_left_fill':
    //   return <IconDirectionLeft />
    // case 'icon_direction_right_fill':
    //   return <IconDirectionRight />
    // case 'icon_flag_fill':
    //   return <IconFlagFill />
    case 'icon_fork_fill':
      return <IconForkFill width={width} height={height} color={color} />
    // case 'icon_holiday_fill':
    //   return <IconHolidayFill />
    // case 'icon_insta_fill':
    //   return <IconInstaFill />
    // case 'icon_location_fill':
    //   return <IconLocationFill />
    // case 'icon_phone_fill':
    //   return <IconPhoneFill />
    case 'icon_user_fill':
      return <IconUserFill width={width} height={height} color={color} />
    case 'logo':
      return <Logo width={width} height={height} color={color} />

    default:
      return <></>
  }
}

export default Icon
