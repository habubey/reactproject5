import * as React from "react"

const ChackoutBag = (props) => (
  <svg style={{ width: "48px" }}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
)

export default ChackoutBag
