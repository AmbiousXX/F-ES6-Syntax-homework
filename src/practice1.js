const parseData = (input) => {

    let {data, column} = input
    let output = []

    data.forEach(elem => {
            let obj = {}
            column.forEach((value, index) => {
                    obj[value.name] = elem[index]
                }
            )
            output.push(obj)
        }
    )

    return output
}
export {parseData};
