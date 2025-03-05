interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://initcyber.com', // Write here your website url
	author: 'Justin Johnson', // Site author
	title: 'Init Cyber - Cybersecurity, AI, Tech, etc.', // Site title.
	description: 'Init Cyber, Cybersecurity, AI, and anything tech related blog', // Description to display in the meta tags
	lang: 'en-US',
	ogLocale: 'en_US',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
