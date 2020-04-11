import Head from 'next/head'
import styles from './index.module.css'

const Home = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [pictureUrl, setPictureUrl] = React.useState("");

  const searchForInsta = () => {
    fetch("/insta/" + inputValue)
      .then(res => res.json())
      .then(
        (result) => {
          setUsername(result.username);
          setPictureUrl(result.username_picture_url);
        },
      )
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
        <img style={{ "height": "50px" }} src={pictureUrl}></img>
        <div className={styles.overlay}>{username}</div>
      </div>
    </div>
  )
}

export default Home
