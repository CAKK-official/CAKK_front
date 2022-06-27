import React from 'react'
import { IconInterface } from './Icon'

const IconForkFill: React.FC<IconInterface> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_123_458)">
        <path
          d="M12.0001 2C7.58908 2 4.00008 5.589 4.00008 9.995C3.97108 16.44 11.6961 21.784 12.0001 22C12.0001 22 20.0291 16.44 20.0001 10C20.0001 5.589 16.4111 2 12.0001 2ZM12.0001 14C9.79008 14 8.00008 12.21 8.00008 10C8.00008 7.79 9.79008 6 12.0001 6C14.2101 6 16.0001 7.79 16.0001 10C16.0001 12.21 14.2101 14 12.0001 14Z"
          fill={color ? color : '#EE8288'}
        />
      </g>
      <defs>
        <clipPath id="clip0_123_458">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconForkFill
