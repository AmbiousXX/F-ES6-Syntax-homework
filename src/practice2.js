const inject = (items, sections) => {
    sections.reverse().forEach(elem => {
        items.splice(elem.index, 0, elem.content)
    })

    return items
}
export { inject };
