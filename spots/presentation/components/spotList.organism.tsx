import DependencyEnum from 'shared/domain/entities/dependencyEnum'

import { LogoutCase } from 'auth/data/useCases/logout.case'

import SpotCardMolecule from 'spots/presentation/components/spotCard.molecule'

import ButtonAtom from 'shared/presentation/components/button.atom'

import theme from 'shared/presentation/styles/settings/theme.style'

import React from 'react'
import styled from 'styled-components/native'
import { container } from 'tsyringe'

const SpotListOrganism: React.FC = props => {
  const logout = container.resolve<LogoutCase>(DependencyEnum.LOGOUT_CASE)

  return (
    <StyledView testID="SpotListOrganism" {...props}>
      <ButtonAtom onPress={() => logout.execute()} title="Logout" />
      <SpotCardMolecule />
      <SpotCardMolecule />
      <SpotCardMolecule />
    </StyledView>
  )
}

const StyledView = styled.View`
  flex: 1;
  background: ${theme.colors.primary};
  padding: 12px;
`

export default SpotListOrganism
