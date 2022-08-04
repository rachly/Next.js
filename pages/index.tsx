import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (

    <div>
    <h2 className={styles.container}> Home Page !</h2> 
    <Image src="/images/home.jpg"alt='home' width="800"height="533"/>
    </div>
  
  );
};

export default Home
