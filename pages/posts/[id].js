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
	const img = postData.image;
	console.log(img)

	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<Image
				src={img}
				width={3200}
				height={2400}
				alt="Dashboard showing multiple reservations and a detail window"
			/>
			<article className="flex flex-col bg-white py-4 px-8">
				<Date dateString={postData.date} />
				<h1>{postData.title}</h1>
				<div className="flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	)
}