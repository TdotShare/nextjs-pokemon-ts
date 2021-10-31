import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useEffect } from 'react'

const Content : NextPage = () => {

  useEffect(() => {

    console.log("Content Pages")
  })

  const actionGetTets = () =>{
    console.log("actionGetTets")
  }


  return (
    <>
    <button onClick={() => actionGetTets()} type="button" >test</button>
    </>
  )
}

export default Content
