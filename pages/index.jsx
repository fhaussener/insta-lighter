import Head from 'next/head'
import styles from './index.module.css'

const Home = () => (
  <div className="container">
    <Head>
      <title>Insta lighter</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <div className={styles.error}>
        Insta-lighter
      </div>
      <div>overlay</div>
    </div>
  </div>
)

export default Home
