import React, { Component } from 'react'
import { connect } from 'react-redux'
// are we using this package?
import PropTypes from 'prop-types'

export class SpellWord extends Component {

  render() {
    return (
      <div>
        <h1>spellWord</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SpellWord)
