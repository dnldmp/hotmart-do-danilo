import { Button, Flex, Input, Stack, Text, FormLabel, FormControl } from "@chakra-ui/react"
import { FormEvent, useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    await signIn({ email, password })
  }

  return (
    <Flex
      w="100%"
      h="100vh"
      background='linear-gradient(94.45deg, #FF6200 0.54%, #100062 99.46%);'
      flexDir='column'
    > 
      <Flex flexDir='column' w="100%" textAlign="center" p={100}>
        <Text fontSize="4xl" fontStyle="italic" fontWeight='bold' color="#fff">Hamist</Text>
        <Text mt="10" fontStyle="italic" fontWeight='bold' fontSize="2xl" color="#fff">The best course platform in the world!</Text>
      </Flex>
      <FormControl
        as='form'
        onSubmit={handleSubmit}
        flexDirection='column'
        alignContent='center'
        justifyContent='center'
        margin="0 auto"
        maxW={400}
        w="100%"
      >
        <Stack w="100%" spacing='8'>
          <Stack spacing="2">
            <FormLabel color="#fff" htmlFor="email">E-mail:</FormLabel>
            <Input color="#fff" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          </Stack>
          <Stack spacing="2">
            <FormLabel color="#fff" htmlFor="password">Password:</FormLabel>
            <Input  color="#fff" required name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          </Stack>
          <Button type="submit">Login</Button>
        </Stack>
      </FormControl>
    </Flex>
  )
}
