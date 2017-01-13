import './styles.scss'

// libraries
import React, { Component } from 'react'
import { connect } from 'kea/logic'

// utils

// components

// logic
import sceneLogic from '~/scenes/$$dash-scene$$/logic'
import $$camelComponent$$Logic from '~/scenes/$$dash-scene$$/$$path-component$$/logic'

// const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = sceneLogic.constants

@connect({
  actions: [
    sceneLogic, [
      // 'showAll',
      // 'setVisibilityFilter'
    ],
    $$camelComponent$$Logic, [
      //
    ]
  ],
  props: [
    sceneLogic, [
      // 'visibilityFilter'
    ],
    $$camelComponent$$Logic, [
      //
    ]
  ]
})
export default class $$CapitalComponent$$ extends Component {
  render () {
    // const { visibilityFilter } = this.props
    // const { showAll, setVisibilityFilter } = this.props.actions

    return (
      <div className='$$dash-component$$-component'>
      </div>
    )
  }
}