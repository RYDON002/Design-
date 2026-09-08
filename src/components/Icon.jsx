const paths = {
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  services: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M8 4V2h8v2M8 10h8" /></>,
  portfolio: <><path d="M3 7h18v13H3z" /><path d="M8 7V4h8v3" /></>,
  skills: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
  blog: <><path d="M5 3h11l3 3v15H5z" /><path d="M16 3v4h4M8 12h8M8 16h6" /></>,
  contact: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  download: <><path d="M12 3v12M7 10l5 5 5-5M4 21h16" /></>,
  arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
  send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
  dribbble: <><circle cx="12" cy="12" r="9" /><path d="M5 7.5c4 3 7 7.5 8.5 13M4 14c5-1.5 10-2 16 0M9 3.5c2.5 3 6 5 10.5 5" /></>,
  github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 3 5.1 5.1 0 0 0 19.1 0S18 0 15 1.7a13.4 13.4 0 0 0-7 0C5 0 3.9 0 3.9 0a5.1 5.1 0 0 0-.2 3A5.5 5.5 0 0 0 2.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" /><path d="M8 19c-3 .9-3-1.5-4-2" /></>,
  linkedin: <><rect x="3" y="9" width="4" height="12" /><path d="M5 3.5v.01M11 21v-7a4 4 0 0 1 8 0v7M11 9v12" /></>,
}

function Icon({ name, size = 18, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}

export default Icon
