import React from "react";
import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string[];
}

export default function Seo({
  title,
  description,
  url,
  image,
  keywords,
}: Props) {
  const titleValue = title ?? "Manufacturer HDPE | Phetsiam PE Pipe Co. Ltd.";
  const descriptionValue =
    description ??
    "Produced under our brand PS STANDARD, trusted by our customers International Standard/Long Lifespan/High Quality";

  const urlValue = url ?? "https://pspipe.co.th/";
  const imageValue = image ?? "/img/og-image.webp";

  const keywordsValue =
    [
      "HDPE, PE Pipe, Phetsiam, PS STANDARD, Phetsiam PE Pipe Co.,Ltd.",
      keywords,
    ].join(", ") ?? "";

  return (
    <Head>
      <title>{titleValue}</title>
      <meta name="title" content={titleValue} />
      <meta name="description" content={descriptionValue} />
      {keywords && <meta name="keywords" content={keywordsValue} />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlValue} />
      <meta property="og:title" content={titleValue} />
      <meta property="og:description" content={descriptionValue} />
      <meta property="og:image" content={imageValue} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@PhetsiamPEPipe" />
      <meta property="twitter:url" content={urlValue} />
      <meta property="twitter:title" content={titleValue} />
      <meta property="twitter:description" content={descriptionValue} />
      <meta property="twitter:image" content={imageValue} />
      <meta name="twitter:site" content="@PhetsiamPEPipe" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={titleValue} />
    </Head>
  );
}
