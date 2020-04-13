import Head from 'next/head';
import Logo from '../components/Logo'
import ColorSelector from '../components/ColorSelector';
import Lighter from '../components/Lighter';
import SearchField from '../components/SearchField'
import styles from './index.module.css';

const Home = () => {
  const [username, setUsername] = React.useState("123456789fslrfkskskqqefgeniabm");
  const [pictureUrl, setPictureUrl] = React.useState("http://racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png");
  const [selectedColor, setSelectedColor] = React.useState("white");

  const searchForInsta = (value) => {
    fetch("/instav2/" + value)
      .then(res => res.json())
      .then(
        (result) => {
          setUsername(result.username);
          setPictureUrl(result.username_picture_url);
        },
      )
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
        <SearchField onGenerate={(val) => searchForInsta(val)} />
        <ColorSelector selected={selectedColor} onChange={(e) => handleColorSelection(e)} />
        <Lighter
          selectedColor={selectedColor}
          pictureUrl={pictureUrl}
          accountName={username}
        />
      </div>
      <style jsx global>{`
        body {
          background-color: #FCFCFC
        }
      `}</style>
    </div>
  )
}

export default Home
