import { Button, Stack } from "@chakra-ui/react";
const Test2 = () => {
  return (
    <>
      <h1>Test-2</h1>
      <Button colorScheme="blue">Button</Button>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button-2
        </Button>
      </Stack>
    </>
  );
};

export default Test2;
