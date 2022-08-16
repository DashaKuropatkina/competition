import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='footer__top'>
                <div className='footer__media'>
                    <h5 className='footer__media-title'>Наши соцсети:</h5>
                    <div className='footer__media-icons'>
                        <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.8549 0.0213671C7.1876 0.186538 5.71085 0.708875 4.3843 1.6027C2.27587 3.02334 0.936768 4.96738 0.213403 7.65789L0 8.45145V17.393C0 25.8109 0.00877443 26.3758 0.15005 27.0383C1.00487 31.0465 4.05466 34.0945 7.98422 34.8678C8.88799 35.0456 24.9783 35.0434 25.9713 34.8653C29.4644 34.2388 32.3508 31.6717 33.4846 28.1834C34.0235 26.5253 34.0205 26.5907 33.9883 17.0727C33.9566 7.74391 33.9844 8.30971 33.4822 6.7711C32.5654 3.9622 30.3222 1.61595 27.5709 0.588164C27.2389 0.464058 26.6412 0.284564 26.2427 0.189187C25.5346 0.0196285 25.3339 0.0154056 17.3476 0.00257279C12.8537 -0.00463015 9.032 0.00381509 8.8549 0.0213671ZM27.3211 9.36507C27.4585 9.52602 27.5709 9.71064 27.5709 9.77538C27.5709 10.2183 24.3569 24.9151 24.1435 25.448C23.9876 25.8375 23.4163 26.0956 23.0132 25.9588C22.8564 25.9056 21.589 25.0835 20.1965 24.132C18.804 23.1805 17.6355 22.402 17.5998 22.402C17.564 22.402 17.0308 22.89 16.4148 23.4866C14.7136 25.1341 14.4914 25.263 14.0161 24.8785C13.7117 24.6322 13.6658 24.521 12.7701 21.8603C12.3263 20.5417 11.9229 19.3463 11.8737 19.204C11.7728 18.9116 11.9442 18.9764 9.2574 18.2143C6.76418 17.5071 6.48678 17.3874 6.3649 16.9665C6.27096 16.6419 6.60624 16.3836 7.64741 15.9785C8.17871 15.7719 10.2254 15.0046 12.1956 14.2737C14.1658 13.5427 17.6253 12.2558 19.8833 11.4139C25.8589 9.18607 26.1798 9.07513 26.657 9.07364C27.0311 9.07248 27.0954 9.10071 27.3211 9.36507ZM22.5794 12.6173C20.5573 13.7522 14.0609 17.5922 13.2118 18.1545L12.6581 18.521L12.7065 18.8843C12.755 19.248 13.8787 22.8235 14.045 23.143C14.0935 23.2363 14.1622 23.3127 14.1976 23.3127C14.233 23.3127 14.3237 22.7817 14.399 22.1329C14.4743 21.484 14.5734 20.7575 14.6192 20.5184L14.7025 20.0837L16.9307 18.2046C23.3638 12.7793 23.868 12.3393 23.868 12.1506C23.868 11.9546 23.5644 12.0645 22.5794 12.6173Z" fill="#1C8ADB" /></svg>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4279 0.086778C5.164 0.32055 2.39698 1.57388 1.17378 4.73121C0.388561 6.75819 0.126354 8.91263 0.0504934 13.9612L0 17.3226L0.239235 17.3223C1.04396 17.3214 4.67876 17.1356 5.93253 17.0314C10.1172 16.6833 12.1754 15.9627 14.0038 14.2057C15.1256 13.1277 15.7397 12.1588 16.2108 10.7235C16.8498 8.77652 17.1617 6.20668 17.2694 2.00034L17.3207 0L15.18 0.0132809C14.0026 0.0206224 12.3142 0.0537001 11.4279 0.086778ZM17.7085 0.804262C17.7086 1.85632 17.851 4.81897 17.9592 6.02165C18.3487 10.3506 19.1514 12.4687 21.0965 14.3004C22.8765 15.9765 24.9302 16.6707 29.1741 17.0304C29.9355 17.095 31.1348 17.1692 31.8393 17.1955C32.5438 17.2216 33.5431 17.2649 34.0601 17.2916L35 17.3401L34.9548 13.8049C34.9084 10.1697 34.8473 9.18723 34.5595 7.44763C34.3313 6.06785 34.0541 5.14662 33.5592 4.12442C33.1946 3.37122 33.0471 3.16632 32.4277 2.55236C31.614 1.74611 30.8981 1.33244 29.6081 0.923046C27.6027 0.28673 24.5658 0.00379451 19.7123 0.00107239L17.7083 0L17.7085 0.804262ZM0.0504934 21.0139C0.0782595 22.8627 0.139076 24.7836 0.185683 25.2827C0.625148 29.9917 1.67167 32.2253 4.01509 33.4559C5.98087 34.4882 8.32835 34.8273 14.2995 34.9414L17.2951 34.9987L17.295 33.8114C17.2947 32.334 17.165 29.8811 17.001 28.2523C16.611 24.3814 15.6081 22.0345 13.6304 20.3652C11.5437 18.6037 9.12637 18.0171 2.79231 17.735C1.7924 17.6905 0.755058 17.6538 0.487148 17.6533L0 17.6525L0.0504934 21.0139ZM31.798 17.7432C26.6708 17.9698 24.0531 18.5287 22.1607 19.8012C21.3919 20.3181 20.3203 21.3904 19.8114 22.1523C18.4627 24.1712 17.9148 27.0748 17.7357 33.1522L17.6812 35L20.6077 34.9432C24.0289 34.8769 25.6718 34.7814 27.2116 34.5593C33.488 33.654 34.9795 30.9189 34.9795 20.3142V17.6525L34.1325 17.665C33.6666 17.6718 32.6161 17.707 31.798 17.7432Z" fill="#2C3036" /></svg>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0136 0.0662877C8.55288 0.11746 8.1215 0.14611 7.56439 0.295568C4.36546 1.15323 1.92259 3.30725 0.717697 6.33268C0.54076 6.77717 0.33661 7.42029 0.264065 7.76185C-0.0311602 9.15309 -0.0890589 17.1227 0.142307 24.5293C0.237104 27.5623 0.28689 27.85 0.962377 29.2692C1.99372 31.4359 3.64456 33.0902 5.77062 34.0874C7.20605 34.7608 7.50938 34.8101 10.8488 34.9127C14.56 35.0267 24.1565 35.0298 25.8204 34.9174C26.5845 34.8659 27.2996 34.7672 27.6816 34.6605C31.1618 33.689 33.8951 30.8329 34.7621 27.2618C34.9307 26.5673 35.0704 15.3418 34.9615 11.2395C34.8895 8.5291 34.8674 8.23689 34.6778 7.4891C33.9418 4.58547 31.763 2.02249 29.0293 0.844795C27.5671 0.214752 27.1242 0.135014 24.6623 0.0580903C22.0764 -0.0227247 15.0886 -0.0185019 11.0136 0.0662877ZM9.8151 10.722C9.81559 10.7561 9.86986 11.2923 9.93571 11.9133C10.225 14.642 10.8618 16.619 11.9455 18.1535C12.7641 19.3126 14.1829 20.4979 14.931 20.6477C15.3997 20.7415 15.3953 20.7876 15.4227 15.4832L15.4477 10.6599H17.3399H19.2322L19.2619 13.3717C19.2782 14.8631 19.3221 16.1487 19.3594 16.2284C19.5673 16.672 20.8869 16.0327 22.0389 14.9303C22.9783 14.0313 23.7389 12.9224 24.331 11.5887L24.7432 10.6599H26.5506H28.3579L28.3017 11.0118C27.9891 12.9695 26.2915 15.6681 24.4263 17.1723C24.0557 17.4712 23.7243 17.7648 23.69 17.8246C23.6468 17.8998 23.9015 18.1448 24.5172 18.6202C26.3421 20.0293 27.5552 21.394 28.3431 22.9247C28.6755 23.5704 29.2533 24.9605 29.2533 25.1146C29.2533 25.1343 28.3416 25.1503 27.2274 25.1503H25.2015L24.7776 24.3016C24.2233 23.1915 23.794 22.5977 22.9896 21.8287C21.9902 20.8733 20.7711 20.2403 19.5958 20.0666L19.2442 20.0146V22.6218V25.229L19.0167 25.1936C18.8916 25.174 18.324 25.137 17.7553 25.1112C16.448 25.0519 15.3501 24.8718 14.4236 24.5647C13.5717 24.2822 12.2418 23.6324 11.5416 23.1565C8.28793 20.9448 6.3762 16.9249 5.96261 11.4259L5.90503 10.6599H7.85961C8.93463 10.6599 9.8146 10.6879 9.8151 10.722Z" fill="#4478E5" /></svg>
                    </div>
                </div>
                <div className='footer__nav'>
                    <p className='footer__nav-title'>Главная</p>
                    <p className='footer__nav-title'>Личный кабинет</p>
                    <p className='footer__nav-title'>Контакты</p>
                    <p className='footer__nav-title'>Конфиденциальность</p>
                </div>
                <div className='footer__media-close'>
                    <h5 className='footer__media-title'>Наши соцсети:</h5>
                    <img className='footer__img' src="./img/button.svg" alt="img" />
                </div>
            </div>
            <div className='footer__bottom'>
                <p className='footer__bottom-text'>@ Все права защищены. ООО”Слонум” 2022</p>
            </div>
        </footer>
    )
}
