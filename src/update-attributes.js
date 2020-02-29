function updateAttributes(oldAttributes, newAttributes) {
    const newKeys = Object.keys(newAttributes)

    newKeys.forEach(key => {
        if(key == 'class' || key == 'style' && oldAttributes[key]) {
            oldAttributes[key] += ' ' +newAttributes[key]
        }
        else {
            oldAttributes[key] = newAttributes[key]
        }
    })
    return oldAttributes
}

export default updateAttributes