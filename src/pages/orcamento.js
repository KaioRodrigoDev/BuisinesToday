import React from 'react'

// import { Container } from './styles';
const Info = [
  {
    title: 'Quem somos ?',
    desc: 'Somos um grupo visionário e criativo',
    list: ['teste', 'teste2', 'teste3'],
    price: 'R$ 1.000,00',
    img: 'https://picsum.photos/200/300'
  }
]

export default function Orcamento() {
  return (
    <div className="min-h-screen pt-4 flex  justify-center text-white dark:bg-bg">
      <div className="grid grid-cols-4 gap-4 px-14 ">
        <div className="bg-gradient-to-b from-principal rounded-t-lg text-center">
          <h1 className="text-2xl font-bold pl-2  ">Design</h1>
          <p className="text-xs text-slate-200">Lorem ipsum dolor sit amet .</p>
          <p className="text-xs text-slate-200">
            R$
            <span className="text-2xl pr-2 -ml-1"> 20</span>a partir
          </p>
          <p className=" text-slate-200 px-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, quisquam.
          </p>
          <div>
            <p className=" text-slate-200">• Lorem ipsum dolor</p>

            <p className=" text-slate-200">• Lorem ipsum dolor</p>
          </div>
        </div>
        <div className="bg-gradient-to-b from-sky-600">
          <h1 className="text-2xl font-bold w-1/4">Programação</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold w-1/4">Fotografia</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold w-1/4">Marketing</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold w-1/4">Orçamento</h1>
        </div>
      </div>
    </div>
  )
}
