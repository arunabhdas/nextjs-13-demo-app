import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="engines/">Next</a> 
          <br/>
          <a href="engines/">Cafeteria</a> 
          <br/>
          <a href="weapons/">Weapons Room</a>
          <br/>
          <a href="engines/">Engines Room</a>
        </h1>

      </main>
    </div>
  )
}
