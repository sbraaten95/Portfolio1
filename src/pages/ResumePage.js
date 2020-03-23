import React from "react";
import { pdfjs, Document, Page } from "react-pdf";

import Hero from "../components/Hero";

function ResumePage(props) {
  return (
    <div>
      <Hero></Hero>
      <Document file="../assets/files/Resume.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default ResumePage;
