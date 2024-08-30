import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

interface props {
    title: string,
    children: React.ReactNode
}

const Form:React.FC<props> = ({title, children}) => {

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center">
        <h2 className="text-lg my-2 text-center">{title}</h2>
          <Player
            src={
              "https://lottie.host/42bd2f4b-a49e-41cb-8420-c18116ec4ddc/ub3PPHolWs.json"
            }
            className='h-[150px]'
            autoplay
            loop
          ></Player>
      </div>
      <form className="space-y-6" action="#">
        {children}
      </form>
    </div>
  );
}

export default Form