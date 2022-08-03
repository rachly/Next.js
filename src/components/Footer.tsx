import styles from  '../../styles/footer.module.css';
import {Divider} from '@mui/material';
 
 const Footer=()=>{
    return(
        <div className={styles.footer}>
            <Divider/>
        <p> @ 2022 SPWS All RIGHT RESEVED</p>
        </div>
    )
 }
 export default Footer;