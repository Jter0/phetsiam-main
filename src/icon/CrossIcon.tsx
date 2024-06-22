import React from 'react'

export default function CrossIcon({...rest}) {
  return (
    <svg
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M1 1L22 21.5" stroke="currentcolor" />
      <path d="M22 1L1 21.5" stroke="currentcolor" />
    </svg>
  )
}
