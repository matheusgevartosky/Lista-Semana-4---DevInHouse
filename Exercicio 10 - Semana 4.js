const tags = ['html', 'head', 'body', 'div', 'h1', 'span'];

const manipula = () => {
    tags.filter((tag) => {return tag.charAt(0) === 'h'} )
    .map((tag) => {return '<' + tag + '>'})
    .forEach((tag) => console.log(tag))
}

manipula()