import updateAttributes from './update-attributes'

function render(array, mod = {}) {
    const arr = [... array]
    let res = ''
    let arrLength = arr.length

    for(let i=0; i< arrLength; i++) {
        if(arr[i].var) {
            if(!mod.var) continue;

            if(mod.var[arr[i].var] || typeof(mod.var[arr[i].var]) == 'number') {
                arr.splice(i+1, 0, ... mod.var[arr[i].var])
                arrLength = arr.length
            }
            continue;
        }
        if(typeof(arr[i]) == 'string' || typeof(arr[i]) == 'number') {
            res += arr[i]
            continue;
        } else if(arr[i][0][0] == '/'){
            res += `<${arr[i][0]}>`
            continue;
        }

        let attributesString = ''

        if(arr[i][1]) {
            let attributes = {... arr[i][1]}
            if(attributes.attr && mod.attr) {
                attributes = updateAttributes(attributes, mod.attr[attributes.attr])
            }

            const attrKeys = Object.keys(attributes)
            attrKeys.forEach(attr => {
                if(attr != 'attr') {
                    attributesString += ` ${attr}="${attributes[attr]}"`
                }
            })
        }

        res += `<${arr[i][0]}${attributesString}>`
    }
    
    return res
}

export default render