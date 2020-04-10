import Head from 'next/head'
import styles from './index.module.css'

const Home = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [responseValue, setResponseValue] = React.useState("");

  const getFullSizeInstaImage = () => {
    fetch("https://graph.instagram.com/{user-id}")
      .then(res => console.log(res));
  }

  const searchForInsta = () => {
    const imageUrl = getFullSizeInstaImage();
    setResponseValue(inputValue)
  }

  return (
    <div className="container">
      <Head>
        <title>Insta lighter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <label for="fname">Search for your Instagram handle</label>
          <input type="text" id="instaName" name="instaName" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button onClick={searchForInsta}>Search</button>
        </div>
        <div className={styles.lighterImage}>
        </div>
        <div className={styles.overlay}>{responseValue}</div>
      </div>
    </div>
  )
}

export default Home
