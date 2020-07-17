const mainContainer = document.querySelector('main')


window.onload = () => {
  history.replaceState(
    { content: mainContainer.innerHTML }, 
    '', 
    window.location.toString()
  )
}
 

const anchorLinks = document.querySelectorAll('a')

anchorLinks.forEach((link) => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault()
    const anchorLinkUrl = link.href
    console.log('anchorLinkUrl', anchorLinkUrl)

		fetch(anchorLinkUrl)
			.then((resp) => {
        resp.text().then((text) => {
          console.log('fetched', text)

          const source = 'main', target = 'main'

          const targetContainer = document.querySelector(target)
          const partialTemp = document.createElement('div')
          
					partialTemp.innerHTML = text
					const partial = partialTemp.querySelector(source)
					
					console.log('load::fetch::', partial)

          targetContainer.replaceWith(partial)
          
          history.pushState(
            { content: partial.innerHTML }, 
            '', 
            anchorLinkUrl
          )

        })
      })

  })
})

  

window.onpopstate = function(evt) {
  var state = evt.state
  if (state) {
    const mainContainer = document.querySelector('main')
    mainContainer.innerHTML = state.content
  }
}