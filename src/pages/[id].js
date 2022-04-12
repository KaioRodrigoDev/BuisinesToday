import { useRouter } from 'next/router'

import { motion } from 'framer-motion'

export default function Id() {
  const { query } = useRouter()
  return (
    <div className="py-10 dark:bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:text-center"
        >
          <h2 className="text-base text-principal font-semibold tracking-wide uppercase">
            {query.id}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            O ID da pagina é {query.id}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
