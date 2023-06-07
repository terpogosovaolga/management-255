import { Box, Modal, Typography } from "@mui/material";
import close from '../../../assets/img/close-modal.svg';
import TextInput from "../../common/inputs/TextInput";

export default function AddCategoryModal({open, closeFunc}) {

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
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
                <Typography sx={{fontFamily: "Montserrat"}}>
                    Добавление рубрики
                </Typography>
                <TextInput placeholder="Введите название категории" goodText="" badText="Минимальная длина - 2 символа" length={2} />
                <div style={{position: "absolute", bottom: "-2rem", width: "100%"}}><div className="form-body__button" style={{width: "80%", margin: "0 auto", transform: "none"}}>Сохранить</div></div>
                <img src={close} onClick={closeFunc} className="modal-close"/>
            </Box>
        </Modal>
    )
}