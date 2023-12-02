'use client'

interface InputProps {
    type: any,
    value: any,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
    id:string 
    placeholder?:string 
    big?:boolean 
}

export default function Input({type, value, onChange, name, id, placeholder, big}:InputProps) {
  return (
    <input type={type} value={value} onChange={onChange} name={name} id={id} placeholder={placeholder} 
        className={`w-full px-5 py-2.5 font-light bg-white border-[1px] border-slate-300 outline-none text-black rounded-md`}
        />
  )
}
