import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>🎂 케이크크 | 404 not found</title>
        <meta name="description" content="404 not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={`/`}>
        <Image
          src="/img/404_img.png"
          alt="about banner"
          layout="fill"
          objectFit="cover"
        />
      </Link>
    </>
  )
}

export default ErrorPage
