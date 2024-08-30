import React,{useState} from 'react'

interface props {
    type?: string,
    name: string,
    label: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const Input:React.FC<props> = ({type = 'text', name, label, value, setValue}) => {

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(prev => prev = e.target.value)
  }  

  return (
    <div>
      <label className='block mb-2' htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        className="w-full bg-slate-700 outline-none text-gray-300 duration-200 rounded-md px-2 py-1"
        value={value}
        onChange={handleInput}
        type={type}
      />
    </div>
  );
}

export default Input