import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

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

      <section className="col-span-4 py-8 px-2">
        <p className="text-center justify-center">
          Digital product designer currently designing a variety of B2B products. I also fiddle with coding, project management and business strategy sometimes.
          <span
            className="flex justify-center cursor-pointer hover:bg-blue-500 text-blue-500 hover:text-white"
            onClick={() => { navigator.clipboard.writeText("brinkhuis.daan@gmail.com") }}>
            <ClipboardIcon />
            Copy my e-mail address
          </span>
        </p>
      </section>

      {/* Posts */}
      <section className="flex flex-col items-stretch">
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="flex flex-col" key={id}>
              <Link href={`/posts/${id}`}>
                <div className="group p-4 bg-white hover:bg-blue-500 cursor-pointer">
                  <small className="text-gray-400 group-hover:text-blue-200 font-medium">
                    <Date dateString={date} />
                  </small>

                  <h2 className="text-blue-500 group-hover:text-white">{title}</h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout >
  )
}