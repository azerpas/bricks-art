import { Crop } from "components/crop";
import { Drop } from "components/dropzone"
import { ComponentType, createContext, useContext, useState } from "react"
import dynamic from 'next/dynamic'

type FilePathContextType = {
    filePath: string,
    setFilePath: (filePath: string) => void,
}

export const FilePathContext = createContext<FilePathContextType>({filePath: "", setFilePath: (filePath: string) => {}})

const DynamicCrop = dynamic(() => import('../components/crop').then(c => c.Crop), {
    ssr: false,
})

const HomePage = () => {
    const [filePath, setFilePath] = useState("")
    return (
        <div>
            <FilePathContext.Provider value={{filePath, setFilePath}}>
                Welcome to Next.js!
                <Drop/>
                <DynamicCrop/>
            </FilePathContext.Provider>
        </div>
    )
}
  
export default HomePage