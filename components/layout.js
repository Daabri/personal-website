import Head from 'next/head'
import Link from 'next/link'

const name = 'Daan Brinkhuis'
export const siteTitle = 'Daan Brinkhuis'

export default function Layout({ children, home }) {
	return (
		<div className="my-8 w-full flex flex-col gap-4 items-center">
			{/* Header */}
			<div className="w-1/2 max-w-xl">
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<meta
						name="description"
						content="content"
					/>
					<meta
						property="og:image"
						content={`https://og-image.now.sh/${encodeURI(
							siteTitle
						)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
					/>
					<meta name="og:title" content={siteTitle} />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<header className="flex flex-col items-center">
					{home ? (
						<><img src="/images/profile.jpg" className="w-32 h-32 rounded-full border border-black" alt={name} />
							<h1>{name}</h1>
						</>
					) : (
						<>
							<Link href="/">
								<a>
									<img
										src="/images/profile.jpg"
										className="w-32 h-32 rounded-full border border-black"
										alt={name}
									/>
								</a>
							</Link>
							<h2>
								<Link href="/">
									<a>{name}</a>
								</Link>
							</h2>
						</>
					)}
				</header>
			</div>

			{/* Content */}
			<div className="w-1/2 max-w-xl">
				<main className="flex flex-col gap-4">{children}</main>
				{!home && (
					<div className="ml-12 text-blue-600 hover:text-blue-500">
						<Link href="/">
							<a>← Back to home</a>
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}