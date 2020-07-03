const html = (strings:any, ...values:any) => {
  let template = ''
  strings.map((string:any, idx:number) => {
    const value = typeof values[idx] === 'string' ? `${values[idx]}` : ''
    template += `${string}${value}`
  }).join('')
  console.log('\nRendered\n\n', `${template}`)
  return template;
};

export { html }