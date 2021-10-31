import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'

const Home: NextPage = () => {

  const [number, setNumber] = useState<number>(0)


  useEffect(() => {
    console.log("Hello")
  })

  const actionGetTets = () =>{
    console.log("actionGetTets")
    setNumber(number + 10)
  }


  return (
    <>
    <Link href="/pokemon/1"><a> go to page content </a></Link>
    <br />
    <button onClick={() => actionGetTets()} type="button" >{number}</button>
    </>
  )
}

export default Home
