import React from 'react'

import { motion } from 'framer-motion'

const skills = [
  {
    img: '../imgs/programacao/next.svg',
    ferramenta: 'NextJS',
    desc: 'NextJS é uma biblioteca JavaScript para construção de aplicações web modernas.'
  },
  {
    img: '../imgs/programacao/react.svg',
    ferramenta: 'React Native',
    desc: 'React Native é uma biblioteca criada pelo Facebook, para desenvolvimento de App mobile.'
  },
  {
    img: '../imgs/programacao/sql.svg',
    ferramenta: 'MySQL',
    desc: 'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL.'
  },
  {
    img: '../imgs/programacao/html.svg',
    ferramenta: 'HTML',
    desc: 'Alem do proprio HTML o dominio do CSS e JavaScript são a base do desenvolvimento web.'
  }
]

const exp = [
  {
    img: '../imgs/programacao/exp/linkedin.png',
    titulo: 'React Native',
    desc: 'Projeto Desenvolvido para gestão de empresa de investimentos.'
  },
  {
    img: '../imgs/programacao/exp/linkedin.png',
    titulo: 'NextJS',
    desc: 'Projeto desenvolvido para Lojas de multiplos Segmentos'
  }
]

export default function Code() {
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
                Programação
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
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="flex items-center justify-center pb-2 "
                  >
                    <img src={item.img} width="35%" />
                  </motion.div>

                  <h1 className="text-2xl font-bold pl-2 text-principal">
                    {item.ferramenta}
                  </h1>

                  <p className="text-xs mx-4 font-medium mt-4">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:text-center"
            >
              <h2 className="text-base text-principal font-semibold tracking-wide uppercase">
                experiências
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Portfolio
              </p>
            </motion.div>
          </div>
          <div>
            <div className=" px-14 ">
              {exp.map((item, key) => (
                <motion.div
                  key={item.titulo}
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 + 0.2 * key, delay: 0.5 }}
                  className="flex flex-col mt-14 py-2  bg-white rounded-lg  w-full "
                >
                  <div className=" my-4">
                    <div className="lg:flex text-center md:text-left lg:text-left items-center justify-center ">
                      <div className="pl-6">
                        <h1 className="text-4xl font-bold text-principal">
                          {item.titulo}
                        </h1>
                        <p className="text-sm font-medium mt-4">{item.desc}</p>
                      </div>

                      <div className="flex pt-4 lg:pt-0 lg:justify-end md:justify-center justify-center lg:pr-12 ">
                        <motion.img
                          src={item.img}
                          whileHover={{ scale: 1.2 }}
                          className="rounded-lg  w-[40%] "
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="xl:mx-auto xl:container py-20  px-6">
          <div className="lg:flex items-center justify-between  text-gray-600 dark:text-white">
            <div className=" lg:w-1/2  w-full">
              <h1
                role="heading"
                className="md:text-5xl text-3xl font-bold leading-10 mb-3 text-principal"
              >
                Custos
              </h1>
              <p className="text-base leading-4 text-slate-400 ">
                Selecione seu plano e fale conosco !
              </p>
              <p role="contentinfo" className="text-base leading-5 mt-5 ">
                Todos os planos são desenvolvidos estrategias especificas.{' '}
                <br></br>
                Estamos a todo momento procurando melhorias para o seu negocio
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
              <div className="bg-blue cursor-pointer shadow rounded-lg p-8 relative z-30">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-white">
                    Landing Page
                  </h2>
                  <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-white">
                    R$ 1700
                  </p>
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-slate-400">
                  Site com uma landing page a seu gosto
                </p>
              </div>
              <div className="bg-blue cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                <div className="w-full p-8">
                  <div className="md:flex items-center justify-between">
                    <h2 className="text-2xl font-semibold leading-6 text-white">
                      Site Institucional
                    </h2>
                    <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-white">
                      R$2700<span className="font-normal text-base"></span>
                    </p>
                  </div>
                  <p className="md:w-80 text-base leading-6 mt-4 text-slate-400">
                    Site institucional é a representação virtual de sua empresa
                    ou negocio
                  </p>
                </div>
              </div>
              <div className="bg-blue cursor-pointer shadow rounded-lg p-8 relative z-30 mt-3">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-white">
                    E-Commerce
                  </h2>
                  <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-white">
                    R$ 4000
                    <span className="font-normal text-base">/a partir</span>
                  </p>
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-slate-400">
                  Uma loja totalmente desenvolvida e pensada a seu gosto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
