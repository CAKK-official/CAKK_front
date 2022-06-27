import React from 'react'
import { IconInterface } from './Icon'

const IconClockFill: React.FC<IconInterface> = ({ width, height, color }) => {
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
          d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM16.1367 15.2273L15.4664 16.1414C15.4518 16.1613 15.4335 16.1781 15.4124 16.1909C15.3913 16.2037 15.3678 16.2122 15.3434 16.2159C15.319 16.2196 15.2942 16.2184 15.2702 16.2125C15.2463 16.2065 15.2237 16.1959 15.2039 16.1813L11.3273 13.3547C11.3032 13.3373 11.2836 13.3145 11.2701 13.2879C11.2566 13.2614 11.2497 13.2321 11.25 13.2023V6.75C11.25 6.64687 11.3344 6.5625 11.4375 6.5625H12.5648C12.668 6.5625 12.7523 6.64687 12.7523 6.75V12.5508L16.0945 14.9672C16.1789 15.0258 16.1977 15.143 16.1367 15.2273Z"
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

export default IconClockFill
