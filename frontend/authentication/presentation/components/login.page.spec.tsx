import { render } from '@testing-library/react-native'
import LoginPage from './login.page'

const makeSut = () => {
  const sut = render(<LoginPage />)

  return sut
}

describe('Login page', () => {
  beforeEach(async () => {
    jest.clearAllMocks()
  })

  it('should show a LoginFormOrganism', () => {
    const sut = makeSut()

    expect(sut.getByTestId(/LoginPage/i)).toBeTruthy()
  })
})
