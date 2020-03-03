import randomNumber from './helper/random-number'
import render from '../../src/render'
import spam from './template/spam'

function getSpam() {
    const spamContainer = document.querySelector('.spam_container')
    const spamSelectCount = document.querySelector('.spam_select.-count')
    const spamSelectOrder = document.querySelector('.spam_select.-order')
    const spamButton = document.querySelector('.spam_button')
    
    spamButton.addEventListener('click', () => {
        showSpamElements(spamSelectCount.value, spamSelectOrder.value)
    })
    
    function showSpamElements(count, order) {
        console.time(`show ${count} spam elements`)
        let spamContent = ''
        
        for(let i=1; i<=count; i++) {
            const red   = randomNumber(255)
            const green = randomNumber(255)
            const blue  = randomNumber(255)
            const colorCount = red + green + blue

            const orderValue = {
                'random':   () => 0,
                'darkest':  () => colorCount,
                'lightest': () => 1000 - colorCount
            }

            const color = colorCount < 320 ? 'white' : 'black'
            const rgb   = `rgb(${red},${green},${blue})`
            
            spamContent += render(spam, {
                var: {random: i},
                attr: {
                    spam: {
                        style: `
                            background-color: ${rgb};
                            color: ${color};
                            order: ${orderValue[order]()};
                        `,
                        id: `spam-${i}`,
                        title: rgb
                    }
                }
            })
        }

        spamContainer.innerHTML = spamContent   
        console.timeEnd(`show ${count} spam elements`)
    }
}

export default getSpam