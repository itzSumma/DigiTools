export const sectionWidth = 'mx-auto w-[min(1120px,calc(100%-1.5rem))]'

export const sectionHeadingWrap = 'mx-auto text-center'

export const sectionTitle =
  'text-[2.6rem] font-extrabold tracking-[-0.05em] text-[#1d2438] md:text-[4rem]'

export const sectionCopy = 'mt-4 text-base leading-7 text-[#8b95a9]'

export const surfaceCard =
  'rounded-[1.25rem] border border-[#ece8f7] bg-white shadow-[0_10px_24px_rgba(28,30,53,0.04)]'

export const primaryButton =
  'inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6f3df4] to-[#9c16f7] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(122,56,245,0.18)] transition hover:translate-y-[-1px]'

export const secondaryButton =
  'inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]'

export const pillToggleWrap =
  'inline-flex rounded-full border border-[#ece8f7] bg-white p-1 shadow-sm'

export const toggleButton = (isActive) =>
  `rounded-full px-6 py-3 text-sm font-semibold transition ${
    isActive
      ? 'bg-gradient-to-r from-[#6f3df4] to-[#9c16f7] text-white shadow-[0_8px_24px_rgba(122,56,245,0.18)]'
      : 'text-[#5f6781]'
  }`
