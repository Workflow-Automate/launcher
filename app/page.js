import { Button, Center, HStack, Image, Text, VStack } from "@chakra-ui/react";
import "./globals.css";
import { Inter } from 'next/font/google';
import Card from "../components/ui/card";
import { Grid, GridItem } from "@chakra-ui/react"
import PathArray from "../components/data"

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

export default function Home() {
  return (
    <>
      <Center>
        <VStack my='30px'>
          <Image
            src="./FL.webp"

            fit="contain"
            alt="paperlessIcon"
          />
          <Text className={`${inter.className} heroStyle`}>Launcher</Text>
        </VStack>

      </Center>
      <Center>
        <HStack mt='40px'>
          {/* <Card /> */}



          <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap="6">

            {PathArray.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </Grid>
          {/* <Button>FINCA Paperless</Button>
          <Button>Aruti</Button>
          <Button>Orbit R</Button>
          <Button>Manage Engine</Button> */}
        </HStack>
      </Center>
    </>
  );
}
