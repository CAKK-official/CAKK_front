import React from 'react'
import { IconInterface } from './Icon'

const IconUserFill: React.FC<IconInterface> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.18582 3.59281C7.18582 5.5772 5.57725 7.18582 3.59281 7.18582C1.60862 7.18582 0 5.57725 0 3.59281C0 1.60862 1.60857 0 3.59281 0C5.5772 0 7.18582 1.60857 7.18582 3.59281Z"
        fill={color ? color : '#EE8288'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8263 12C18.8263 13.9844 17.2179 15.593 15.2334 15.593C13.2492 15.593 11.6406 13.9845 11.6406 12C11.6406 10.0158 13.2492 8.40723 15.2334 8.40723C17.2178 8.40723 18.8263 10.0158 18.8263 12Z"
        fill={color ? color : '#EE8288'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.18582 20.407C7.18582 22.3912 5.57725 23.9998 3.59281 23.9998C1.60862 23.9998 0 22.3912 0 20.407C0 18.4226 1.60857 16.814 3.59281 16.814C5.5772 16.814 7.18582 18.4225 7.18582 20.407Z"
        fill={color ? color : '#EE8288'}
      />
      <path
        d="M3.98059 3.05371L15.6216 11.4608L14.8456 12.5389L3.20459 4.1318L3.98059 3.05371Z"
        fill={color ? color : '#EE8288'}
      />
      <path
        d="M3.20459 19.8683L14.8456 11.4612L15.6216 12.5393L3.98059 20.9464L3.20459 19.8683Z"
        fill={color ? color : '#EE8288'}
      />
    </svg>
  )
}

export default IconUserFill
