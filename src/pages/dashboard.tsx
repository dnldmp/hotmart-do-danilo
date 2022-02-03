import Link from "next/link"
import { UserMock } from "../mock/user"

export default function Dashboard() {
  return (
    <div>
      <h1>Olá {UserMock.name}</h1>
      <p>É bom ter você de volta!</p>
      <p>Continue aprendendo, retorne da aula que parou.</p>

      {UserMock.journeys.map(journey => (
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