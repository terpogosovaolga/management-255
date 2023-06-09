import { Box, Modal, Typography } from "@mui/material";
import close from '../../../assets/img/close-modal.svg';
export default function DeleteCategoryConfirm({open, closeFunc, confirmFunc, name}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 400,
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
                <Typography>
                    Вы уверены, что хотите удалить рубрику "{name}"? Это действие безвозвратно.
                </Typography>
                <div className="d-flex justify-content-evenly align-items-center">
                    <div className="form-body__button pointer" style={{width: "40%", transform: "none"}} onClick={() => {confirmFunc(); closeFunc()}}>Удалить</div>
                    <div className="form-body__cancel-button pointer" onClick={closeFunc}>Отмена</div>
                </div>
                <img src={close} onClick={closeFunc} className="modal-close"/>
            </Box>
		</Modal>
    )
}