window.onload = () => {

  console.log('window.load')

	const body = document.body

	const domainURI = `${window.top.location.host.toString()}`

	const internalLinksStr = `a[href^="${domainURI}"], a[href^="/"]`


  function pageTransition(cb) {
    body.classList.add('fade-out')

    const handleFadeAnimation = evt => {
      console.log('handleFadeAnimation::animatedend', evt)
      if (evt.animationName === 'fade-out') {
        console.log('animation event removed')
        fadeAnimation.removeEventListener('animationend', handleFadeAnimation, true)
        body.classList.remove('fade-out')
        body.classList.add('fade-in')
        if (cb) cb()
      }
    }

    const fadeAnimation = document.querySelector('body.fade-out')
    fadeAnimation.addEventListener('animationend', handleFadeAnimation, true)
  }


	function prepareLinks(links) {
		const internalLinks = links
		internalLinks.forEach((link) => {
			console.log('Links', link.href)

			link.addEventListener('click', (evt) => {
        evt.preventDefault()
        
        pageTransition(() => {
          const regex = `(${window.location.origin}|.html)`
          const path = `${(link.href).replace( new RegExp(regex, 'g'), '')}`
          console.log('internalLinks::page', `"${path}"`)
          load(path)
        })

			})
		})
	}

	// Parse links on page
	const internalLinks = document.querySelectorAll(internalLinksStr)
	prepareLinks(internalLinks)



	function load(path) {
		const cleanUrl = path // e.g. /, /experiments or /projects/geography

		const source = 'main', target = 'main'

		const targetContainer = document.querySelector(target)
		const partialTemp = document.createElement('div')
		
		console.log('load::dom', targetContainer, partialTemp)

		const urlToLoad = `${window.location.origin}${path}`

		fetch(urlToLoad)
			.then((resp) => {
				resp.text().then((text) => {

					partialTemp.innerHTML = text
					const partial = partialTemp.querySelector(source)
					
					console.log('load::fetch::', partial)

          targetContainer.replaceWith(partial)

					// Parse new links on page
          prepareLinks(body.querySelectorAll(internalLinksStr))

          body.classList.remove('fade-on-exit')
          body.classList.add('fade-on-enter')

				})
			})
	}


	window.onpopstate = evt => {
		let state = evt.state
		console.log('window.onpopstate::state', state)
		// load()
	}


}

