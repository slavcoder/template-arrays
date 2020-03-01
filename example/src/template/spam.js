const styles = {
    spam: `
        display: block;
        color: white;
        background-color: blue;
        display: flex;
        text-align: center;
        justify-content: center;
        margin: 1px 1px;
        padding: 5px;
        min-width: 50px;
    `
}

const spam = [
    ['span', {attr:'spam', style: styles.spam}],
        {var: 'random'},
    ['/span']
]

export default spam