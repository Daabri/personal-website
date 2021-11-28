import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
// import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export function ClipboardIcon({ color }) {
  return (
    <svg className="stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 6.75H7.75C6.64543 6.75 5.75 7.64543 5.75 8.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V8.75C18.25 7.64543 17.3546 6.75 16.25 6.75H15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 8.25H10C9.44772 8.25 9 7.80228 9 7.25V5.75C9 5.19772 9.44772 4.75 10 4.75H14C14.5523 4.75 15 5.19772 15 5.75V7.25C15 7.80228 14.5523 8.25 14 8.25Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.75 12.25H14.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.75 15.25H14.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <p className="flex flex-col justify-center items-center w-full">
          Product Designer. <span className="flex cursor-pointer text-blue-600 hover:text-blue-500" onClick={() => { navigator.clipboard.writeText("brinkhuis.daan@gmail.com") }}>brinkhuis.daan@gmail.com<ClipboardIcon /></span>
        </p>
      </section>

      <section>
        <ul className="flex flex-col gap-2">
          {allPostsData.map(({ id, date, title }) => (
            <li className="flex flex-col items-center text-blue-600" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <small className="text-gray-500 font-medium">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout >
  )
}