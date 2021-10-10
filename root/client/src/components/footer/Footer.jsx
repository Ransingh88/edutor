import React from 'react'
import styles from './Footer.module.css';
import FooterCol from './FooterCol';

const Footer = () => {
    return (
        <>
        <div className={styles.outer}>
           <div className={styles.container}>
                <div className={styles.leftPart}>
                    <h3>
                        Edutor
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae laudantium animi commodi ducimus dolor?
                    </p>
                    <div className={styles.footer_social}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className={styles.rightPart}>
                    <FooterCol />
                    <FooterCol />
                    <FooterCol />
                    <FooterCol />
                </div>
           </div> 
           </div>
        </>
    )
}

export default Footer
