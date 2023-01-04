import { FilePathContext } from 'pages';
import { useState, useCallback, useContext } from 'react'
import Cropper from 'react-easy-crop'
import { Area } from "react-easy-crop/types";

export const Crop = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const image = useContext(FilePathContext).filePath

    const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])

    if (image === "") {
        return <div>no image</div>
    }
    return (
        <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={16 / 9}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
        />
    )
}