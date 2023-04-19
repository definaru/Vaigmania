import Head from 'next/head'
import { useRouter } from 'next/router'

export function Seo({title, description})
{
    const router = useRouter()
    const href = router.asPath === '/' ? '' : router.asPath

    return (
        <Head>
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="картины, ручные изделия, рисунки, красиво, изысканно, ваигмания, фентези, мистика" />
            <meta name="description" content={description} />
            <meta name="author" content="Ray Vaigmi" />
            <link href="/img/apple_touth_icon.png" rel="apple-touch-icon" />
            <title>{title}</title>
            <link rel="canonical" href={`https://vaigmania.ru${href}`} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Vaigmania" />
            <meta property="og:image" content="http://vaigmania.ru/access/img/apple_touth_icon.png" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={`https://vaigmania.ru${href}`} />
            <meta property="og:description" content={description} />
        </Head>
    )
}