import { Inter } from 'next/font/google'
import Link from "next/link";

import styles from '../styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })


function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
          <h1>Next.JS</h1>

          <ul>
              <li>
                  <Link href={'/portfolio'}>Portfolio</Link>
              </li>

              <li>
                  <Link href={'/clients'}>Clients</Link>
              </li>
          </ul>
      </main>
    </>
  )
}

export default Home;
