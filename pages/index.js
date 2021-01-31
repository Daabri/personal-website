import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm <b>Daan</b>. I'm a UI/UX Developer and photographer. You can view my photos and contact me on <a href="https://twitter.com/daabri">Twitter</a>.
        </p>
      </section>
    </Layout >
  )
}