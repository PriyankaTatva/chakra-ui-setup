import './App.css';
import { Box, Heading, Button } from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
      <Box m={2} padding='20px 0' bg={{base: 'primary.main',lg:'brand.900'}} color='#fff' fontSize='20px'>Chakra Box Element</Box>
      <Heading as="h1">Hello From APP.js</Heading>
      <Button colorScheme='primary' mr="20px" variant='solid' size={{base:'sm', lg: 'xl'}}>Primary Button</Button>
      <Button colorScheme='primary' mr="20px" variant='with-shadow'>Button with custom variant</Button>
      <Button variant='outline'>Outlined Button</Button>
    </div>
  );
}

export default App;
