import React from 'react'
import { IconInterface } from './Icon'

const IconCopyFill: React.FC<IconInterface> = ({ width, height, color }) => {
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
          d="M1.00284 4.01123H19.0194C19.5732 4.01123 20.0222 4.56498 20.0222 5.01407V21.5062C20.0222 22.0599 19.5732 22.509 19.0194 22.509H1.00284C0.449083 22.509 0 21.9553 0 21.5062V5.01407C0 4.46031 0.449065 4.01123 1.00284 4.01123Z"
          fill={color ? color : '#EE8288'}
        />
        <path
          d="M22.997 0H4.5459V2.00567L21.9942 2.00544V17.9496H23.9999L23.9997 1.00266C23.9997 0.736862 23.894 0.481781 23.7061 0.293617C23.518 0.105691 23.2629 6.55764e-05 22.9968 6.55764e-05L22.997 0Z"
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

export default IconCopyFill
