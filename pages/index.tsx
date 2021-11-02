import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {




  return (
    <>
      <div className="container" style={{ textAlign : "center" , paddingTop : "10%"}}>
        <p>ยินดีตอนรับสู่สมุดโปเกมอน ของ TDOT</p>
        <Link href="/pokemon/1"><a> <button className="btn btn-success">ดูโปเกมอนของฉัน คลิก !!</button> </a></Link>
      </div>
    </>
  )
}

export default Home
