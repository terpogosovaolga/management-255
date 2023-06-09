import { Box, Modal, Typography } from "@mui/material";
import TextInput from "../../common/inputs/TextInput";
import close from '../../../assets/img/close-modal.svg';
import { useState } from "react";

export default function AddEditCategoryModal({open, closeFunc, category, confirmFunc}) { 
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

    const [value, setValue] = useState(category ? category.name : "");
    return (
        <Modal open={open} onClose={closeFunc} aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography sx={{fontFamily: "Montserrat"}} variant="h6">
                    {category ? "Редактирование " : "Создание"} категории
                </Typography>
                <TextInput placeholder={category ? false : "Название категории"} badText="Минимум 3 символа" length={3} val={category ? category.name : false} setVal={setValue} />
                <div style={{position: "absolute", bottom: "-2rem", width: "100%"}}>
                    <div className="form-body__button" style={{width: "80%", margin: "0 auto", transform: "none"}} onClick={() => {confirmFunc(value);  closeFunc()}}>Сохранить</div>
                </div>
                <img src={close} onClick={closeFunc} className="modal-close"/>
            </Box>
		</Modal>
    )
}