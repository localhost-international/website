const body = document.body
const mainContainer = document.querySelector('main')

const domainURI = `${window.top.location.host.toString()}`

const internalLinksRegex = `a[href^="${domainURI}"], a[href^="/"]`
const anchorLinks = document.querySelectorAll(internalLinksRegex)

const transition = {
  exit: 'fade-out',
  enter: 'fade-in',
}


function load(url) {
  fetch(url)
  .then((resp) => {
    resp.text().then((content) => {
      render({ content, url, xhr: true })
    })
  })
}


function render(opts) {
  const content = opts.content
  const url = opts.url
  const xhr = opts.xhr

  if (xhr) {
    const source = 'main', target = 'main'
    const targetContainer = document.querySelector(target)
    const partialTemp = document.createElement('div')
    partialTemp.innerHTML = content
    const partial = partialTemp.querySelector(source)
    console.log('load::fetch::', partial)
    targetContainer.replaceWith(partial)
    history.pushState({ content: partial.innerHTML }, '', url)
  }
  else {
    // const fadeAnimation = document.querySelector('body')
    // fadeAnimation.addEventListener('animationend', handleAnimation, true)
    // function handleAnimation(evt) {
    //   if (evt.animationName === transition.exit) {
    //     fadeAnimation.removeEventListener('animationend', handleAnimation, true)
    //     body.classList.remove(transition.exit)
    //     // Safe
    //     const mainContainer = document.querySelector('main')
    //     mainContainer.innerHTML = content
    //     // Safe
    //     body.classList.add(transition.enter)
    //   }
    // }
    pageTransition(() => {
      const mainContainer = document.querySelector('main')
      mainContainer.innerHTML = content
    })
  }

  // TODO - Remove hyperlink listener than reapply
  const linkContainer = document.querySelector('main')
  prepareLinks(linkContainer.querySelectorAll(internalLinksRegex))

}



function pageTransition(callback) {
  body.classList.add(transition.exit)
  const fadeAnimation = document.querySelector('body')
  fadeAnimation.addEventListener('animationend', handleAnimation, true)
  function handleAnimation(evt) {
    if (evt.animationName === transition.exit) {
      fadeAnimation.removeEventListener('animationend', handleAnimation, true)
      body.classList.remove(transition.exit)
      if (callback) callback()
      body.classList.add(transition.enter)
    }
  }
}


function prepareLinks(anchorLinks) {
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault()
      pageTransition(() => {
        const url = link.href
        load(url)
      })
    })
  })  
}


window.onload = () => {
  history.replaceState(
    { content: mainContainer.innerHTML }, 
    '', 
    window.location.toString()
  )
  prepareLinks(anchorLinks)
}


window.onpopstate = function(evt) {
  body.classList.add('fade-out')
  var state = evt.state
  if (state) render({ content: state.content, url: null, xhr: false })
}