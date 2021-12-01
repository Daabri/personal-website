import Head from 'next/head'
import Image from 'next/image'
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
				<Image
					src={postData.image}
					width={3200}
					height={2400}
					alt={postData.imageAltText}
				/>
				<section className="p-8">
					<Date className="text-blue-400" dateString={postData.date} />
					<h1 className="mb-8 text-blue-500">{postData.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
				</section>
			</article>
		</Layout>
	)
}