import React from 'react'
import styles from "./about.module.css"



export default function About() {
    return (
        <div className={styles.about}>
            <h1>About Edutor</h1>
            <div className={styles.info}>
                <span>Edutor</span> is an online doubt solver platform which supports realtime chat with one to one or one to many for asking and solving doubts. This platform also supports one to one video conferencing which helps user to ask there doubts directly to mentors.
            </div>

            <div className={styles.about_part}>
                <h3>
                    Video Conferencing
                </h3>
                <div className={styles.ab_part}>
                    <div className={styles.ab_txt}>
                        <h3>Connect to mentors via Video Conferencing</h3>
                        <h3>Builds a good relationship with the mentors</h3>
                    </div>
                    <div className={styles.ab_img}>
                        <img src="https://image.freepik.com/free-vector/telecommuting-concept-illustration_114360-1620.jpg" alt="" />
                    </div>
                </div>
                
            </div>


            <div className={styles.about_part}>
                <h3>
                    Realtime Chatting
                </h3>
                <div className={styles.ab_part}>
                   
                    <div className={styles.ab_img}>
                        <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2021/03/shutterstock_1779943838.jpg" alt="" />
                    </div>
                     <div className={styles.ab_txt}>
                        <h3>Chat with peers or mentors ans clear your doubts.</h3>
                        <h3>Make Communities and join other communities.</h3>
                        <h3>Ask Your doubts in communities.</h3>
                    </div>
                </div>
                
            </div>
            {/*video = https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPsDf9fsG7jjSslQEoiGN9eVq9-XH1b-low&usqp=CAU */}
            {/* chat = https://www.elegantthemes.com/blog/wp-content/uploads/2021/03/shutterstock_1779943838.jpg */}
        </div>
    )
}
