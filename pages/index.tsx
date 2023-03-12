import Head from 'next/head'
import { useState } from 'react'
import styles from '@/styles/home.module.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  return (
    <>
      <Head>
        <title>DASH Randomizer</title>
        <meta name="description" content="Super Metroid Randomizer" />
      </Head>
      <main>
        <div className={cx('video-container', { videoLoaded })}>
          <video
            src="/recall-bg.mp4"
            autoPlay
            loop
            muted={true}
            playsInline
            preload=""
            className={styles['video']}
            onPlay={(e) => {
              setVideoLoaded(true)
            }}
          />
        </div>
        <div className={styles['container']}>
          <h1 className={styles['title']}>DASH: Recall</h1>
          <h2 className={styles['tagline']}>A reimagining and rebalancing logic</h2>
        </div>
      </main>
    </>
  )
}
