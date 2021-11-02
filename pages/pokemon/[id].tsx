import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'


type Pokemon = {
  id: number
  name: string
}

function Blog(data: Pokemon) {
  return (
    <div className="container" style={{ textAlign: "center", paddingTop: "10%" }}>
  
        <Image
          className="card-img-top"
          placeholder="empty"
          width={150}
          height={150}
          alt="Picture"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`} />
        <p>{data.name}</p>
        <br/>
        <Link href={`/pokemon/${data.id + 1}`}><a> <button className="btn btn-success">ดูตัวต่อไป คลิก !!</button> </a></Link>
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
