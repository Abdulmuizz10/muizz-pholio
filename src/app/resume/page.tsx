import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import PdfViewer from "@/components/PdfViewer";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  const pdfUrl = "/images/resume.pdf";
  const options = {
    height: "600px",
    width: "90%",
    page: 1,
    pdfOpenParams: {
      view: "FitH",
      pagemode: "thumbs",
    },
  };

  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a developer that loves <Highlight>building products</Highlight>{" "}
        and web sites with elegant designs
      </Paragraph>
      {/* <WorkHistory /> */}
      <div className="mt-5">
        <PdfViewer pdfUrl={pdfUrl} options={options} />
      </div>
    </Container>
  );
}
