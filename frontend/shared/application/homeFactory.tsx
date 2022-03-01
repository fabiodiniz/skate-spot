import React from 'react'
import IFactory from './iFactory'
import HomePage from '../presentation/components/HomePage'

export default class HomeFactory extends React.Component implements IFactory {
  render() {
    return <HomePage />
  }
}
