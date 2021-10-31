import type { NextPage } from 'next'
import { useRouter , NextRouter } from "next/router"
import { GetServerSideProps , InferGetServerSidePropsType } from 'next'
import Image from 'next/image'


type Pokemon = {
  id : number
  name : string
}


const   Blog : NextPage<Pokemon> = ( data ) => {

  console.log(data)

  return (
    <div style={{ textAlign : "center"}}>
      <p>Name : {data.name}</p>
      <Image
      placeholder="empty"
      width={`100%`}
      height={`100%`}
      alt="Picture" 
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { id } = context.query;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`)
  const data = await res.json()

  return {
    props: data
  }


}

export default Blog
