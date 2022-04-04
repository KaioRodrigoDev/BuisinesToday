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
  }
]

export default function Serviços() {
  return (
    <div className="pb-16">
      {/* Code block starts */}
      <dh-component>
        <section className="max-w-8xl mx-auto container bg-white pt-6">
          <div>
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
                Quem somos nós ?
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Vamos conhecer um pouco mais sobre a
                <span className="text-principal font-bold"> BusinnesToday</span>
                .
              </p>
            </motion.div>
            {/* GROUP OF CARDS */}
            <div
              tabIndex={0}
              aria-label="group of cards"
              className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
            >
              {features.map((feature, key) => (
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + 0.2 * key }}
                  tabIndex={0}
                  aria-label="card 1"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-10"
                  key={feature.name}
                >
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <feature.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-bold leading-tight text-principal"
                    >
                      {feature.name}
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-black leading-normal pt-2"
                    >
                      {feature.sub}
                    </p>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </dh-component>
      {/* Code block ends */}
    </div>
  )
}
