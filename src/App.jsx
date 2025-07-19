import { Button, HStack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </>
  );
}

export default App;
