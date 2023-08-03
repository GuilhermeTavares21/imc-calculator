import { Level } from "@/types/Level";
import upImage from '@/assets/up.png'
import downImage from '@/assets/down.png'
import Image from "next/image";

type Props = {
    item: Level
};

export const GridItem = ({ item }: Props) => {
    return (
        <div className={`flex-1 rounded-md flex flex-col justify-center items-center bg-[${item.color}]`}>
            <div className="w-16 h-16 rounded-full bg-black/5 flex justify-center items-center">{item.icon === 'up'? <Image src={upImage} alt="" width={30}/>: 
            <Image src={downImage} alt="" width={30}/>
            }</div>

            <div className="text-white text-[20px] font-bold  mt-5">{item.title}</div>

            <div className="text-white">IMC está entre {item.imc[0]} e {item.imc[1]}</div>

        </div>
    )
} 