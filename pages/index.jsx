import Head from 'next/head';
import Logo from '../components/Logo'
import ColorSelector from '../components/ColorSelector';
import Lighter from '../components/Lighter';
import InstaChip from '../components/InstaChip';
import SearchField from '../components/SearchField'
import { Analytics } from "../lib/gAnalytics";

import styles from './index.module.css';

const avatarImg = "https://pwco.com.sg/wp-content/uploads/Generic-Profile-Placeholder-v3.png"

const Home = () => {
  const [username, setUsername] = React.useState("");
  const [pictureUrl, setPictureUrl] = React.useState(avatarImg);
  const [selectedColor, setSelectedColor] = React.useState("white");
  const [isGAInit, setIsGAInit] = React.useState(false)

  if (!isGAInit) {
    Analytics.logPageView('/');
    setIsGAInit(true)
  }

  const searchForInsta = (value) => {
    fetch("/insta/" + value)
      .then(res => res.json())
      .then(
        (result) => {
          setUsername(result.username);
          setPictureUrl(result.username_picture_url);
          Analytics.logEvent("Search for instagram user", result.username);
        },
      )
  }
  const handleClose = () => {
    setUsername("");
    setPictureUrl(avatarImg)
  }

  const handleColorSelection = (value) => {
    setSelectedColor(value)
  }

  const handleBuy = () => {
    Analytics.logEvent("Buy button clicked", username);
    window.location.href = 'https://mailchi.mp/4e48f58669f1/baxqrf88yb';
  }

  return (
    <div className="container">
      <Head>
        <title>Insta lighter</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div>
        <Logo></Logo>
        <div className={styles.header}>Get your Instagram handle printed on a lighter</div>
        {!username
          ? <SearchField onGenerate={(val) => searchForInsta(val)} />
          : <div className={styles.resultContainer}>
            <InstaChip className={styles.chip} username={username} onClose={handleClose} />
            <ColorSelector selected={selectedColor} onChange={(e) => handleColorSelection(e)} />
          </div>}
        <Lighter
          selectedColor={selectedColor}
          pictureUrl={pictureUrl}
          accountName={username}
        />
        {username ? <div onClick={handleBuy} className={styles.buyButton} ><span className={styles.textBtn}>Buy 6 for $26</span></div> : null}
      </div>
      <style jsx global>{`
        body {
          background-color: #FCFCFC;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        @font-face {
          font-family: 'Helvetica Neue';
          src: url('/fonts/HelveticaNeueMed.ttf');
          font-weight: medium;
         }

         @font-face {
          font-family: 'Helvetica Neue';
          src: url('/fonts/HelveticaNeueLt.ttf');
          font-weight: 300;
         }
      `}</style>
    </div>
  )
}

export default Home
