import Link from "next/link"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function Dashboard() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <h1>Olá {user.name}</h1>
      <p>É bom ter você de volta!</p>
      <p>Continue aprendendo, retorne da aula que parou.</p>

      {user.journeys.map(journey => (
        <Link href={`/journey/${journey.slug}`} key={journey.slug}>
          <a>
            <h1>{journey.title}</h1>
            <img src={journey.imageUrl} alt="merda" />
          </a>
        </Link>
      ))}
    </div>
  )
}