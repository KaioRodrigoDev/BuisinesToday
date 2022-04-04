/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon
} from '@heroicons/react/outline'

import { motion } from 'framer-motion'

const features = [
  {
    name: 'Quem somos ?',
    sub: 'Somos um grupo visionário e criativo',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon
  },
  {
    name: 'O que fazemos ?',
    sub: 'Elevamos o nível do seu negócio por meio de serviços digitais. ',
    sub2: 'Alavancamos digitalmente empresas por meio dos serviços a seguir: ',
    description:
      'identidade visual, design para mídias sociais, criação de sites e apps, gestão de tráfego pago, fotografia, criação e edição de vídeos e filmes, e, gerenciamento de redes sociais.',
    icon: ScaleIcon
  },
  {
    name: 'No que acreditamos ?',
    sub: 'Acreditamos em um crescimento de empresas pela digitalização.',
    description:
      'Por meio de projetos estratégicos, personalizados de acordo com a necessidade de cada cliente, desejamos que tenham autoridade e expansão exponencial no universo digital.',
    icon: LightningBoltIcon
  },
  {
    name: 'NO QUE ACREDITAMOS?',
    sub: 'Acreditamos em um crescimento de empresas pela digitalização',
    description:
      'Por meio de projetos estratégicos, personalizados de acordo com a necessidade de cada cliente, desejamos que tenham autoridade e expansão exponencial no universo digital.',
    icon: AnnotationIcon
  }
]

export default function Serviços() {
  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:text-center"
        >
          <h2 className="text-base text-principal font-semibold tracking-wide uppercase">
            Serviços
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Um pouco do que fazemos
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </motion.div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, key) => (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + 0.2 * key }}
                key={feature.name}
                className="relative"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold text-principal">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-900">
                  {feature.sub}
                </dd>
                <dd className="ml-16 text-base text-gray-900">
                  {feature.sub2}
                </dd>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
