// this file is quite a mess, but it is all for a reason
// read comments to learn more about this concept

const date = new Date()

const footer = [
    ['footer', {class:'footer'}],
        {var: 'cats'},
        ['p', {class:'footer_paragraph'}],
            'slavcoder &copy; ', {var: 'year'},
        ['/p'],
    ['/footer']
]

const mod = {
    var: {
        year: date.getFullYear(),

        // you can add another template array inside var,
        // and even do this again in this scope, like in 'cats var' below
        // no need to worry about order, you can define img2 earlier as well or not define at all
        img2: [
            ['img', {src:'https://placekitten.com/200/300', class:'footer_img'}]
        ],

        cats: [
            ['div', {class:'footer_imgContainer'}],
                ['p', {class:'footer_paragraph'}],
                    'cute cat images inside div from ',
                    ['a', {href:'https://placekitten.com'}],'placekitten.com',['/a'],
                ['/p'],
                {var: 'img1'},
                {var: 'img2'},
            ['/div'],

            // if you won't define var in var literal but use in template, don't worry, it will be ommited
            {var: 'notDefinedVar'},
            {var: 'loop'}
        ],

        img1: [
            ['img', {src:'https://placekitten.com/g/200/300', class:'footer_img'}]
        ],

        // don't do this (loop is called inside cats and looking for loop again,
        // it is a well known infinite loop - avoid this)

        // infinite loop example:
        // loop: [
        //     ['p'],{var: 'loop'},['p']
        // ]
    }
}

export {footer, mod as footerMod}