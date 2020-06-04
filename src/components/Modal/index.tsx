import React, { useState, useEffect, useCallback } from 'react';
import { Dispatch, SetStateAction, RefObject, ChangeEvent } from 'react';
import { 
    Container,
    Content,
    Image,
    Adjustment,
    Actions,
    Cancelar,
    Salvar
} from './styles';
import Cropper from 'react-easy-crop';
import {getCroppedImg, Area} from './util';
import Slider from '../Form/Slider';

interface ModalProps {
    stateOpen: boolean;
    setStateOpen: Dispatch<SetStateAction<boolean>>;
    previewImg: string;
    setFinalImg: Dispatch<SetStateAction<string | null>>;
    finalImg: string | null;
    inputRef: RefObject<HTMLInputElement>
}

const Modal: React.FC<ModalProps> = ({ stateOpen, setStateOpen, previewImg, finalImg, setFinalImg, inputRef }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>({width: 0, height: 0, x: 0, y: 0});

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
      }, [])
    
    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                previewImg,
                croppedAreaPixels,
                rotation
            )
            // console.log('donee', { croppedImage }) 
            setFinalImg(croppedImage);
            
            // novo arquivo da imagem cortada
            // let newFile = new File(
            //     [croppedImage], 
            //     (inputRef as any).current.files[0].name, {
            //         type: (inputRef as any).current.files[0].type
            //     });
            
            setStateOpen(false);
        } catch (e) {
            console.error(e)
        }
    }, [previewImg, croppedAreaPixels, rotation, setFinalImg, setStateOpen])

    const handleClose = () => {
        (inputRef as any).current.value = null;
        setFinalImg(null);
        setStateOpen(false);
    }

    useEffect(()=>{
        setOpen(stateOpen);
    }, [stateOpen, setFinalImg, inputRef, previewImg, finalImg]);

    return (
        <Container open={open}>
            <Content>
                <Image>
                    <Cropper
                        image={previewImg}
                        crop={crop}
                        rotation={rotation}
                        zoom={zoom}
                        aspect={1}
                        showGrid={false}
                        onCropChange={setCrop}
                        onRotationChange={setRotation}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                        />
                </Image>
                <Adjustment>
                    <Slider
                        name="zoom"
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setZoom(Number(e.target.value))}
                    />
                </Adjustment>
                <Actions>
                    <Cancelar type="button" onClick={handleClose}>Fechar</Cancelar>
                    <Salvar type="button" onClick={showCroppedImage} >Salvar</Salvar>
                </Actions>
            </Content>
        </Container>
    );
}

export default Modal;