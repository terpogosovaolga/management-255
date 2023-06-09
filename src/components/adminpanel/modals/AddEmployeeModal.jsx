import { Box, Modal, TextField, Typography } from "@mui/material";
import copy from '../../../assets/img/document-copy.svg';
import TextInput from "../../common/inputs/TextInput";
import close from '../../../assets/img/close-modal.svg';
import { useEffect, useState } from "react";

export default function AddEmployeeModal({open, closeFunc}) {

    // Для вывода сообщения "Скопировано" и об отправке сообщения. Исчезает через полторы секунды
    const [copied, setCopied] = useState(false);
    const [sended, setSended] = useState(false);
    useEffect(() => {
        if (copied) {
            setTimeout(() => setCopied(false), 1500)
        }
        if (sended) {
            setTimeout(() => setSended(false), 1500)
        }
    }, [copied, sended]);

    // ссылка сгенерированная
    const link = "https//site.ru/registraion=dfglkj54jslk";

    // копирование ссылки при нажатии на иконку копирования
    const copyFunc = () => {
        navigator.clipboard.writeText(link);
        setCopied(true);
    }

    // проверка адрес почты и отправка
    const trySend = () => {
        let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (pattern.test(value)) {
            setSended("Отправлено!");
        }
        else {
            setSended("Проверьте почтовый адрес");
        }
    }

    // Значение из текстового поля
    const [value, setValue] = useState("");

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        boxShadow: 24,
        padding: '1rem',
        paddingBottom: "2rem",
        fontFamily: "Montserrat"
      };
    return (
        <Modal open={open} onClose={closeFunc} aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography sx={{fontFamily: "Montserrat"}} variant="h6">
                    Сгенирируйте и отправьте ссылку новому работнику
                </Typography>
                <div className="admin-panel-wrapper-popap__body" style={{alignItems: "center"}}>
					<a className="admin-panel-wrapper-popap__link">
						Сгенерировать
					</a>
					<div className="editing-panel-link" style={{marginBottom: '0'}}>
						<div className="copia-content">
							<a href={link} className="hover-transform copia-content__content editing-panel-link__content">{link}</a>
							<span className="copia-content__button" onClick={copyFunc}><img src={copy} alt="" /></span>
						</div>
					</div>
				</div>
                {copied && <div style={{textAlign: "right", position: "relative", top: "-10px", fontSize: "10px"}}><span>Скопировано!</span></div>}
                <div className="admin-panel-wrapper-popap__body" style={{alignItems: "center"}}>
					<span className="admin-panel-wrapper-popap__link admin-panel-wrapper-popap__link_bacgraund" onClick={trySend}>
						Отправить на почту
					</span>
                    <div style={{width: '69%'}}>
                    <TextField 
                        id="filled-basic-add-empl" 
                        variant="outlined" 
                        placeholder="Введите почту"
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        type="email"
                        sx={{fontFamily: "Montserrat"}}
                    />
                    </div>
				</div>
                {sended && <div style={{textAlign: "right", position: "relative", top: "-10px", fontSize: "10px"}}><span>{sended}</span></div>}
                <img src={close} onClick={closeFunc} className="modal-close"/>
            </Box>
		</Modal>
    )
}