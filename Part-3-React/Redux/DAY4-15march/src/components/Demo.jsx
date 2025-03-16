import { Button, HStack,Box } from "@chakra-ui/react"

export const Demo = () => {
  return (
    <HStack>
      <Button>Click me-1212</Button>
      <Button>Click me</Button>
      <Box bg="tomato" w="100%" p="4" color="white">
      This is the Box
    </Box>
    </HStack>
  )
}