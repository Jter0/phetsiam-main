import React from 'react'

export default function PlayBtnIcon({className} : {className: any}) {
   return (
      <div className={className}>
         <svg xmlns="http://www.w3.org/2000/svg" width="171" height="171" viewBox="0 0 171 171" fill="none">
            <g opacity="0.15" filter="url(#filter0_d_555_349)">
               <rect x="40" y="40" width="83" height="83" rx="41.5" stroke="white" strokeWidth="4" shapeRendering="crispEdges"/>
            </g>
            <path d="M81.5 122.912C81.5 124.065 80.5648 125.005 79.4132 124.95C74.4135 124.71 69.4873 123.608 64.8533 121.689C59.5756 119.503 54.7802 116.298 50.7409 112.259C46.7015 108.22 43.4973 103.424 41.3112 98.1467C39.1252 92.8691 38 87.2125 38 81.5C38 75.7875 39.1252 70.1309 41.3112 64.8533C43.4973 59.5756 46.7015 54.7802 50.7409 50.7409C54.7802 46.7015 59.5756 43.4973 64.8533 41.3112C69.4873 39.3918 74.4135 38.2902 79.4132 38.0501C80.5648 37.9948 81.5 38.9347 81.5 40.0876C81.5 41.2406 80.5647 42.1694 79.4133 42.2306C74.9623 42.4671 70.5785 43.459 66.4511 45.1686C61.68 47.1449 57.3448 50.0415 53.6932 53.6932C50.0415 57.3448 47.1449 61.68 45.1687 66.4511C43.1924 71.2222 42.1752 76.3358 42.1752 81.5C42.1752 86.6642 43.1924 91.7778 45.1687 96.5489C47.1449 101.32 50.0415 105.655 53.6932 109.307C57.3448 112.958 61.68 115.855 66.4511 117.831C70.5785 119.541 74.9622 120.533 79.4133 120.769C80.5647 120.831 81.5 121.759 81.5 122.912Z" fill="currentcolor"/>
            <path d="M89.4433 73.4938C94.3451 77.1624 96.796 78.9967 96.796 81.4999C96.796 84.0031 94.3451 85.8374 89.4433 89.506L88.1682 90.4603C81.1892 95.6835 77.6997 98.2951 74.938 96.9125C72.1763 95.5299 72.1763 91.1713 72.1763 82.4542V80.5456C72.1763 71.8285 72.1763 67.4699 74.938 66.0873C77.6997 64.7047 81.1892 67.3163 88.1682 72.5396L89.4433 73.4938Z" fill="currentcolor"/>
            <defs>
               <filter id="filter0_d_555_349" x="0" y="0" width="171" height="171" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_555_349"/>
                  <feOffset dx="4" dy="4"/>
                  <feGaussianBlur stdDeviation="20"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.501961 0 0 0 0 0.341177 0 0 0 0.15 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_555_349"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_555_349" result="shape"/>
               </filter>
            </defs>
         </svg>
      </div>
   )
}
