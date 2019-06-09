// this should stay here.
import 'babel-polyfill'
import '../less/main.less'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

function start(env) {
    const {el, message = 'something'} = env;
    ReactDOM.render(<App message={message} />, el)
}

module.exports = {
    start
}
