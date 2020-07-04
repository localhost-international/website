import { html } from '../html'

export const template = (meta:any, markup:string) => {
	return html`
		<!doctype html>
		<html>
			<head>
				<title>${meta.title}</title>
				<meta name="keywords" content="" />
				<meta name="" content="" />
				<meta name="" content="" />
				<link rel="stylesheet" href="/assets/css/style.css" />
			</head>
			<body data-template="${meta.template}">
				<header>
					<h1>${meta.title}</h1>
				</header>
				<h1>${meta.title}</h1>
				<small>${meta.date}</small>
				<main>
					${markup}
				</main>
				<footer>
					<ul>
						${JSON.stringify(meta.tags)}
					</ul>
				</footer>
			</body>
		</html>
	`
}