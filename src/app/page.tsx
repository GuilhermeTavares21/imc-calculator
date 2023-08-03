 "use client"

import poweredImage from '@/assets/powered.png'
import Image from "next/image";
import { useState } from 'react';
import { levels } from '@/helpers/imc';
import { Level } from '@/types/Level';
import { GridItem } from '@/components/GridItem';

const Page = () => {
  const [heightField, setHeightField] = useState(0)
  const [weightField, setWeightField] = useState(0)

  const handleCalculateButton = () => {
    if(heightField && weightField) {

    } else {
      alert("Preencha todos os campos!")
    }
  }
  
  return(
    <div className="container mx-auto">
      <header className="mt-10">
        <div>
          <Image className="w-60" src={poweredImage} alt="Powered Image" />
        </div>
      </header>

      <div className="flex mt-10 h-96 gap-20">

        <div className="flex-1">
          <h1 className="text-4xl text-[#3A4B5C] font-bold py-8">Calcule o seu IMC.</h1>
          <p className="text-[16px] mb-10 text-[#6A7D8B]">IMC é a sigla para Índice de Massa Corporal, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
          className="w-[100%] border-b-2 py-3 px-2 mb-5 text-[14px] outline-none" 
          type="number" 
          value={heightField > 0 ? heightField : ""} 
          onChange={e => setHeightField(parseFloat(e.target.value))} 
          placeholder="Escreva sua altura. Ex: 1.70 (em metros)"/>

          <input
          className="w-[100%] border-b-2 py-3 px-2 mb-5 text-[14px] outline-none"  
          type="number" 
          value={weightField > 0 ? weightField : ""} 
          onChange={e => setWeightField(parseFloat(e.target.value))} 
          placeholder="Escreva seu peso. Ex: 70 (em kg)"/>

          <button className="bg-[#227C9D] text-white text-[15px] border-none rounded-md py-4 w-[100%] cursor-pointer" onClick={handleCalculateButton}> Calcular </button>
        </div>

        <div className="flex-1">
          <div className="h-full grid grid-cols-2 gap-5">
            {levels.map((item, key) =>(
              <GridItem 
              key = {key}
              item= {item}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page;


