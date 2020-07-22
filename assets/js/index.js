/*

  ___                            ___    __                       __      
  /\_ \                          /\_ \  /\ \                     /\ \__   
  \//\ \     ___     ___     __  \//\ \ \ \ \___     ___     ____\ \ ,_\  
    \ \ \   / __`\  /'___\ /'__`\  \ \ \ \ \  _ `\  / __`\  /',__\\ \ \/  
    \_\ \_/\ \L\ \/\ \__//\ \L\.\_ \_\ \_\ \ \ \ \/\ \L\ \/\__, `\\ \ \_ 
    /\____\ \____/\ \____\ \__/.\_\/\____\\ \_\ \_\ \____/\/\____/ \ \__\
    \/____/\/___/  \/____/\/__/\/_/\/____/ \/_/\/_/\/___/  \/___/   \/__/
                                                                          
  localhost %

  Hello again human.
  The JavaScript used on this website is also human readable.

  Spotted a bug or wanted to ask a question?

  * Visit https://github.com/localhost-international/website/issues
  * ...or email: leslie@localhost.international

  Happy hacking. 

*/


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
    targetContainer.replaceWith(partial)
    history.pushState({ content: partial.innerHTML }, '', url)
  }
  else {
    pageTransition(() => {
      const mainContainer = document.querySelector('main')
      mainContainer.innerHTML = content
    })
  }
  const linkContainer = document.querySelector('main')
  addHyperlinks(linkContainer.querySelectorAll(internalLinksRegex))
}


function pageTransition(callback) {
  console.log('pageTransition') //
  body.classList.add(transition.exit)
  const fadeAnimation = document.querySelector('body')
  fadeAnimation.addEventListener('animationend', handleAnimation, true)
  function handleAnimation(evt) {
    console.log('handleAnimation') //
    if (evt.animationName === transition.exit) {
      fadeAnimation.removeEventListener('animationend', handleAnimation, true)
      body.classList.remove(transition.exit)
      if (callback) { 

        let cb = () => {
          return new Promise((resolve, reject) => {
            callback()
            resolve()
          })
        }

        cb()
          .then(() => {
            console.log('cb::then')
            // body.classList.add(transition.enter)
          })
          .catch((err) => {
            console.log('cb::catch err', err)
          })
      }
      // body.classList.add(transition.enter)
    }
  }
}


function addHyperlinks(hyperlinks) {
  hyperlinks.forEach((link) => {
    function handleLink(evt) {
      evt.preventDefault()
      pageTransition(() => {
        const url = link.href
        load(url)
      })
    }
    link.removeEventListener('click', handleLink, true)
    link.addEventListener('click', handleLink, true)
  })  
}


window.onload = () => {
  history.replaceState(
    { content: mainContainer.innerHTML }, 
    '', 
    window.location.toString()
  )
  addHyperlinks(anchorLinks)
}


window.onpopstate = function(evt) {
  body.classList.add('fade-out')
  var state = evt.state
  if (state) render({ content: state.content, url: null, xhr: false })
}