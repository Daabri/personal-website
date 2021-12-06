import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Layout from '../../components/layout'
import Date from '../../components/date'

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id)
	return {
		props: {
			postData
		}
	}
}

export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article className="bg-white">
				<section className="flex flex-col justify-center items-center gap-4 p-8">
					<Date className="text-gray-400 self-start" dateString={postData.date} />
					<h1 className="text-blue-500 self-start">{postData.title}</h1>
					<img className="rounded-lg" src={postData.image} alt={postData.imageAltText} />
					{postData.roles && <div className="flex flex-wrap gap-2">Responsibilities:
						{postData.roles.map((role) => <span className="py-px px-3 capitalize rounded bg-gray-100 text-gray-800" key={role}>{role}</span>)}
					</div>}
					<div className="mx-auto" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
				</section>
			</article>
		</Layout>
	)
}