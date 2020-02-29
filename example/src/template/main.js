const styles = {
    spamContainer: `
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `
}

const main = [
    ['main', {class: 'main'}],
        ['h1'],
            'Found: ', {var: 'countArticles'}, ' articles',
        ['/h1'],
        ['div', {class:'articlesContainer'}],['/div'],
        ['div', {class:'spamContainer', style: styles.spamContainer}],['/div'],
    ['/main']
]

export default main