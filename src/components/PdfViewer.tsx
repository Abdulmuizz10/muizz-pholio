"use client";
// src/components/PdfViewer.tsx
import React, { useEffect, useRef } from "react";
import PDFObject from "pdfobject";

interface PDFOpenParams {
  view?: string;
  pageMode?: string;
}

interface PDFObjectOptions {
  width?: string; // Width of the PDF object
  height?: string; // Height of the PDF object
  page?: number; // Initial page to display
  pdfOpenParams?: PDFOpenParams; // PDF open parameters
}

interface PdfViewerProps {
  pdfUrl?: string;
  options?: PDFObjectOptions;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, options }: any) => {
  const pdfContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pdfContainerRef.current) {
      PDFObject.embed(pdfUrl, pdfContainerRef.current, options);
    }
  }, [pdfUrl, options]);

  return (
    <div ref={pdfContainerRef} style={{ width: "100%", height: "600px" }} />
  );
};

export default PdfViewer;
