import React from 'react'
import ThemeButton from '../Components/ThemeButton'
import { Menu, Close } from '../Helpers/icons'

type sideBarProps = {
    state: boolean,
    func: () => void
}

const Sidebar = ({ state, func }: sideBarProps) => {
    return (
        <div className='h-full border bg-(--color-secondary) flex flex-col'>
            <div className='flex justify-between items-center p-4'>
                <ThemeButton />
                <button
                    onClick={func}
                    style={{}}
                    className='p-1 rounded-md hover:bg-gray-200/50 transition cursor-pointer text-2xl text-(--color-text)'
                >
                    {state ? <Close /> : <Menu />}
                </button>
            </div>
        </div>
    )
}

export default Sidebar