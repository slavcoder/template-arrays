const styles = {
    spamContainer: `
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `
}

const spam = [
    ['div', {class:'spam'}],
        ['select', {class:'spam_select -order'}],
            ['option', {value:'random'}], "don't order colors", ['/option'],
            ['option', {value:'lightest'}], "order from lightest color", ['/option'],
            ['option', {value:'darkest'}], "order from darkest color", ['/option'],
        ['/select'],
        ['select', {class:'spam_select -count'}],
            ['option', {value:'10'}], "10 items", ['/option'],
            ['option', {value:'100'}], "100 items", ['/option'],
            ['option', {value:'1000'}], "1 000 items", ['/option'],
            ['option', {value:'10000'}], "10 000 items", ['/option'],
        ['/select'],
        ['button', {class:'spam_button'}],"run spam test",['/button'],
        ['div', {class:'spam_container', style: styles.spamContainer}],['/div'],
    ['/div']
]

const main = [
    ['main', {class: 'main'}],
        ['h1'],
            'Found ', {var: 'countArticles'}, ' articles',
        ['/h1'],
        ['div', {class:'articlesContainer'}],['/div'],
        ... spam,
    ['/main']
]

export default main