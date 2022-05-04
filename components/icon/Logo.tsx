import React from 'react'
import { IconInterface } from './Icon'

const Logo: React.FC<IconInterface> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 139 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.2681 35.1912C80.7854 34.7612 82.364 35.6428 82.7939 37.1602C83.17 38.4875 84.7887 40.0866 88.376 41.3687C91.7918 42.5895 96.2651 43.2418 100.851 43.2418C105.438 43.2418 109.911 42.5895 113.327 41.3687C116.914 40.0866 118.533 38.4875 118.909 37.1602C119.339 35.6428 120.918 34.7612 122.435 35.1912C123.952 35.6211 124.834 37.1997 124.404 38.717C123.239 42.8289 119.271 45.3093 115.249 46.7467C111.056 48.2455 105.897 48.953 100.851 48.953C95.8059 48.953 90.6473 48.2455 86.4539 46.7467C82.432 45.3093 78.4641 42.8289 77.2991 38.717C76.8691 37.1997 77.7507 35.6211 79.2681 35.1912Z"
        fill={color ? color : '#EE8288'}
      />
      <path
        d="M14.539 32.1621C12.3035 32.1621 10.2883 31.8357 8.49333 31.183C6.69839 30.5466 5.16453 29.6247 3.89176 28.4172C2.6353 27.1934 1.67256 25.7166 1.00354 23.9869C0.334512 22.2573 0 20.3073 0 18.1371C0 15.7057 0.350829 13.4784 1.05249 11.455C1.77046 9.4316 2.81479 7.68561 4.18548 6.21702C5.57247 4.73212 7.26135 3.58988 9.2521 2.79032C11.2429 1.99075 13.5192 1.59097 16.081 1.59097C17.3864 1.59097 18.5858 1.72967 19.6791 2.00707C20.7887 2.26815 21.7433 2.61898 22.5428 3.05956C23.3587 3.50013 23.9869 3.98966 24.4275 4.52814C24.8844 5.06663 25.1129 5.61327 25.1129 6.16807C25.1129 6.83709 24.9334 7.33478 24.5744 7.66113C24.2154 7.98749 23.7748 8.15066 23.2526 8.15066C22.8284 8.15066 22.4368 8.05276 22.0778 7.85694C21.7351 7.66113 21.319 7.44084 20.8295 7.19608C20.3399 6.935 19.6954 6.70655 18.8958 6.51074C18.0963 6.31493 17.0519 6.21702 15.7628 6.21702C14.6859 6.21702 13.6252 6.44547 12.5809 6.90236C11.5366 7.35926 10.5983 8.0446 9.76611 8.95838C8.93391 9.85585 8.26489 10.9736 7.75904 12.3117C7.26951 13.6334 7.02475 15.1672 7.02475 16.9132C7.02475 18.235 7.19608 19.4996 7.53875 20.7071C7.88142 21.9146 8.40359 22.9916 9.10524 23.938C9.82322 24.8681 10.7289 25.6024 11.8221 26.1409C12.9154 26.6793 14.2127 26.9486 15.7139 26.9486C16.8561 26.9486 17.8352 26.8017 18.6511 26.508C19.4669 26.198 20.1686 25.839 20.756 25.431C21.3435 25.0231 21.8738 24.6723 22.347 24.3786C22.8202 24.0685 23.2771 23.9135 23.7177 23.9135C24.5825 23.9135 25.1781 24.1175 25.5045 24.5254C25.8308 24.917 25.994 25.4718 25.994 26.1898C25.994 26.9241 25.7166 27.6502 25.1618 28.3682C24.607 29.0699 23.8156 29.7063 22.7876 30.2774C21.7759 30.8485 20.5684 31.3054 19.1651 31.6481C17.7618 31.9907 16.2197 32.1621 14.539 32.1621Z"
        fill={color ? color : '#EE8288'}
      />
      <path
        d="M59.2594 31.5746C58.5904 31.5746 58.0111 31.4033 57.5216 31.0606C57.0484 30.7343 56.6241 30.2366 56.2488 29.5676C56.102 29.127 55.9388 28.613 55.7593 28.0256C55.5798 27.4218 55.4003 26.8099 55.2208 26.1898C55.0576 25.5697 54.8863 24.9823 54.7068 24.4275C54.5273 23.8564 54.3478 23.3832 54.1683 23.0079C53.9399 22.4857 53.6543 22.1022 53.3116 21.8575C52.9853 21.6127 52.4958 21.4414 51.8431 21.3435C51.5167 21.3108 51.019 21.27 50.35 21.2211C49.6973 21.1558 48.9793 21.1069 48.1961 21.0742C47.4128 21.0253 46.6785 21.0008 45.9932 21.0008C44.9489 21.0008 43.8882 21.0253 42.8112 21.0742C41.7343 21.1232 40.8042 21.1885 40.0209 21.27C39.3519 21.3353 38.8461 21.474 38.5034 21.6861C38.177 21.882 37.9078 22.2328 37.6957 22.7386C37.4835 23.2118 37.2632 23.783 37.0348 24.452C36.8064 25.121 36.5779 25.8227 36.3495 26.557C36.121 27.2913 35.8926 28.0092 35.6641 28.7109C35.3214 29.4941 34.9053 30.0897 34.4158 30.4977C33.9426 30.8893 33.2817 31.0851 32.4332 31.0851C31.7805 31.0851 31.2339 30.979 30.7933 30.7669C30.3527 30.5548 30.0264 30.204 29.8142 29.7144C29.6021 29.2249 29.496 28.5804 29.496 27.7808C29.496 27.0302 29.6021 26.1327 29.8142 25.0884C30.0264 24.0277 30.3119 22.8855 30.6709 21.6617C31.0462 20.4378 31.4542 19.1977 31.8947 17.9412C32.3516 16.6848 32.8085 15.4773 33.2654 14.3187C33.7386 13.1439 34.1874 12.0914 34.6116 11.1613C35.0359 10.2148 35.403 9.46423 35.7131 8.90943C36.2679 7.88142 36.8961 6.8942 37.5978 5.94778C38.3157 5.00136 39.1071 4.161 39.972 3.4267C40.8531 2.67609 41.8159 2.08866 42.8602 1.6644C43.9045 1.22382 45.0549 1.00353 46.3114 1.00353C48.3348 1.00353 50.1542 1.61544 51.7696 2.83927C53.4014 4.06309 54.8455 5.6867 56.102 7.71008C56.5752 8.39543 57.0484 9.28474 57.5216 10.378C58.0111 11.455 58.4925 12.6543 58.9657 13.9761C59.4389 15.2815 59.8795 16.6358 60.2874 18.0392C60.6954 19.4425 61.0544 20.8213 61.3644 22.1757C61.6908 23.53 61.9355 24.7783 62.0987 25.9206C62.2782 27.0628 62.3679 28.0256 62.3679 28.8088C62.3679 29.8205 62.0905 30.5303 61.5357 30.9382C60.9809 31.3625 60.2222 31.5746 59.2594 31.5746ZM52.1613 17.109C52.5202 17.0438 52.7568 16.9051 52.8711 16.6929C52.9853 16.4808 53.0424 16.1463 53.0424 15.6894C53.0424 15.1836 52.9527 14.5635 52.7732 13.8292C52.61 13.0786 52.3815 12.2953 52.0878 11.4795C51.7941 10.6473 51.4514 9.87217 51.0598 9.1542C50.505 8.09355 49.8523 7.2124 49.1017 6.51074C48.3511 5.79276 47.5434 5.43377 46.6785 5.43377C45.7321 5.43377 44.8265 5.80908 43.9616 6.55969C43.1131 7.29399 42.3625 8.23225 41.7098 9.37449C41.4324 9.83138 41.1468 10.3535 40.8531 10.941C40.5594 11.5284 40.2902 12.1322 40.0454 12.7522C39.8006 13.3723 39.5967 13.9597 39.4335 14.5145C39.2866 15.053 39.2132 15.5099 39.2132 15.8852C39.2132 16.3748 39.409 16.7174 39.8006 16.9132C40.1923 17.0927 40.8205 17.1825 41.6853 17.1825C43.5129 17.1825 45.0957 17.1825 46.4338 17.1825C47.7718 17.1825 48.9059 17.1825 49.836 17.1825C50.7824 17.1825 51.5575 17.158 52.1613 17.109Z"
        fill={color ? color : '#EE8288'}
      />
      <path
        d="M69.7292 31.0606C68.587 31.0606 67.7548 30.6935 67.2326 29.9592C66.7105 29.2086 66.3596 28.05 66.1802 26.4835C66.1312 25.7003 66.0904 24.8926 66.0578 24.0604C66.0251 23.2282 66.0007 22.396 65.9843 21.5638C65.9843 20.7152 65.9925 19.8749 66.0088 19.0427C66.0414 18.2105 66.0659 17.3946 66.0822 16.595C66.1475 14.947 66.2617 13.2989 66.4249 11.6508C66.6044 10.0027 66.8655 8.39543 67.2082 6.82893C67.5508 5.26244 67.9996 3.78569 68.5544 2.39869C68.9786 1.56649 69.509 0.962739 70.1453 0.587433C70.7817 0.195811 71.5487 0 72.4461 0C73.1804 0 73.7597 0.228447 74.184 0.685341C74.6082 1.14223 74.8203 1.73783 74.8203 2.47212C74.8203 2.84743 74.7795 3.37775 74.698 4.06309C74.6327 4.73211 74.5429 5.46641 74.4287 6.26597C74.3308 7.06554 74.2248 7.85694 74.1105 8.64019C74.0126 9.40712 73.931 10.1006 73.8658 10.7207C73.8005 11.3244 73.776 11.7569 73.7923 12.0179C73.8413 12.3606 73.9229 12.6135 74.0371 12.7767C74.1513 12.9236 74.3634 12.997 74.6735 12.997C74.9346 12.997 75.2283 12.9154 75.5546 12.7522C75.881 12.5727 76.24 12.3198 76.6316 11.9935C77.5617 11.2429 78.761 10.2964 80.2296 9.1542C81.7145 7.99564 83.2239 6.81262 84.7578 5.60511C86.0632 4.5771 87.2054 3.76937 88.1845 3.18194C89.1799 2.57819 90.0202 2.27631 90.7056 2.27631C91.2604 2.27631 91.7009 2.38237 92.0273 2.5945C92.3536 2.79032 92.5903 3.05956 92.7371 3.40223C92.9003 3.72858 92.9819 4.07941 92.9819 4.45471C92.9819 4.73212 92.8921 5.04215 92.7126 5.38482C92.5495 5.72749 92.2965 6.09464 91.9539 6.48626C91.6275 6.87789 91.2196 7.29399 90.73 7.73456C90.2568 8.17514 89.7102 8.63203 89.0901 9.10524C88.2253 9.74163 87.2707 10.4188 86.2264 11.1368C85.182 11.8384 84.1622 12.5075 83.1668 13.1439C82.1714 13.7639 81.3311 14.2779 80.6457 14.6859C80.0909 14.9796 79.6912 15.2244 79.4464 15.4202C79.2016 15.616 79.0792 15.8036 79.0792 15.9831C79.0792 16.1463 79.1445 16.3176 79.2751 16.4971C79.4056 16.6766 79.634 16.9051 79.9604 17.1825C80.2215 17.4272 80.6213 17.7862 81.1597 18.2594C81.7145 18.7327 82.3265 19.263 82.9955 19.8504C83.6645 20.4215 84.3172 20.9926 84.9536 21.5638C85.6063 22.1186 86.1774 22.6244 86.6669 23.0813C87.1728 23.5219 87.5318 23.8319 87.7439 24.0114C89.0983 25.2679 90.061 26.2714 90.6321 27.022C91.2196 27.7563 91.5133 28.3193 91.5133 28.7109C91.5133 29.2494 91.3991 29.6818 91.1706 30.0081C90.9422 30.3182 90.624 30.5466 90.216 30.6935C89.8081 30.8567 89.3349 30.9382 88.7964 30.9382C88.1437 30.9382 87.3523 30.6935 86.4222 30.204C85.5084 29.6981 84.3498 28.817 82.9465 27.5605C81.6248 26.3367 80.5397 25.3087 79.6912 24.4765C78.859 23.6443 78.1736 22.9508 77.6351 22.396C77.113 21.8412 76.6642 21.3598 76.2889 20.9519C75.9299 20.5276 75.5546 20.1115 75.163 19.7036C74.853 19.2956 74.6001 18.9856 74.4042 18.7734C74.2084 18.545 74.0371 18.39 73.8902 18.3084C73.7597 18.2105 73.6292 18.1615 73.4986 18.1615C73.3191 18.1615 73.1886 18.2431 73.107 18.4063C73.0254 18.5695 72.9846 18.8142 72.9846 19.1406C72.9846 19.2222 72.9764 19.4833 72.9601 19.9238C72.9601 20.3481 72.952 20.8539 72.9357 21.4414C72.9357 22.0288 72.9193 22.6326 72.8867 23.2526C72.8704 23.8564 72.8541 24.4112 72.8377 24.917C72.8377 25.4066 72.8296 25.7492 72.8133 25.9451C72.7154 27.8542 72.4298 29.1841 71.9566 29.9347C71.4834 30.6853 70.7409 31.0606 69.7292 31.0606Z"
        fill={color ? color : '#EE8288'}
      />
      <path
        d="M114.858 31.0606C113.715 31.0606 112.883 30.6935 112.361 29.9592C111.839 29.2086 111.488 28.05 111.309 26.4835C111.26 25.7003 111.219 24.8926 111.186 24.0604C111.154 23.2282 111.129 22.396 111.113 21.5638C111.113 20.7152 111.121 19.8749 111.137 19.0427C111.17 18.2105 111.194 17.3946 111.211 16.595C111.276 14.947 111.39 13.2989 111.553 11.6508C111.733 10.0027 111.994 8.39543 112.337 6.82893C112.679 5.26244 113.128 3.78569 113.683 2.39869C114.107 1.56649 114.637 0.962739 115.274 0.587433C115.91 0.195811 116.677 0 117.575 0C118.309 0 118.888 0.228447 119.312 0.685341C119.737 1.14223 119.949 1.73783 119.949 2.47212C119.949 2.84743 119.908 3.37775 119.826 4.06309C119.761 4.73211 119.671 5.46641 119.557 6.26597C119.459 7.06554 119.353 7.85694 119.239 8.64019C119.141 9.40712 119.06 10.1006 118.994 10.7207C118.929 11.3244 118.904 11.7569 118.921 12.0179C118.97 12.3606 119.051 12.6135 119.166 12.7767C119.28 12.9236 119.492 12.997 119.802 12.997C120.063 12.997 120.357 12.9154 120.683 12.7522C121.009 12.5727 121.368 12.3198 121.76 11.9935C122.69 11.2429 123.89 10.2964 125.358 9.1542C126.843 7.99564 128.352 6.81262 129.886 5.60511C131.192 4.5771 132.334 3.76937 133.313 3.18194C134.308 2.57819 135.149 2.27631 135.834 2.27631C136.389 2.27631 136.829 2.38237 137.156 2.5945C137.482 2.79032 137.719 3.05956 137.866 3.40223C138.029 3.72858 138.11 4.07941 138.11 4.45471C138.11 4.73212 138.021 5.04215 137.841 5.38482C137.678 5.72749 137.425 6.09464 137.082 6.48626C136.756 6.87789 136.348 7.29399 135.859 7.73456C135.385 8.17514 134.839 8.63203 134.219 9.10524C133.354 9.74163 132.399 10.4188 131.355 11.1368C130.311 11.8384 129.291 12.5075 128.295 13.1439C127.3 13.7639 126.46 14.2779 125.774 14.6859C125.219 14.9796 124.82 15.2244 124.575 15.4202C124.33 15.616 124.208 15.8036 124.208 15.9831C124.208 16.1463 124.273 16.3176 124.404 16.4971C124.534 16.6766 124.763 16.9051 125.089 17.1825C125.35 17.4272 125.75 17.7862 126.288 18.2594C126.843 18.7327 127.455 19.263 128.124 19.8504C128.793 20.4215 129.446 20.9926 130.082 21.5638C130.735 22.1186 131.306 22.6244 131.795 23.0813C132.301 23.5219 132.66 23.8319 132.872 24.0114C134.227 25.2679 135.189 26.2714 135.761 27.022C136.348 27.7563 136.642 28.3193 136.642 28.7109C136.642 29.2494 136.528 29.6818 136.299 30.0081C136.071 30.3182 135.752 30.5466 135.345 30.6935C134.937 30.8567 134.463 30.9382 133.925 30.9382C133.272 30.9382 132.481 30.6935 131.551 30.204C130.637 29.6981 129.478 28.817 128.075 27.5605C126.753 26.3367 125.668 25.3087 124.82 24.4765C123.987 23.6443 123.302 22.9508 122.764 22.396C122.241 21.8412 121.793 21.3598 121.417 20.9519C121.058 20.5276 120.683 20.1115 120.291 19.7036C119.981 19.2956 119.729 18.9856 119.533 18.7734C119.337 18.545 119.166 18.39 119.019 18.3084C118.888 18.2105 118.758 18.1615 118.627 18.1615C118.448 18.1615 118.317 18.2431 118.235 18.4063C118.154 18.5695 118.113 18.8142 118.113 19.1406C118.113 19.2222 118.105 19.4833 118.089 19.9238C118.089 20.3481 118.08 20.8539 118.064 21.4414C118.064 22.0288 118.048 22.6326 118.015 23.2526C117.999 23.8564 117.983 24.4112 117.966 24.917C117.966 25.4066 117.958 25.7492 117.942 25.9451C117.844 27.8542 117.558 29.1841 117.085 29.9347C116.612 30.6853 115.869 31.0606 114.858 31.0606Z"
        fill={color ? color : '#EE8288'}
      />
    </svg>
  )
}

export default Logo