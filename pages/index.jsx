import Head from 'next/head';
import Logo from '../components/Logo'
import ColorSelector from '../components/ColorSelector';
import Lighter from '../components/Lighter';
import InstaChip from '../components/InstaChip';
import SearchField from '../components/SearchField'
import { Analytics } from "../lib/gAnalytics";

import styles from './index.module.css';



const Home = () => {
  const [username, setUsername] = React.useState("");
  const [pictureUrl, setPictureUrl] = React.useState("http://racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png");
  const [selectedColor, setSelectedColor] = React.useState("white");
  const [isGAInit, setIsGAInit] = React.useState(false)

  if (!isGAInit) {
    Analytics.logPageView('/');
    setIsGAInit(true)
  }

  const searchForInsta = (value) => {
    fetch("/instav2/" + value)
      .then(res => res.json())
      .then(
        (result) => {
          setUsername(result.username);
          setPictureUrl(result.username_picture_url);
          Analytics.logEvent(result.username);
        },
      )
  }
  const handleClose = () => {
    setUsername("");
    setPictureUrl("http://racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png")
  }

  const handleColorSelection = (value) => {
    console.log(value)
    setSelectedColor(value)
  }

  return (
    <div className="container">
      <Head>
        <title>Insta lighter</title>
        <link rel="icon" href="/favicon.ico" />
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
        {username ? <div className={styles.buyButton} ><span className={styles.textBtn}>Buy</span></div> : null}

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
