import profileImage from '../images/profile.jpg'
import { Image, Heading, Text, Center, Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box py="5rem">
      <Center>
        <Image
          src={profileImage}
          boxSize="150px"
          borderRadius="full"
        />
      </Center>
      <Box textAlign="center" p="1rem" lineHeight="2">
        <Heading as="h3">Adi Purnama</Heading>
        <Text fontSize="xl">A software engineer</Text>
      </Box>
      <Text fontSize="md">Helo, my name is Adi. I'm a software engineer, currently working at Happy5 as a back-end engineer.</Text>
    </Box>
  )
}
