import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        height="30"
        width="30"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        height="30"
        width="30"
        alt="Logo"
        className="hidden dark:block"
      />
      <p className="font-semibold">Noted</p>
    </div>
  )
}
