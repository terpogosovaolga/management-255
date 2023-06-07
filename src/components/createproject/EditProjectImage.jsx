import { useRef, useState } from 'react';
import download from '../../assets/img/download-icon.svg';

export default function EditProjectImage({image}) {
    // image - путь до картинки, если она уже установлена
    const [address, setAddress] = useState(image); // адрес до фото. используется для отображения, в том числе старого значения
    const [realImage, setRealImage] = useState({}); // объект картинки, используется при выборе картинки
    const [wasEdit, setWasEdit] = useState(false); // true - была изменена картинка
    const ref=useRef();

    const handlePic = () => {
        setRealImage(ref.current.files[0]);
        setWasEdit(true);
        setAddress(URL.createObjectURL(ref.current.files[0]));
    }
    return (
        <div className="editing-content__header input-field">
			<div className="input-field__body" style={address ? {backgroundImage: "url("+address+")", backgroundPosition: "center", backgroundSize: "cover"} : {}}>
				<label className="input-field__wrapper" for="fileOne">
					<img src={download} alt="" />
				</label>
				<input name="file" type="file" className="field _req" id="fileOne" ref={ref} onChange={handlePic} />
			</div>
		</div>
    )
}