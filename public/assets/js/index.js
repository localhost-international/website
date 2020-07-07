window.onload = () => {

  console.log('Hello humans');


  const body = document.body

  /**
   * Hyperlinks
   * 
   * TODO
   * - Make exceptions for a[href^="#"]
   */
  const domainURI = `${window.top.location.host.toString()}`
  const internalLinksStr = `a[href^="${domainURI}"], a[href^="/"]`
  const internalLinks = document.querySelectorAll(internalLinksStr)

  internalLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault()
      body.classList.add('fade-on-exit')
      
      const fadeExitAnimation = document.querySelector('.fade-on-exit')
      fadeExitAnimation.addEventListener('animationend', (evt) => {
        if (evt.animationName == 'fade-out') {
          console.log('evt.propertyName', evt.animationName)
          loadPartial(`${link.href}.html`, 'main', 'main')
        }
      })
      
    })
  })


  let firstVisit = false

  function loadPartial (url, source, target) {

    const targetContainer = document.querySelector(target)
    const partialTemp = document.createElement('div')

    fetch(url)
      .then((resp) => {

        resp.text().then((text) => {

          let href = `${url.replace(/`${domain}`/g, '')}`
          history.pushState(window.location.href, null, href)

          partialTemp.innerHTML = text
          const partial = partialTemp.querySelector(source)
          body.replaceChild(partial, targetContainer)
          console.log(
            'Partial - url, href, partial',
            url, href, partial
          )

          body.classList.remove('fade-on-exit')
          body.classList.add('fade-on-enter')

          
        })

      })
      .catch((err) => {
        alert('Oh noes', err)
        // Redirect as a fallback
        window.location.href = `${link.href}.html`
      })

  }


  window.onpopstate = (evt) => {
    const state = evt.state
    console.log('popstate::state', state)
    
    if (state !== null) loadPartial(`${state}`, 'main', 'main')

  }


};


/*
// let href = `${url.replace(/`${domain}`|.html/g, '')}`
*/