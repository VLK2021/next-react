import { Inter } from 'next/font/google'

import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
          <h1>Next.JS</h1>
      </main>
    </>
  )
}

export default Home;
