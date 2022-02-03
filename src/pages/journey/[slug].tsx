import { GetServerSideProps } from "next";

export default function Journey({ slug }) {
  return (
    <h1>{slug}</h1>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params
  const journeyInformation = 'danilo'
  
  return {
    props: {
      slug
    }
  }
}