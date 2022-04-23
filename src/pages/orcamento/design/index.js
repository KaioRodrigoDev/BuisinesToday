import React from 'react'

import { motion } from 'framer-motion'

const skills = [
  { img: '', ferramenta: 'Photoshop', desc: 'Lorem ipsum' },
  { img: '', ferramenta: 'Adobe XD', desc: 'Lorem ipsum' },
  { img: '', ferramenta: 'Adobe AI', desc: 'Lorem ipsum' },
  { img: '', ferramenta: 'Adobe Y', desc: 'Lorem ipsum' }
]

export default function Design() {
  return (
    <div className="py-10 dark:bg-bg">
      <section>
        <div className=" dark:bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:text-center"
            >
              <h2 className="text-base text-principal font-semibold tracking-wide uppercase">
                Design
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Habilidades
              </p>
            </motion.div>
          </div>
          <div className="grid  gap-4 px-14 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {skills.map((item, key) => (
              <motion.div
                key={item.ferramenta}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 + 0.2 * key, delay: 0.5 }}
                className="flex flex-col mt-14 py-2  bg-white rounded-lg text-center"
              >
                <div className=" my-2">
                  <div className="flex items-center justify-center ">
                    <img src={item.img} width="35%" />
                  </div>

                  <h1 className="text-2xl font-bold pl-2 text-principal">
                    {item.ferramenta}
                  </h1>

                  <p className="text-xs ">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
          <div className="lg:flex items-center justify-between  text-gray-600 dark:text-white">
            <div className=" lg:w-1/2 w-full">
              <h1
                role="heading"
                className="md:text-5xl text-3xl font-bold leading-10 mb-3 text-principal"
              >
                Our pricing plan
              </h1>
              <p className="text-base leading-4 text-slate-400 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p role="contentinfo" className="text-base leading-5 mt-5 ">
                We’re working on a suit of tools to make managing complex
                systems easier, for everyone for free. we can’t wait to hear
                what you think
              </p>
            </div>
            <div
              className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8 "
              role="list"
            >
              <img
                src="https://i.ibb.co/0n6DSS3/bgimg.png"
                className="absolute w-full -ml-12 mt-24"
                alt="background circle images"
              />
              <motion.div
                initial={{ opacity: 0, x: +100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-blue cursor-pointer shadow rounded-lg p-8 relative z-30"
              >
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-white">
                    Criação de Logotipos
                  </h2>
                  <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-white">
                    R$119
                  </p>
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-slate-400">
                  Full access to all features and no credit card required
                </p>
              </motion.div>
              <div className="bg-blue cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                <div className="w-full p-8">
                  <div className="md:flex items-center justify-between">
                    <h2 className="text-2xl font-semibold leading-6 text-white">
                      Post Instagram
                    </h2>
                    <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-white">
                      R$20<span className="font-normal text-base">/post</span>
                    </p>
                  </div>
                  <p className="md:w-80 text-base leading-6 mt-4 text-slate-400">
                    Unlimited products features and dedicated support channels
                  </p>
                </div>
              </div>
              <div className="bg-blue cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-white">
                    Carrosel
                  </h2>
                  <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-white">
                    R$50<span className="font-normal text-base">/post</span>
                  </p>
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-slate-400">
                  Unlimited products features and dedicated support channels
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
