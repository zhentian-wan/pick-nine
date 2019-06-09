import React from 'react'
import PropTypes from 'prop-types'

const App = ({message}) => <h1>{message}</h1>;

App.propTypes = {
    message: PropTypes.string.isRequired
}

export default App;