const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Heart = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.1 0 3.5 1.1 5.2 3 1.7-1.9 3.1-3 5.2-3 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z" />
  </svg>
)

export const Apple = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.8 1.3 10.3.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.7-1-2.7-4.2zM13.9 4.9c.7-.9 1.2-2 1.1-3.2-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.1 1.1.1 2.3-.6 3-1.5z" />
  </svg>
)

export const Play = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M3.6 1.8c-.3.3-.4.7-.4 1.3v17.8c0 .6.1 1 .4 1.3l.1.1 10-10v-.2L3.7 1.7l-.1.1zM17 15.5l-3.3-3.3v-.3L17 8.6l.1.1 4 2.2c1.1.6 1.1 1.7 0 2.3l-4 2.2-.1.1zM17.1 15.4 13.7 12 3.6 22.1c.4.4 1 .4 1.7.1l11.8-6.8M17.1 8.6 5.3 1.9c-.7-.4-1.3-.3-1.7.1L13.7 12l3.4-3.4z" />
  </svg>
)

export const User = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></svg>
)
export const HeartLine = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.1 0 3.5 1.1 5.2 3 1.7-1.9 3.1-3 5.2-3 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z" /></svg>
)
export const Chat = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /><path d="M8 11h.01M12 11h.01M16 11h.01" /></svg>
)
export const ShieldCheck = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M12 2 3 7v5c0 5 3.8 9.4 9 10 5.2-.6 9-5 9-10V7z" /><path d="m9 12 2 2 4-4" /></svg>
)
export const ShieldAlert = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v4M12 16h.01" /></svg>
)
export const Search = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
)
export const Video = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><rect x="2" y="6" width="14" height="12" rx="2" /><path d="m22 8-6 4 6 4z" /></svg>
)
export const Bell = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" /></svg>
)
export const Lock = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
)
export const Check = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" /></svg>
)
export const Star = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="m12 17.3 6.2 3.7-1.6-7 5.4-4.7-7.1-.6L12 2 9.1 8.7 2 9.3l5.4 4.7-1.6 7z" /></svg>
)
export const Close = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
)
export const Menu = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M3 6h18v2H3zm4 5h10v2H7zm3 5h4v2h-4z" /></svg>
)
export const BellFill = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6V11c0-3.1-1.6-5.6-4.5-6.3V4a1.5 1.5 0 0 0-3 0v.7C7.6 5.4 6 7.9 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
)

export const Instagram = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>
)
export const XLogo = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" /></svg>
)
export const LinkedIn = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.95c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21h-4z" /></svg>
)
export const Facebook = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M14 13.5h2.5l1-4H14v-2c0-1 0-2 2-2h1.5V2.1C17.2 2.1 15.9 2 14.5 2 11.6 2 9.5 3.8 9.5 7v2.5h-3v4h3V22h4.5z" /></svg>
)
