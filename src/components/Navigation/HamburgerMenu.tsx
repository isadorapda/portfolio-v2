'use client'

interface MenuProps {
  isMenuOpen: boolean
}
export function HamburgerMenu({ isMenuOpen }: MenuProps) {
  return (
    <div className="block fixed h-4 w-6 cursor-pointer z-[110]">
      <span
        className={`menu-line ${
          isMenuOpen ? 'top-[13px] rotate-45' : 'top-0'
        } transition-all duration-500 ease-in-out`}
      />
      <span
        className={`menu-line ${
          isMenuOpen ? 'opacity-0' : 'opacity-100'
        } top-2`}
      />
      <span
        className={`menu-line ${
          isMenuOpen ? 'top-[13px] -rotate-45' : 'top-full'
        } transition-all duration-500 ease-in-out bottom-0`}
      />
    </div>
  )
}
