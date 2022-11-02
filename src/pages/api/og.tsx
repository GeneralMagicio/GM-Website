import { ImageResponse } from '@vercel/og';

export const config = {
    runtime: 'experimental-edge',
};

export default async function handler() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    fontSize: 40,
                    color: 'black',
                    background: '#161718',
                    backgroundImage:
                        "linear-gradient(20.02deg,#71dde4 -4.17%,#fa78b9 23.12%,#a569ff 66.92%)",
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <svg width="624" height="253" viewBox="0 0 124 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.53907 44.3127L8.24213 44.8991C8.21516 44.9199 8.18715 44.9392 8.15821 44.9572C8.14332 44.9654 8.12678 44.9702 8.1098 44.9712C5.52775 44.9762 2.94856 44.9805 0.372246 44.9841C0.27004 44.9841 0.167833 44.9733 0.065627 44.9647C0.0516409 44.9647 0.0387308 44.9486 0 44.9238C0.0462618 44.6893 0.236688 44.5236 0.336743 44.3127C0.444328 44.0803 0.649817 43.9674 0.868215 43.8533C2.18506 43.1659 2.97044 42.0577 3.32224 40.6387C3.42992 40.1697 3.49474 39.6918 3.5159 39.211C3.62778 37.357 3.72748 35.5026 3.81498 33.6478C3.87631 32.3256 3.91504 31.0023 3.94947 29.679C3.98799 28.3442 3.61584 27.0299 2.88329 25.9135C2.8564 25.8704 2.8295 25.8263 2.80368 25.7811C2.79265 25.7568 2.78366 25.7316 2.77678 25.7058C2.90531 25.3379 3.07151 24.9842 3.27275 24.6504H11.8161C12.0695 24.9682 12.3061 25.2989 12.5251 25.6413C12.5835 25.745 12.6136 25.8622 12.6123 25.9812C12.6589 26.91 12.8778 27.8221 13.2578 28.6709C13.7267 29.7626 14.3459 30.7834 15.0975 31.7037C15.161 31.7822 15.2352 31.8522 15.3051 31.9253C15.4568 31.8844 15.4837 31.7586 15.5375 31.6607C16.0217 30.7485 16.3618 29.7668 16.5456 28.7505C16.7211 27.8209 16.8144 26.8777 16.8242 25.9317C16.8242 25.8242 16.8328 25.7263 16.8382 25.609C17.2137 25.2862 17.6365 25.0183 18.0356 24.7225C18.1533 24.6498 18.2922 24.6195 18.4294 24.6364H19.7204H26.324H26.862L27.5462 25.8037C27.5233 25.8874 27.4956 25.9696 27.4634 26.0501C26.9491 27.155 26.7027 28.3298 26.5661 29.5294C26.3509 31.3982 26.3886 33.2702 26.5284 35.1432C26.7605 38.074 27.2097 40.9836 27.8722 43.848C27.8991 43.9652 27.9217 44.0836 27.9443 44.2019C27.9471 44.2428 27.9471 44.2837 27.9443 44.3246C27.7708 44.53 27.5761 44.7164 27.3633 44.8808C27.296 44.9319 27.216 44.9635 27.132 44.9722C27.0121 44.9819 26.8917 44.9841 26.7716 44.9787H17.3084C17.1577 44.6107 17.0143 44.264 16.878 43.9383C17.1115 43.1852 17.3482 42.4698 17.5569 41.7447C18.1282 39.7968 18.5024 37.7964 18.6736 35.7737C18.8533 33.5531 18.7941 31.3411 18.2928 29.1582C18.2314 28.8903 18.1529 28.6268 18.0776 28.3621C18.0566 28.3221 18.0294 28.2858 17.9969 28.2545C17.8667 28.2879 17.8958 28.3911 17.8839 28.4643C17.1994 32.659 15.9738 36.7473 14.2379 40.6269C13.7508 41.7275 13.2078 42.8026 12.6112 43.848C12.5176 44.0104 12.4175 44.1707 12.3121 44.3429C11.9006 44.2452 11.497 44.1164 11.105 43.9577C11.0706 43.8125 11.0254 43.6661 10.9974 43.5166C10.4659 39.8479 9.20072 36.4342 7.40511 33.2056C6.88832 32.2731 6.31825 31.3711 5.69773 30.5041C5.60198 30.3718 5.5299 30.2104 5.3825 30.134C5.27492 30.1824 5.29966 30.261 5.29966 30.3223C5.30612 33.4003 5.31042 36.4784 5.32871 39.5564C5.33056 39.9858 5.37307 40.4141 5.45566 40.8356C5.61645 41.5798 5.9777 42.2658 6.50032 42.8194C6.95229 43.3172 7.48473 43.7354 8.07537 44.0567L8.53907 44.3127Z" fill="white" />
                    <path d="M77.3495 22.2339C77.9807 21.1229 78.4101 19.9089 78.6179 18.6481C78.7925 17.6479 78.8599 16.6319 78.8191 15.6174C78.7266 13.2505 78.1176 11.0052 77.1956 8.83951L76.9805 8.34031L77.9595 6.67919C78.3447 6.73729 78.7126 6.79753 79.0859 6.85025C80.8643 7.09985 82.647 7.18914 84.4351 6.98366C84.93 6.92771 85.4206 6.83196 85.9144 6.76848C87.4464 6.56838 88.9676 6.61356 90.4685 7.0084C91.3215 7.2195 92.1331 7.57187 92.8698 8.05091C94.4556 9.11062 95.3636 10.5792 95.5153 12.492C95.6627 14.3371 95.0634 15.9079 93.738 17.1968C93.2451 17.681 92.6478 18.0457 91.9919 18.2629C91.8951 18.2941 91.8025 18.3382 91.681 18.3877C91.7421 18.4327 91.806 18.4737 91.8725 18.5104C92.4857 18.7858 92.8805 19.2635 93.157 19.8638C93.399 20.4154 93.5595 20.9992 93.6336 21.597C93.7886 22.6417 93.7412 23.6895 93.7272 24.7385C93.7154 25.5992 93.7111 26.4599 93.7434 27.3206C93.7744 28.1122 93.9119 28.896 94.1522 29.6509C94.2956 30.1292 94.5134 30.5819 94.7977 30.9924C95.2565 31.6364 95.9409 32.0841 96.7147 32.2466C97.4885 32.409 98.2951 32.2743 98.9742 31.8693C99.2084 31.7258 99.4207 31.5493 99.6046 31.3453C100.109 30.7837 100.18 30.0995 99.8198 29.4335C99.7169 29.2549 99.6041 29.0821 99.482 28.916C99.1722 28.4798 98.9527 27.986 98.8365 27.4636C98.7476 27.0589 98.7446 26.6399 98.8279 26.2339C99.113 24.8956 100.22 24.065 101.657 24.0951C102.546 24.1145 103.239 24.5083 103.772 25.2011C104.176 25.7397 104.445 26.3667 104.558 27.0301C105.014 29.4411 104.235 32.9925 100.562 34.5718C98.3265 35.5326 96.0543 35.5573 93.7843 34.6665C92.5042 34.1742 91.4277 33.2644 90.7288 32.0844C90.0441 30.9284 89.5589 29.6652 89.2936 28.348C89.0847 27.3203 88.941 26.2803 88.8633 25.2345C88.7718 24.1586 88.6836 23.0752 88.5588 21.9994C88.494 21.5058 88.3908 21.018 88.2501 20.5405C88.16 20.2445 88.0336 19.9608 87.8735 19.696C87.7327 19.4481 87.5414 19.2325 87.3119 19.0633C87.0825 18.8941 86.82 18.775 86.5416 18.7137C86.4415 18.6899 86.3403 18.6716 86.2382 18.6588C86.0037 18.6309 85.7681 18.6072 85.4959 18.5781C85.4238 19.8294 85.342 21.0451 85.8369 22.2565L85.3356 23.2506C85.2075 23.2635 85.0903 23.285 84.9741 23.285C82.8762 23.285 80.7782 23.285 78.6792 23.285C78.569 23.2945 78.458 23.2775 78.3556 23.2354C78.2532 23.1933 78.1624 23.1273 78.0908 23.0429C77.8681 22.7729 77.6141 22.5212 77.3495 22.2339ZM85.4259 8.42746C85.3108 8.62111 85.3614 8.81369 85.3657 8.99766C85.4087 10.9916 85.455 12.9855 85.5045 14.9794C85.5045 15.0483 85.512 15.1171 85.5099 15.1849C85.5031 15.2974 85.5223 15.4099 85.566 15.5138C85.6096 15.6177 85.6766 15.7102 85.7616 15.7842C85.9493 15.9588 86.1561 16.1118 86.3781 16.2403C86.7783 16.4555 87.2215 16.5104 87.6755 16.5147C88.7751 16.5243 90.0274 15.8756 90.3426 14.3156C90.4566 13.7062 90.4566 13.081 90.3426 12.4716C90.252 11.8567 90.0328 11.2679 89.6991 10.7437C89.3653 10.2194 88.9247 9.77141 88.4061 9.42908C87.6282 8.91553 86.7465 8.58012 85.824 8.44682C85.6918 8.43247 85.5589 8.42601 85.4259 8.42746Z" fill="white" />
                    <path d="M13.9711 13.0408C14.211 12.7353 14.4251 12.4663 14.6328 12.193C14.675 12.1282 14.7329 12.075 14.8012 12.0385C14.8695 12.002 14.9459 11.9834 15.0233 11.9843C15.0921 11.9843 15.161 11.9779 15.2299 11.9757C17.274 11.904 19.3181 11.8323 21.3622 11.7605C21.5849 11.7519 21.8087 11.7605 22.0626 11.7605C22.332 12.0426 22.5764 12.3475 22.7931 12.6718C22.692 13.1075 22.5909 13.5411 22.4919 13.9757C22.128 15.5332 21.9144 17.122 21.8539 18.7202C21.808 19.6657 21.8847 20.6132 22.082 21.539C22.1315 21.7542 22.1218 21.9284 21.955 22.1049C21.6839 22.3921 21.444 22.7084 21.1879 23.0097C21.1368 23.0604 21.0822 23.1075 21.0244 23.1506C20.9039 23.0333 20.7931 22.9279 20.6834 22.8203C20.34 22.4803 19.9502 22.1906 19.5257 21.9597C19.0972 21.7193 18.6225 21.5727 18.1331 21.5295C17.6436 21.4863 17.1506 21.5475 16.6866 21.709C15.8065 22.0002 14.9211 22.2749 14.0303 22.5331C12.8729 22.8689 11.6825 23.0781 10.4799 23.1571C9.50005 23.2238 8.5159 23.1252 7.56868 22.8655C6.51887 22.5744 5.55773 22.0273 4.77146 21.2733C3.10359 19.7078 1.96366 17.6625 1.50947 15.4206C0.867464 12.4896 1.18505 9.42989 2.41534 6.69326C3.82471 3.49905 6.96621 0.967557 10.3702 0.217686C11.7688 -0.0910845 13.1674 -0.0534295 14.566 0.217686C15.9485 0.485574 17.3375 0.723337 18.7275 0.946039C19.1534 0.999365 19.583 1.01879 20.012 1.00414C20.3576 0.994616 20.6955 0.89962 20.9954 0.72764C21.1309 0.655558 21.2622 0.578098 21.4257 0.48665L22.1788 1.11387C22.2256 1.15279 22.2624 1.20248 22.2858 1.2587C22.3092 1.31491 22.3186 1.37597 22.3133 1.43663C22.3133 1.48827 22.3133 1.54421 22.3133 1.59155C22.352 3.75689 22.3907 5.92295 22.4295 8.08972C22.4295 8.24357 22.4295 8.39634 22.4295 8.56202C22.1379 8.61366 21.9152 8.4738 21.6549 8.40602C21.5752 8.24464 21.4913 8.07681 21.4117 7.9079C20.7113 6.4243 19.8754 5.02676 18.8006 3.78092C18.2903 3.17497 17.7004 2.64081 17.047 2.19296C16.4815 1.79807 15.8405 1.52445 15.1642 1.38929C14.6321 1.27888 14.0822 1.28539 13.5528 1.40836C13.0234 1.53133 12.5271 1.76783 12.098 2.10151C11.6091 2.48388 11.1954 2.95375 10.878 3.48721C10.3657 4.34441 9.98453 5.27349 9.74729 6.24355C9.4792 7.29289 9.29642 8.36219 9.20076 9.441C9.1047 10.4684 9.08062 11.5012 9.12867 12.5319C9.19215 14.0306 9.39011 15.5099 9.83551 16.9483C10.0323 17.6077 10.3049 18.242 10.6478 18.8386C10.873 19.2445 11.1565 19.6153 11.4891 19.9392C11.6899 20.1263 11.9058 20.2965 12.1346 20.4481C12.9953 21.0021 13.9012 21.0699 14.8307 20.6245C15.9152 20.1027 16.6489 19.2861 16.9017 18.0866C17.0279 17.4577 16.965 16.8056 16.721 16.2124C16.4158 15.4069 15.965 14.6644 15.3912 14.022C15.0416 13.6358 14.6467 13.3087 14.1389 13.1452C14.0796 13.1161 14.0234 13.0812 13.9711 13.0408Z" fill="white" />
                    <path d="M60.1016 22.1988L59.3055 23.0594C58.8525 23.1132 53.5055 23.1261 52.5835 23.0767C52.3522 22.8002 52.1015 22.4968 51.8444 22.1998C51.8007 22.1472 51.7705 22.0848 51.7564 22.0178C51.7423 21.9509 51.7448 21.8815 51.7637 21.8158C51.9455 20.8539 52.1413 19.8932 52.293 18.926C52.5308 17.4134 52.689 15.8921 52.6524 14.3568C52.6402 13.7547 52.5721 13.1551 52.449 12.5655C52.3779 12.2105 52.2418 11.8717 52.0478 11.5661C51.8734 11.2885 51.6442 11.0495 51.3743 10.8635C50.6438 10.3697 49.8143 10.3999 49.1247 10.9496C48.7627 11.244 48.4802 11.6242 48.3027 12.0556C48.2494 12.1998 48.2238 12.3527 48.2274 12.5064C48.2283 13.349 48.2804 14.1908 48.3834 15.0271C48.6314 17.2149 49.045 19.3807 49.6206 21.5059C49.6493 21.5862 49.6586 21.6722 49.6475 21.7567C49.6365 21.8413 49.6055 21.922 49.5571 21.9922C49.314 22.3462 49.0848 22.7087 48.8611 23.0519C48.4393 23.1175 41.9584 23.1391 41.1214 23.0788C40.8492 22.6291 40.6136 22.1364 40.3467 21.6436C40.3995 21.493 40.4436 21.3467 40.5006 21.2057C41.0641 19.8374 41.4593 18.4057 41.6776 16.9421C41.9842 14.7979 41.8572 12.6903 41.1128 10.6387C40.8537 9.9091 40.503 9.21536 40.0692 8.57412C40.0208 8.50419 39.9799 8.42888 39.9175 8.32668C40.2015 7.73281 40.5017 7.14324 40.8126 6.57411C41.2311 6.51278 47.7863 6.4988 48.406 6.55689C48.6155 6.94178 48.7953 7.34208 48.9439 7.75432C48.9647 7.8705 48.9509 7.99023 48.9041 8.0986C48.804 8.42673 48.6889 8.75057 48.5813 9.07763C48.5617 9.17105 48.5473 9.26552 48.5383 9.36058C48.6696 9.21749 48.7535 9.1454 48.8191 9.05288C49.1267 8.63836 49.4784 8.2585 49.8681 7.92C51.1978 6.7796 52.7535 6.29654 54.4942 6.34065C55.4416 6.35087 56.3729 6.58692 57.2108 7.0292C58.2931 7.61446 59.0322 8.47945 59.313 9.69624C59.4119 10.1507 59.4423 10.6174 59.4034 11.0809C59.2775 12.8474 59.1656 14.6161 59.1882 16.3881C59.2022 17.6608 59.2517 18.9314 59.4518 20.1923C59.5594 20.8862 59.71 21.5705 60.1016 22.1988Z" fill="white" />
                    <path d="M46.5082 40.5958C46.3931 40.4688 46.2877 40.3591 46.1855 40.2439C44.5244 38.3235 44.0542 36.1417 44.9213 33.7587C45.6519 31.7511 47.1892 30.6161 49.2678 30.2224C50.6255 29.9663 51.9348 30.1869 53.1968 30.7312L53.497 30.8593C53.6186 30.7592 53.7369 30.6645 53.852 30.5666C54.5151 29.9891 55.2773 29.5364 56.1016 29.2304C56.9967 28.9077 57.9091 28.8205 58.8354 29.0884C59.3689 29.2351 59.8607 29.5044 60.2717 29.8749C60.972 30.5204 61.2163 31.465 60.8935 32.3224C60.6783 32.9002 60.2953 33.3251 59.6681 33.4693C59.416 33.5307 59.1528 33.5311 58.9006 33.4702C58.6483 33.4094 58.4142 33.2892 58.2178 33.1196C58.0395 32.9818 57.9043 32.7958 57.8281 32.5837C57.7518 32.3715 57.7377 32.1421 57.7875 31.9222C57.8415 31.706 57.9087 31.4933 57.9887 31.2853C58.107 30.9206 57.9887 30.671 57.6132 30.5838C57.3967 30.5332 57.1719 30.5291 56.9537 30.572C56.6859 30.6325 56.4285 30.7322 56.1899 30.8679C55.7627 31.1146 55.384 31.4368 55.072 31.8189C55.1527 31.8856 55.2205 31.9523 55.298 32.0061C57.4497 33.5005 58.2727 35.5715 57.9607 38.132C57.7014 40.2569 56.1231 42.3279 53.4303 42.8819C51.9757 43.181 50.5943 42.9261 49.2807 42.2536C49.1301 42.1762 48.9805 42.0966 48.8063 42.0041C48.7308 42.1206 48.6812 42.252 48.661 42.3894C48.6408 42.5267 48.6503 42.6668 48.689 42.8002C48.7273 42.924 48.7909 43.0384 48.8757 43.1364C48.9605 43.2344 49.0647 43.3137 49.1817 43.3693C49.4882 43.5274 49.8241 43.6201 50.1683 43.6415C51.0101 43.6984 51.8557 43.6449 52.6836 43.4823C53.7154 43.2778 54.7788 43.2947 55.8036 43.5318C55.9532 43.5683 56.1027 43.6092 56.2501 43.6555C58.1372 44.2483 58.8752 45.9417 58.7967 47.4113C58.7412 48.3806 58.3766 49.3067 57.7563 50.0536C57.1155 50.8476 56.2925 51.475 55.3571 51.8825C54.3934 52.2982 53.3767 52.5784 52.3361 52.7153C51.1287 52.9043 49.9022 52.9405 48.6858 52.8229C47.8465 52.7479 47.0185 52.5775 46.2178 52.315C45.8087 52.1813 45.4215 51.9881 45.0687 51.7416C44.7477 51.5225 44.4823 51.2313 44.2938 50.8913C44.1053 50.5513 43.9989 50.172 43.9832 49.7836C43.9735 49.6286 43.9735 49.4737 43.9746 49.3188C43.9746 48.6442 44.2898 48.1353 44.8407 47.7674C45.15 47.5628 45.4973 47.4225 45.862 47.3549C46.2266 47.2872 46.6012 47.2936 46.9633 47.3736C47.1764 47.4096 47.3789 47.492 47.5565 47.6151C47.7341 47.7382 47.8823 47.899 47.9908 48.0859C48.7266 49.3091 49.8477 49.875 51.242 49.9546C51.9475 50.015 52.6572 49.9043 53.3109 49.6319C53.5786 49.514 53.8314 49.3649 54.064 49.1875C54.6525 48.7378 54.5341 47.8255 53.9951 47.4457C53.6373 47.2033 53.2188 47.0662 52.7869 47.0498C52.1509 47.006 51.512 47.0667 50.8956 47.2295C50.2496 47.4146 49.5775 47.492 48.9063 47.4586C47.9811 47.3941 47.1118 47.1488 46.3382 46.6238C45.5292 46.0751 45.0106 45.3327 44.9332 44.3365C44.8837 43.6995 44.9817 43.0597 45.2194 42.4667C45.4419 41.9049 45.7707 41.3913 46.1876 40.954L46.5082 40.5958ZM53.0139 36.9099C52.9817 36.6301 52.9397 36.0825 52.8515 35.5414C52.7633 34.9803 52.5895 34.436 52.3361 33.9276C52.1971 33.6314 51.9991 33.3667 51.7541 33.1498C51.6124 33.0233 51.438 32.9392 51.2508 32.9072C51.0635 32.8753 50.8711 32.8967 50.6955 32.969C50.3709 33.0895 50.0954 33.3142 49.9122 33.6081C49.698 33.9407 49.5443 34.3085 49.4582 34.6947C49.2308 35.6843 49.2143 36.7107 49.4098 37.7071C49.505 38.3014 49.6934 38.8769 49.9682 39.4123C50.1071 39.6894 50.2965 39.9382 50.5266 40.146C51.115 40.6549 51.8477 40.5871 52.3351 39.9782C52.5313 39.7173 52.6772 39.4222 52.7654 39.1078C52.9677 38.4817 53.0075 37.8319 53.0139 36.9088V36.9099Z" fill="white" />
                    <path d="M112.558 22.532C112.417 22.8181 112.362 23.0699 112.181 23.2851H104.637C104.474 23.1065 104.391 22.8816 104.286 22.6535C104.52 22.2673 104.804 21.8897 104.626 21.3367C104.48 21.4604 104.362 21.5519 104.254 21.6519C103.611 22.2515 102.891 22.7611 102.112 23.1667C101.428 23.5335 100.684 23.7719 99.9147 23.8703C98.6065 24.0188 97.4639 23.6476 96.5053 22.7525C96.1511 22.4329 95.8799 22.0319 95.7151 21.5842C95.5504 21.1364 95.497 20.6553 95.5596 20.1823C95.7339 18.4954 96.6204 17.2366 97.99 16.2931C98.5871 15.8799 99.2552 15.6013 99.9373 15.3614C100.651 15.1107 101.369 14.8794 102.089 14.6352C102.661 14.4523 103.213 14.2108 103.736 13.9144C104.204 13.6517 104.586 13.259 104.836 12.7836C105.016 12.4494 105.122 12.0805 105.147 11.7017C105.173 11.3229 105.117 10.9431 104.983 10.5878C104.905 10.3788 104.799 10.1815 104.667 10.0015C104.219 9.3807 103.535 9.16769 102.742 9.45386C102.149 9.66903 101.829 10.0994 101.786 10.7309C101.747 11.0922 101.811 11.4571 101.972 11.7831C101.999 11.8461 102.03 11.9075 102.064 11.9671C102.684 12.8643 101.957 14.3651 100.795 14.632C99.309 14.973 97.4209 13.9283 97.3606 12.0316C97.3133 10.5157 97.9298 9.25698 99.0755 8.26612C99.8459 7.60124 100.754 7.20102 101.737 6.96864C103.753 6.49203 105.733 6.60177 107.654 7.40758C109.735 8.28225 110.977 9.84978 111.351 12.0757C111.426 12.569 111.45 13.0687 111.423 13.5669C111.381 14.6664 111.305 15.7638 111.234 16.8622C111.17 17.8412 111.115 18.8203 111.189 19.7993C111.221 20.1929 111.293 20.5821 111.404 20.9612C111.556 21.5502 111.911 22.0667 112.406 22.4201C112.437 22.4523 112.48 22.4803 112.558 22.532ZM104.954 15.4797C104.864 15.5271 104.823 15.5346 104.809 15.5583C104.492 16.0639 104.014 16.3479 103.477 16.561C103.205 16.6643 102.938 16.7814 102.678 16.9117C102.137 17.1901 101.726 17.6689 101.534 18.2458C101.378 18.6761 101.407 19.0871 101.705 19.4582C102.234 20.1145 103.641 20.447 104.438 19.5067C104.704 19.1907 104.893 18.8178 104.992 18.4168C105.233 17.4485 105.16 16.4835 104.95 15.4797H104.954Z" fill="white" />
                    <path d="M123.562 21.9458L122.695 23.2809C122 23.3143 121.296 23.2917 120.597 23.296C119.898 23.3003 119.188 23.296 118.483 23.296C117.778 23.296 117.073 23.296 116.368 23.296C115.663 23.296 114.962 23.3014 114.238 23.296C113.987 22.8248 113.747 22.3708 113.504 21.9189C113.479 21.8648 113.466 21.8059 113.466 21.7462C113.466 21.6866 113.479 21.6276 113.504 21.5735C113.674 21.0507 113.844 20.5278 113.997 20.0007C115.009 16.4716 115.343 12.7826 114.981 9.12913C114.732 6.72567 114.228 4.3803 113.304 2.13607C113.285 2.08873 113.269 2.04032 113.238 1.94995L114.167 0.127449C115.579 0.114539 116.964 0.169408 118.357 0.174787C119.75 0.180166 121.137 0.197377 122.539 0.209212C122.783 0.649237 122.946 1.1011 123.135 1.52929C122.958 2.20493 122.771 2.8655 122.611 3.53145C122.232 5.1555 121.992 6.80902 121.895 8.47393C121.818 9.58894 121.798 10.7071 121.834 11.8241C121.951 15.1378 122.44 18.3869 123.448 21.5585C123.479 21.6607 123.512 21.779 123.562 21.9458Z" fill="white" />
                    <path d="M30.0875 14.5128C30.043 14.892 30.0354 15.2747 30.0649 15.6554C30.1012 16.4127 30.2763 17.157 30.5813 17.8512C30.8203 18.4261 31.2007 18.9313 31.6873 19.3197C32.6319 20.0405 33.6712 20.2202 34.7965 19.8071C35.1552 19.6771 35.4729 19.4543 35.7175 19.1616C35.8734 18.9882 35.9819 18.7773 36.0322 18.5496C36.0826 18.3218 36.0731 18.0849 36.0047 17.8619C35.9227 17.6004 35.8704 17.3304 35.8487 17.0572C35.8035 15.9383 36.718 15.0916 37.8649 15.3154C38.9246 15.5209 39.597 16.2837 39.6379 17.4068C39.6542 17.8559 39.5761 18.3034 39.4087 18.7205C38.4631 21.1089 36.7449 22.6086 34.2134 23.0938C31.6819 23.579 28.5222 22.6979 26.5146 20.8205C25.2171 19.6102 24.4318 18.1105 24.0477 16.3891C23.3129 13.083 24.7093 9.5574 27.4657 7.7037C29.5001 6.33521 31.7271 5.9393 34.108 6.58051C35.1916 6.88063 36.1783 7.45797 36.9708 8.25562C38.1091 9.36482 38.8805 10.6806 39.185 12.2513C39.2318 12.5394 39.2524 12.831 39.2463 13.1228C39.2405 13.2767 39.2137 13.4291 39.1667 13.5757C39.1013 13.8286 38.9532 14.0523 38.746 14.2112C38.5387 14.3701 38.2842 14.4551 38.023 14.4525C37.129 14.4525 36.235 14.4687 35.3399 14.4751L30.8008 14.4988C30.5781 14.4945 30.3629 14.5053 30.0875 14.5128ZM33.7293 13.1873C33.7495 13.1169 33.7639 13.0449 33.7723 12.9722C33.8162 12.1649 33.7488 11.3555 33.5722 10.5666C33.4918 10.1967 33.358 9.84045 33.1752 9.50899C33.0383 9.24949 32.8431 9.02523 32.605 8.85379C31.9391 8.39978 31.0988 8.417 30.6211 9.26369C30.4649 9.54963 30.3459 9.85443 30.2672 10.1706C30.0165 11.1282 29.9982 12.1072 30.0714 13.0873C30.0714 13.1153 30.109 13.1411 30.1532 13.2002C31.243 13.2089 32.3576 13.2185 33.4722 13.2239C33.5587 13.2187 33.6447 13.2065 33.7293 13.1873Z" fill="white" />
                    <path d="M67.1768 14.5535C67.1551 14.6347 67.1393 14.7174 67.1295 14.8009C67.0807 15.731 67.2178 16.6615 67.5329 17.5379C67.7489 18.177 68.1257 18.7498 68.6271 19.2012C69.5125 19.9672 70.5281 20.1974 71.6567 19.8886C72.0071 19.7932 72.3297 19.6158 72.5981 19.3711C73.0704 18.9408 73.2716 18.4276 73.0607 17.7939C72.916 17.4054 72.8854 16.9836 72.9725 16.5782C73.1812 15.7046 73.9235 15.1796 74.8143 15.299C75.9666 15.4496 76.6852 16.2619 76.7121 17.4335C76.7222 17.9338 76.6243 18.4303 76.4249 18.8892C75.4416 21.2173 73.7202 22.6611 71.2188 23.1087C68.5023 23.596 64.9703 22.5589 62.9347 20.1361C61.846 18.8552 61.1708 17.2746 60.9982 15.6024C60.6873 12.7202 61.6233 10.2834 63.7492 8.32426C64.9864 7.18493 66.4732 6.55985 68.1451 6.35329C69.2912 6.19883 70.4575 6.31564 71.5502 6.69434C72.6739 7.09406 73.6747 7.77834 74.455 8.68037C75.3382 9.65373 75.953 10.8402 76.2388 12.1231C76.3322 12.5266 76.3508 12.9437 76.2936 13.3539C76.228 13.7842 76.0257 14.1285 75.6212 14.3318C75.4327 14.4175 75.2267 14.4577 75.0198 14.4491C74.2119 14.4566 73.406 14.4663 72.5959 14.4706C71.0478 14.4803 69.5007 14.4846 67.9525 14.4964C67.704 14.4964 67.4458 14.4674 67.1768 14.5535ZM70.8218 13.1731C70.8812 12.5643 70.8711 11.9507 70.7917 11.3442C70.7419 10.7965 70.6046 10.2604 70.385 9.75622C70.2097 9.37645 69.9848 9.03109 69.618 8.80947C68.8487 8.34577 68.1053 8.55019 67.7148 9.25272C67.5488 9.55282 67.4226 9.87325 67.3393 10.2059C67.1218 11.1451 67.0553 12.113 67.1424 13.0731C67.1424 13.1021 67.1758 13.1301 67.1941 13.1581C67.6233 13.2302 70.3624 13.2474 70.8218 13.1731Z" fill="white" />
                    <path d="M43.7033 44.4031C43.6011 44.6409 43.5194 44.8334 43.4311 45.0325C43.3322 45.0533 43.2319 45.0669 43.131 45.0734C41.0675 45.0734 39.004 45.0734 36.9405 45.0734C36.8899 45.0734 36.8383 45.0626 36.7651 45.0551C36.6242 44.9174 36.5597 44.7216 36.4596 44.5171C36.6414 44.1815 36.9029 43.8587 36.777 43.4413C36.6307 43.3692 36.579 43.4886 36.5123 43.5489C35.8775 44.1568 35.1515 44.6618 34.3606 45.0454C33.6075 45.4069 32.8211 45.636 31.9744 45.5919C31.5 45.5762 31.0338 45.4647 30.6036 45.2643C30.1734 45.0639 29.7881 44.7787 29.4708 44.4257C28.7844 43.6726 28.6521 42.7721 28.8759 41.8211C29.1674 40.5763 29.8904 39.6177 30.9501 38.9162C31.4273 38.6086 31.9399 38.3597 32.4768 38.175C33.0739 37.9598 33.6807 37.7672 34.2799 37.5564C34.6683 37.4197 35.061 37.2895 35.4343 37.1163C35.7483 36.9773 36.0451 36.8022 36.3187 36.5945C36.7334 36.2656 37.0252 35.8066 37.1472 35.2916C37.2692 34.7765 37.2142 34.2353 36.9911 33.7554C36.791 33.3358 36.5026 33.0023 36.0357 32.8775C35.4709 32.7225 34.9846 32.8775 34.5693 33.2777C34.4216 33.4224 34.3249 33.6112 34.2939 33.8156C34.2022 34.2399 34.2632 34.683 34.466 35.0668C34.6161 35.2993 34.6985 35.5691 34.7038 35.8457C34.6857 36.1825 34.5724 36.5072 34.3769 36.782C34.1815 37.0568 33.9121 37.2705 33.6 37.3982C33.2608 37.5281 32.8932 37.5652 32.5349 37.5058C31.0706 37.268 30.1562 36.0136 30.3982 34.5536C30.6134 33.226 31.2933 32.1868 32.4424 31.4745C33.0731 31.0861 33.7701 30.8173 34.4983 30.6816C36.0852 30.3707 37.6484 30.4525 39.1643 31.0388C39.5809 31.1987 39.98 31.401 40.3553 31.6424C41.6936 32.5031 42.4263 33.7618 42.6608 35.324C42.7321 35.818 42.7509 36.3182 42.7168 36.8162C42.6468 37.949 42.5705 39.0808 42.5016 40.2137C42.441 40.9337 42.4547 41.658 42.5425 42.3751C42.5958 42.7851 42.7211 43.1825 42.9126 43.5489C43.0977 43.8973 43.3702 44.1917 43.7033 44.4031ZM37.033 38.2019C36.3735 38.899 36.3735 38.898 35.473 39.2777C35.2984 39.3481 35.1281 39.429 34.9631 39.5198C34.5253 39.7691 34.1956 40.1721 34.0378 40.6505C33.9628 40.8257 33.938 41.0183 33.9661 41.2067C33.9942 41.3952 34.0742 41.5721 34.1971 41.7178C34.6651 42.2837 35.8582 42.5473 36.5414 41.7995C36.807 41.5046 36.9922 41.1464 37.0793 40.7592C37.2783 39.9265 37.2256 39.0959 37.033 38.2019Z" fill="white" />
                    <path d="M81.7069 40.0923C82.2975 40.372 82.8774 40.6194 83.4519 40.9357C83.41 41.0562 83.3852 41.1509 83.3443 41.2434C83.1035 41.7394 82.7793 42.1903 82.3857 42.5764C81.299 43.6668 79.9249 44.426 78.4234 44.7658C77.0981 45.092 75.7107 45.0679 74.3975 44.6959C73.0263 44.3216 71.8118 43.5163 70.9333 42.3989C69.9476 41.1903 69.3602 39.7062 69.2517 38.1504C69.0365 35.2455 70.1522 32.9583 72.5524 31.3154C73.5207 30.6538 74.6159 30.3181 75.78 30.1933C77.431 30.0165 79.098 30.3178 80.5826 31.0615C81.3306 31.4158 81.9917 31.93 82.5192 32.5677C83.1948 33.3626 83.5483 34.3816 83.51 35.4241C83.4899 36.0107 83.3259 36.5834 83.0323 37.0917C82.4288 38.146 81.311 38.5075 80.3093 38.3612C79.8632 38.2889 79.4549 38.067 79.1517 37.7318C78.8161 37.3826 78.5873 36.9448 78.4922 36.4699C78.4382 36.234 78.4441 35.9884 78.5094 35.7555C78.5234 35.706 78.5428 35.6576 78.5557 35.6081C78.7709 34.7969 78.4395 34.2826 77.6079 34.1073C77.2174 34.0347 76.8146 34.0685 76.4416 34.2052C75.7786 34.417 75.2204 34.8721 74.8795 35.479C74.6185 35.9162 74.4467 36.4007 74.3739 36.9046C74.3012 37.4085 74.3289 37.9219 74.4556 38.415C74.6706 39.344 75.1782 40.1793 75.9037 40.798C76.872 41.6361 77.9995 41.8556 79.2303 41.6318C79.5335 41.5708 79.83 41.4804 80.1157 41.3618C80.7558 41.11 81.0614 40.8561 81.7069 40.0923Z" fill="white" />
                    <path d="M61.1592 31.9997L61.8725 30.6011C61.9112 30.5785 61.9252 30.5688 61.9403 30.5613C61.955 30.5522 61.9715 30.5464 61.9887 30.5441C62.1081 30.5387 62.2286 30.5322 62.3491 30.5322L68.0188 30.5387C68.0645 30.5474 68.1089 30.5614 68.1512 30.5806C68.2738 30.8528 68.4051 31.1498 68.5395 31.4413C68.6106 31.5973 68.5643 31.7393 68.5051 31.8867C68.2916 32.4119 68.1245 32.9547 68.0059 33.5091C67.8515 34.2139 67.7569 34.9304 67.723 35.6511C67.6036 38.3085 68.0457 40.8863 68.8085 43.4199C68.8623 43.6006 68.9161 43.7792 68.9839 43.9858L68.29 45.0541H61.9628C61.695 44.7314 61.5325 44.329 61.3507 43.9481C61.299 43.8406 61.341 43.6803 61.3722 43.5522C61.5045 43.0143 61.6659 42.4925 61.7843 41.9567C62.2048 40.0224 62.3062 38.0324 62.0844 36.0654C61.9438 34.6773 61.6331 33.3119 61.1592 31.9997Z" fill="white" />
                    <path d="M124 41.0799C123.965 41.1498 123.955 41.2057 123.919 41.2359C123.866 41.2789 123.806 41.3127 123.742 41.3359C123.204 41.5511 122.666 41.7867 122.111 41.9696C119.722 42.7636 118.096 44.3365 117.189 46.6808C116.909 47.4005 116.584 48.102 116.278 48.812C116.258 48.8591 116.233 48.9038 116.203 48.9454C116.186 48.9643 116.165 48.9791 116.141 48.989C116.118 48.9988 116.092 49.0033 116.067 49.0023C116.041 49.0013 116.016 48.9947 115.994 48.983C115.971 48.9713 115.951 48.9548 115.935 48.9347C115.887 48.8436 115.843 48.7498 115.805 48.6539C115.482 47.8943 115.183 47.1262 114.837 46.3774C113.869 44.2396 112.304 42.7259 110.046 41.9911C109.423 41.7888 108.842 41.4919 108.241 41.238C108.192 41.2217 108.151 41.1885 108.125 41.1444C108.107 41.0832 108.109 41.0178 108.132 40.9583C108.159 40.9142 108.201 40.8816 108.25 40.8668C108.655 40.6781 109.074 40.5219 109.503 40.3999C111.106 40.0259 112.542 39.1362 113.591 37.8674C114.138 37.2029 114.574 36.4545 114.882 35.6511C115.18 34.898 115.508 34.1632 115.824 33.4208C115.845 33.3737 115.869 33.3284 115.897 33.2853C115.911 33.2644 115.931 33.2474 115.954 33.2356C115.976 33.2239 116.002 33.2178 116.027 33.2178C116.053 33.2178 116.078 33.2239 116.101 33.2356C116.124 33.2474 116.143 33.2644 116.158 33.2853C116.204 33.3572 116.245 33.4328 116.278 33.5112C116.615 34.2826 116.955 35.0529 117.284 35.8275C118.253 38.1019 119.912 39.6092 122.279 40.3203C122.8 40.4914 123.311 40.6936 123.808 40.926C123.88 40.9672 123.944 41.0191 124 41.0799Z" fill="white" />
                    <path d="M105.835 31.0205C105.905 31.1097 105.968 31.2043 106.023 31.3035C106.238 31.7725 106.446 32.2427 106.644 32.7171C107.27 34.2233 108.35 35.2228 109.911 35.6994C110.3 35.8046 110.672 35.9628 111.017 36.1696C111.03 36.3169 110.932 36.3471 110.864 36.3761C110.547 36.5084 110.232 36.6472 109.907 36.7516C108.278 37.2766 107.167 38.3309 106.572 39.9383C106.412 40.3686 106.207 40.7893 106.019 41.2132C105.978 41.2799 105.931 41.3429 105.879 41.4014C105.816 41.3364 105.761 41.2642 105.714 41.1863C105.513 40.7312 105.319 40.2729 105.125 39.8145C104.506 38.3439 103.477 37.3067 101.945 36.8022C101.512 36.658 101.092 36.4758 100.691 36.2578C100.683 36.2359 100.679 36.2124 100.681 36.1889C100.682 36.1654 100.689 36.1425 100.7 36.122C100.712 36.1014 100.727 36.0836 100.747 36.0699C100.766 36.0561 100.788 36.0468 100.811 36.0426C101.134 35.9232 101.456 35.7973 101.779 35.7037C102.642 35.4602 103.423 34.9873 104.038 34.3352C104.487 33.8587 104.839 33.3002 105.077 32.6902C105.262 32.2287 105.462 31.7725 105.659 31.3153C105.703 31.2292 105.761 31.1485 105.835 31.0205Z" fill="white" />
                    <path d="M103.736 41.4907C103.835 41.6575 103.894 41.7382 103.933 41.8264C104.087 42.1717 104.236 42.5192 104.385 42.8657C104.861 43.9706 105.662 44.7194 106.81 45.0916C107.155 45.1819 107.483 45.3241 107.785 45.5133C107.719 45.5737 107.647 45.6267 107.57 45.6715C107.3 45.7791 107.032 45.8867 106.752 45.9846C106.202 46.1637 105.701 46.4652 105.285 46.8665C104.868 47.2677 104.549 47.7582 104.35 48.3009C104.218 48.6366 104.07 48.9658 103.919 49.2961C103.872 49.3816 103.817 49.4632 103.757 49.5403C103.69 49.4252 103.643 49.3595 103.611 49.2864C103.473 48.9722 103.336 48.657 103.204 48.3396C102.722 47.1841 101.918 46.3697 100.715 45.9674C100.362 45.863 100.024 45.7091 99.7139 45.5101C99.8817 45.3229 100.088 45.2842 100.271 45.211C100.397 45.1605 100.536 45.14 100.667 45.1034C101.213 44.9429 101.717 44.6615 102.14 44.2801C102.563 43.8987 102.894 43.427 103.11 42.9001C103.256 42.5698 103.389 42.2341 103.532 41.9028C103.578 41.7898 103.638 41.6865 103.736 41.4907Z" fill="white" />
                    <path d="M68.1566 24.6504C67.9193 24.9503 67.6445 25.2186 67.3389 25.4487C66.675 25.9809 66.2155 26.7262 66.0382 27.5584C65.9833 27.8785 65.951 28.202 65.9414 28.5267C65.9124 28.9355 65.8973 29.3443 65.8725 29.8112C65.784 29.7745 65.7 29.728 65.6219 29.6725C65.3658 29.4186 65.1141 29.1582 64.8688 28.8968C64.0006 27.9877 62.9505 27.5304 61.6853 27.6057C61.3282 27.627 60.9699 27.602 60.6191 27.5315C60.6557 27.4511 60.7015 27.3753 60.7558 27.3056C60.8906 27.1728 61.0343 27.0495 61.1861 26.9366C62.2846 26.1447 62.8193 25.0656 62.8505 23.7219C62.8601 23.2916 62.8763 22.8677 62.8892 22.4642C62.9072 22.4479 62.9285 22.4357 62.9516 22.4283C62.9747 22.421 62.9992 22.4187 63.0233 22.4217C63.0474 22.4246 63.0706 22.4328 63.0912 22.4455C63.1119 22.4582 63.1296 22.4752 63.1431 22.4954C63.4217 22.7762 63.7068 23.0506 63.979 23.3378C64.8645 24.2706 65.9425 24.688 67.227 24.5804C67.4499 24.567 67.6734 24.567 67.8962 24.5804C67.9849 24.596 68.072 24.6194 68.1566 24.6504Z" fill="white" />
                </svg>

            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}