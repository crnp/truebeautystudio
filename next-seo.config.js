/** @type {import('next-seo').DefaultSeoProps} */

const url = "https://yoururl.com"

const title = "calvinrnp-starter-next-tailwind"
const description = "Starter Next.js and Tailwind Website"

// how your url is displayed when shared to social media
const ogTitle = "calvinrnp-starter-next-tailwind"
const ogDescription = "YOUR DESCRIPTION"
const ogImage = "https://picsum.photos/1200/630"

const defaultSEOConfig = {
  title: title,
  titleTemplate: "%s | "+title,
  defaultTitle: title,
  description:
    description,
  canonical: url,
  openGraph: {
    url: url,
    title: ogTitle,
    description: ogDescription,
    type: "website",
    images: [
      {
        url: ogImage,
        alt: ogTitle+" og-image",
        width: 1200,
        height: 630,
      },
    ],
    site_name: tit,
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://res.cloudinary.com/yehez/image/upload/v1630902976/Assassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg",
    },
  ],
};

export default defaultSEOConfig;