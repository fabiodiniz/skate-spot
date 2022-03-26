import HomePage from 'home/presentation/components/home.page'

import React from 'react'

export default class HomeFactory extends React.Component implements Factory {
  render() {
    return <HomePage />
  }
}
