# Template arrays - experimental concept
[npm](https://www.npmjs.com/package/template-arrays)

## About

Template arrays are another way to render DOM elements by JavaScript using valid arrays with very basic rules as described in examples below.

I believe that it can be usefull in some situations and has a potential to be a part of some JavaScript library.

You can test it in your project if you like. 

## Install

```sh
npm install --save-dev template-arrays
```

## Usage

```js
import render from 'template-arrays'
```

## Example
Defining template arrays and rendering them into body with special options to update choosen attributes and add special elements

```js
const hamburger = [
    ['button', {class:'nav_hamburger hamburger'}],
        ['span', {class:'hamburger_line'}],['/span'],
        ['span', {class:'hamburger_line'}],['/span'],
        ['span', {class:'hamburger_line'}],['/span'],
    ['/button']
]

const menu = [
    ['ul', {class:'nav_menu menu'}],
        ['li', {class:'menu_item'}],
            ['a', {class:'menu_link', href:'#'}],'author',['/a'],
        ['/li'],
        ['li', {class:'menu_item'}],
            ['a', {class:'menu_link', href:'#'}],'project',['/a'],
        ['/li'],
        {var: 'extraLink'},
    ['/ul']
]

const nav = [
    ['nav', {class:'nav', id:'nav'}],
        ['a', {attr:'logoLink', href:'#'}],
            ['img', {attr:'logo'}],
        ['/a'],
        ... hamburger,
        ... menu,
    ['/nav']
]

document.body.innerHTML += render(nav, {
    attr: {
        logo: {
            alt: 'slavcoder',
            src: '/img/logo.png'
        },
        logoLink: {
            href: 'https://github.com/slavcoder',
            style: `
                color: purple;
                text-decoration: none;
            `
        },
        extraLink: {
            href: 'https://extra-link/custom-target',
            id: 'extra-id'
        }
    },
    var: {
        extraLink: [
            ['li'],
                ['a', {attr: 'extraLink'}],{var: 'superText'},['/a'],
            ['/li']
        ],
        superText: 'this is text inside extra link',
    }
})
```
Second argument of render function is optional. 

The **attr** is used to add or update elements attributes. It can be defined inside elements like other attributes: `['p', {attr:'name'}]`.

The **var** is used to add text or other template in place of `{var:'name'}` elements.

You could even add an **optional container** into template using `{var:'name'}` twice, for example:

```js
const addContainer = true

const nav = [
    {var: 'containerOpen'},
        ['nav', {class:'nav', id:'nav'}],
            ['a', {attr:'logoLink', href:'#'}],
                ['img', {attr:'logo'}],
            ['/a'],
            ... hamburger,
            ... menu,
        ['/nav'],
    {var: 'containerClose'}
]

document.body.innerHTML += render(nav, {
    var: {
        containerOpen: addContainer ? [['div', {class:'navContainer'}]] : '',
        containerClose: addContainer ? [['/div']] : ''
    }
})
```

## Live example

In this example I made some simple performance test to render 10 - 10 000 node elements.

[live](https://slavcoder.github.io/template-arrays)

[code](https://github.com/slavcoder/template-arrays/tree/master/example)

## License
MIT &copy; [slavcoder](https://github.com/slavcoder)