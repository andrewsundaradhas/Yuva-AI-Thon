import localFont from 'next/font/local'

// Monaspace Neon - Main display font
export const monaspace_neon = localFont({
  src: [
    {
      path: './fonts/MonaspaceNeon-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/MonaspaceNeon-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-monaspace-neon'
})

// Monaspace Argon - Secondary display font
export const monaspace_argon = localFont({
  src: [
    {
      path: './fonts/MonaspaceArgon-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/MonaspaceArgon-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-monaspace-argon'
})

// Monaspace Xenon - Body text
export const monaspace_xenon = localFont({
  src: [
    {
      path: './fonts/MonaspaceXenon-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/MonaspaceXenon-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-monaspace-xenon'
})
