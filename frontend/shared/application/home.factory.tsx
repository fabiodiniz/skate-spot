import React from 'react'
import { Factory } from 'types'
import HomePage from '../presentation/components/home.page'

export default class HomeFactory extends React.Component implements Factory {
  render() {
    return <HomePage />
  }
}
