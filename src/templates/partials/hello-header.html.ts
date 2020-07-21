export const template = () => {
	return `<!--
																																					
	localhost %

	Hello human.
	The frontend code used on this website presented in a human readable.
	Why? Why not!

	In the late 90s when I started to gain curiosity into how websites were built,
	"View Source" was an invaluable tool. These days with minification and obfuscation 
	used by web bundlers and builders in web frameworks it's harder than ever for someone starting 
	out to learn "how things are built".

	This website can also be viewed without JavaScript (or with a text based web browser).
	I'm actively working to improve accessibility for tools such as screen readers (e.g. VoiceOver, et al).

	Spotted a bug or wanted to ask a question?

	* Visit https://github.com/localhost-international/website/issues
	* ...or email: leslie@localhost.international

	Happy hacking. 

	localhost % ${`${new Date().getFullYear()}`}

-->`
}

