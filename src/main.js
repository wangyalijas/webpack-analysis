import _ from 'lodash'
import './style.css'
import printMe from './print'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['hello', 'webpack'], '')
    element.classList.add('hello');

    btn.appendChild(document.createTextNode('click me'))
    btn.onclick = printMe
    element.appendChild(btn)
    return element
}
let element = component()
document.body.appendChild(element)

// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         document.removeChild(element)
//         let element = component()
//         document.body.appendChild(element)
//     })
// }
