import React, { Component } from 'react';

import { Dashboard, DashboardMenu, DashboardButton } from '../../components';

export default class HomePage extends Component {
  render() {
    return (
      <Dashboard>
        <DashboardMenu title="Jogo de Memória">
          <DashboardButton to="/game">Iniciar jogo</DashboardButton>
        </DashboardMenu>
      </Dashboard>
    );
  }
}
