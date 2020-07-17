const body = document.body
const mainContainer = document.querySelector('main')

const domainURI = `${window.top.location.host.toString()}`
const internalLinksRegex = `a[href^="${domainURI}"], a[href^="/"]`


window.onload = () => {
  history.replaceState(
    { content: mainContainer.innerHTML }, 
    '', 
    window.location.toString()
  )
}



function load(anchorLinkUrl) {
  fetch(anchorLinkUrl)
  .then((resp) => {
    resp.text().then((text) => {
      console.log('fetched', text)
      render(text, anchorLinkUrl)
    })
  })
}


function render(text, anchorLinkUrl) {
  const source = 'main', target = 'main'
  const targetContainer = document.querySelector(target)
  const partialTemp = document.createElement('div')
  partialTemp.innerHTML = text
  const partial = partialTemp.querySelector(source)
  console.log('load::fetch::', partial)
  targetContainer.replaceWith(partial)
  // prepareLinks(body.querySelectorAll(internalLinksRegex))
  history.pushState(
    { content: partial.innerHTML }, 
    '', 
    anchorLinkUrl
  )
  body.classList.remove('fade-out')
  body.classList.add('fade-in')
}


const anchorLinks = document.querySelectorAll(internalLinksRegex)

function prepareLinks(anchorLinks) {
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault()
      body.classList.add('fade-out')
      const anchorLinkUrl = link.href
      console.log('anchorLinkUrl', anchorLinkUrl)
      load(anchorLinkUrl)
    })
  })  
}
prepareLinks(anchorLinks)

  

window.onpopstate = function(evt) {
  var state = evt.state
  if (state) {
    const mainContainer = document.querySelector('main')
    mainContainer.innerHTML = state.content
  }
}