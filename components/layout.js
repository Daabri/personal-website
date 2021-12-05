import Head from 'next/head'
import Link from 'next/link'

const name = 'Daan Brinkhuis'
export const siteTitle = 'Daan Brinkhuis'

export default function Layout({ children, home }) {
	return (
		<div className="my-8 w-full flex flex-col items-center">
			{/* Header */}
			<div className="w-full grid grid-cols-8">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
						rel="stylesheet"
					/>
					<link rel="icon" href="/favicon.ico" />
					<meta name="description" content="content" />
					<meta property="og:image" content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
					<meta name="og:title" content={siteTitle} />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<header className="col-span-8 flex flex-col items-center gap-4">
					<Link href="/">
						<a>
							<img src="/images/profile.jpg" className="w-32 h-32 rounded-full" alt={name} />
						</a>
					</Link>
					<h1>
						<Link href="/">
							<a>{name}</a>
						</Link>
					</h1>
				</header>
			</div>

			{/* Content */}
			<div className="w-full grid grid-cols-8">
				<main className="col-span-8 sm:col-start-2 sm:col-span-6">
					{!home && (
						<Link href="/">
							<div className="my-4 py-2 px-4 w-max hover:bg-blue-500 text-blue-500 hover:text-white cursor-pointer">
								<a>← Back to home</a>
							</div>
						</Link>
					)}
					{children}
				</main>
			</div>

		</div>
	)
}