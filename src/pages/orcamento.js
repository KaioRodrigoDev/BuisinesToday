import React from 'react'
import { motion } from 'framer-motion'

// import { Container } from './styles';
const Info = [
  {
    title: 'Design',
    desc: 'Somos um grupo visionário e criativo',
    sub: 'Nosso foco é criar experiências inovadoras e impactantes para os nossos clientes.',
    itens: ['teste', 'teste2', 'teste3'],
    price: '1.000',
    img: './orcamento/design.png'
  },
  {
    title: 'Programação',
    desc: 'Somos um grupo visionário e criativo',
    sub: 'Nosso foco é criar experiências inovadoras e impactantes para os nossos clientes.',
    itens: ['teste', 'teste2', 'teste3'],
    price: '1.000',
    img: './orcamento/code.png'
  },
  {
    title: 'Fotografia',
    desc: 'Somos um grupo visionário e criativo',
    sub: 'Nosso foco é criar experiências inovadoras e impactantes para os nossos clientes.',
    itens: ['teste', 'teste2', 'teste3'],
    price: '1.000',
    img: './orcamento/photo.png'
  },
  {
    title: 'Marketing',
    desc: 'Somos um grupo visionário e criativo',
    sub: 'Nosso foco é criar experiências inovadoras e impactantes para os nossos clientes.',
    itens: ['teste', 'teste2', 'teste3'],
    price: '1.000',
    img: './orcamento/marketing.png'
  }
]

export default function Orcamento() {
  return (
    <div className="min-h-screen pt-16 flex  justify-center text-white dark:bg-bg">
      <div className="grid  gap-4 px-14 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {Info.map((item, key) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: +200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + 0.2 * key }}
            className=" flex flex-col h-min bg-gradient-to-b from-principal to-blue rounded-lg text-center  "
          >
            <div>
              <div className="flex items-center justify-center ">
                <img src={item.img} width="35%" className=" my-4" />
              </div>

              <h1 className="text-2xl font-bold pl-2 ">{item.title}</h1>

              <p className="text-xs text-slate-200">{item.sub}</p>
              <p className="text-xs text-slate-200 mt-4">
                R$
                <span className="text-2xl pr-2 -ml-1"> {item.price}</span>a
                partir
              </p>
              <p className=" text-slate-200 px-1 py-2 ">{item.desc}</p>
              <div>
                {item.itens.map((item, key) => (
                  <motion.p
                    initial={{ opacity: 0, y: +100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0 + 0.3 * key }}
                    key={item}
                    className="text-xs mt-2 text-slate-200"
                  >
                    • {item}
                  </motion.p>
                ))}
              </div>
            </div>
            <div className=" my-16 ">
              <button className=" bg-principal text-white py-2 px-20 rounded-lg hover:animate-pulse">
                Adquirir
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
