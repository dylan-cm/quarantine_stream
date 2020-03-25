import React from 'react'
import PropTypes from 'prop-types'
import ActionTypes from '../constants/actionTypes'
import { incrementIfOdd } from '../actions/counter'
import { connect } from 'react-redux'
import WeekGrid from '../components/WeekGrid'

class WeekView extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  }

  increment = () => {
    this.props.dispatch({ type: ActionTypes.INCREMENT_COUNTER })
  }

  decrement = () => {
    this.props.dispatch({ type: ActionTypes.DECREMENT_COUNTER })
  }

  incrementIfOdd = () => {
    incrementIfOdd()
  }

  render() {
    return (
      <>
        <WeekGrid />
        {/* <Event day={day} time={time} title={title} color={red}*/}
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(WeekView)
