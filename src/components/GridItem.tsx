import { Level } from "@/types/Level";
import upImage from '@/assets/up.png'
import downImage from '@/assets/down.png'
import Image from "next/image";

type Props = {
    item: Level
};

export const GridItem = ({ item }: Props) => {
    return (
        <div className="flex-1 rounded-md flex flex-col justify-center items-center bg-[#0EAD69]">
            <div className="w-16 h-16 rounded-full bg-black/5 flex justify-center items-center">{item.icon === 'up'? <Image src={upImage} alt="" width={30}/>: 
            <Image src={downImage} alt="" width={30}/>
            }</div>

            <div className="text-white text-[18px] md:text-[20px] font-bold mt-3 md:mt-5">{item.title}</div>

            {item.yourImc && 
                <div className="text-white mb-10">Seu IMC é de {item.yourImc} kg/m² </div>
            }

            <div className="text-white text-xs mb-16 md:mb-0 md:text-sm">IMC está entre {item.imc[0]} e {item.imc[1]}</div>

        </div>
    )
} 