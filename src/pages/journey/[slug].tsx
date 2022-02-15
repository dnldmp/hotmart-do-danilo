import { Flex, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Player } from "../../components/Player";

export default function Journey({ slug }) {
  return (
    <Flex flexDir="column" >
      <Text>{ slug }</Text>
      <Player />
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params
  
  return {
    props: {
      slug
    }
  }
}