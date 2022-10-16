import DependencyEnum from 'shared/domain/entities/dependencyEnum'
import { RouterEnum } from 'shared/domain/entities/routes'

import { DashboardStorePort } from 'shared/data/ports/dashboardStore.port'

import MenuItemAtom from 'shared/presentation/components/menuItem.atom'

import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import styled from 'styled-components/native'
import { container } from 'tsyringe'

const MenuOrganism: React.FC = props => {
  const navigation = useNavigation()
  const dashboardStore = container.resolve<DashboardStorePort>(
    DependencyEnum.DASHBOARD_STORE_ADAPTER
  )

  const isActive = (tab: RouterEnum) => {
    return dashboardStore.getActiveTab() === tab
  }

  const navigate = useCallback((tab: RouterEnum) => {
    navigation.navigate(tab as never)
    dashboardStore.setActiveTab(tab)
  }, [])

  return (
    <StyledView testID="MenuOrganism" {...props}>
      <MenuItemAtom
        label="Spots"
        active={isActive(RouterEnum.SPOTS)}
        onPress={() => navigate(RouterEnum.SPOTS)}
      />
      <MenuItemAtom
        label="Profile"
        active={isActive(RouterEnum.PROFILE)}
        onPress={() => navigate(RouterEnum.PROFILE)}
      />
    </StyledView>
  )
}

const StyledView = styled.View`
  flex-direction: row;
  height: 90px;
`

export default MenuOrganism
