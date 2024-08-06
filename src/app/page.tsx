import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">
        Hello there! I&apos;m Abdul Muizz
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a frontend developer that loves{" "}
        <Highlight>making, designing</Highlight> websites.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a junior frontend developer with
        <Highlight>2 years of experience</Highlight> building amazing websites
        that are responsive and good looking.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
