 "use client"

import poweredImage from '@/assets/powered.png'
import leftArrow from '@/assets/leftarrow.png'
import Image from "next/image";
import { useState } from 'react';
import { calculateImc, levels } from '@/helpers/imc';
import { Level } from '@/types/Level';
import { GridItem } from '@/components/GridItem';

const Page = () => {
  const [heightField, setHeightField] = useState(0)
  const [weightField, setWeightField] = useState(0)
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField))
    } else {
      alert("Preencha todos os campos!")
    }
  }

  const handleBackButtom = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
    
  }
  
  return(
    <div className="container mx-auto">
      <header className="mt-5 md:mt-10">
        <div>
          <Image className="w-48 md:w-60" src={poweredImage} alt="Powered Image" />
        </div>
      </header>

      <div className="flex-col md:flex-row flex mt-1 md:mt-10 h-[500px] gap-5 md:gap-20 mx-2 md:m-0">

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl text-[#3A4B5C] font-bold py-6 md:py-8">Calcule o seu IMC.</h1>
          <p className="text-[14px] md:text-[16px] mb-6 md:mb-10 text-[#6A7D8B]">IMC é a sigla para Índice de Massa Corporal, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
          className="w-[100%] border-b-2 disabled:opacity-60 py-3 px-2 mb-5 text-[14px] outline-none" 
          type="number" 
          value={heightField > 0 ? heightField : ""} 
          onChange={e => setHeightField(parseFloat(e.target.value))} 
          placeholder="Escreva sua altura. Ex: 1.70 (em metros)"
          disabled={toShow ? true : false}
          />

          <input
          className="w-[100%] border-b-2 disabled:opacity-60 py-3 px-2 mb-5 text-[14px] outline-none"  
          type="number" 
          value={weightField > 0 ? weightField : ""} 
          onChange={e => setWeightField(parseFloat(e.target.value))} 
          placeholder="Escreva seu peso. Ex: 70 (em kg)"
          disabled={toShow ? true : false}
          />

          <button disabled={toShow ? true : false} className="bg-[#227C9D] text-white disabled:opacity-60 hover:opacity-90 text-[15px] border-none rounded-md py-4 w-[100%] cursor-pointer" onClick={handleCalculateButton}> Calcular </button>
        </div>

        <div className="flex-1">

          {!toShow &&
          <div className="h-full grid grid-cols-2 gap-2 md:gap-5">
            {levels.map((item, key) =>(
              <GridItem 
              key = {key}
              item= {item}
              />
            ))}
          </div>}

          {toShow && 
          <div className="flex h-full">

              <div
              onClick={handleBackButtom} 
              className="hover:opacity-90 absolute bg-[#227C9D] w-16 h-16 rounded-md md?rounded-full flex md:ml-[-35px] md:mt-[140px] justify-center items-center cursor-pointer">
                <Image src={leftArrow} alt="" width={25} />  
              </div>


              <GridItem
              item={toShow}
              />
          </div>
          }


        </div>

      </div>
    </div>
  )
}

export default Page;


