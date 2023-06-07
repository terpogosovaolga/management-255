import { useState } from 'react';
import copy from '../../assets/img/document-copy.svg';

export default function PreviewAddress({link}) {

    const [message, setMessage] = useState("");
    const copyLink = () => {
        navigator.clipboard.writeText("https://site.com/preview/"+link);
        setMessage("Ссылка скопирована!");
        setTimeout(() => {
            setMessage("")
        }, 2000);
        console.log(message);
    }


    return (
        <>
            <div class="copia-content">
                <a href={"https://site.com/preview/"+link} id="copied___link" class="hover-transform copia-content__content editing-panel-link__content">{"https://site.com/preview/"+link}</a>
                <span class="copia-content__button" onClick={copyLink}><img src={copy} alt="" /></span>
            </div>
            <span style={{fontSize: "0.75rem",  fontFamily: "Montserrat", color: "rgba(0, 0, 0, 0.6);"}}>{message}</span>
        </>
    )
}