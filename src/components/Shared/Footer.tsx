import { FC } from 'react'
import { APP_NAME } from 'src/constants'
import { usePersistStore } from 'src/store'

const Footer: FC = () => {
  const { staffMode } = usePersistStore()

  return (
    <footer
      className={`mt-4 leading-7 text-sm sticky flex flex-wrap px-3 lg:px-0 gap-x-[12px] ${
        staffMode ? 'top-28' : 'top-20'
      }`}
    >
      <span className="font-bold text-gray-500 dark:text-gray-300">
        © {APP_NAME}
      </span>
      <a
        href="https://github.com/mattbrc/sparta"
        target="_blank"
        rel="noreferrer noopener"
      >
        Github
      </a>
      <a
        className="pr-3 hover:font-bold"
        href={`https://vercel.com/?utm_source=${APP_NAME}&utm_campaign=oss`}
        target="_blank"
        rel="noreferrer noopener"
      >
        ▲ Powered by Vercel
      </a>
    </footer>
  )
}

export default Footer
