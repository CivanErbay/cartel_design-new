export function slateToHtml(nodes) {
  if (!nodes || !Array.isArray(nodes)) return ''

  const html = nodes
    .map(node => {
      if (node.type === 'paragraph') {
        return `<p>${slateToHtml(node.children)}</p>`
      }
      if (node.type?.startsWith('h') && !isNaN(node.type[1])) {
        return `<${node.type}>${slateToHtml(node.children)}</${node.type}>`
      }
      if (node.type === 'ul') {
        return `<ul>${slateToHtml(node.children)}</ul>`
      }
      if (node.type === 'li') {
        return `<li>${slateToHtml(node.children)}</li>`
      }
      if (node.type === 'link') {
        return `<a href="${node.url}">${slateToHtml(node.children)}</a>`
      }
      if (node.text) {
        let text = node.text
        if (node.bold) {
          text = `<strong>${text}</strong>`
        }
        if (node.italic) {
          text = `<em>${text}</em>`
        }
        if (node.underline) {
          text = `<u>${text}</u>`
        }
        text = text.replace(/\n/g, '<br>')
        return text
      } else if (node.text === '') {
        return '<br>'
      }
      return slateToHtml(node.children)
    })
    .join('')

  return html
}
