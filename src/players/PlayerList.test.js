import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import PlayerList from './PlayerList';

describe('<Player/>', () => {
  it('should show "No Players" if none passed', () => {
    const { getByText } = render(<PlayerList />);
    getByText(/no players to list/i);
  });

  it('displays the list of players', () => {
    const players = [
      {
        id: 1,
        name: 'Rodolfo',
      },
      {
        id: 2,
        name: 'Kayla',
      },
    ];
    const { getAllByTestId } = render(<PlayerList players={players} />);
    const renderedPlayers = getAllByTestId(/player/i);
    expect(renderedPlayers).toHaveLength(2);
  });

  it('displays the list of players', () => {
    const players = [
      {
        id: 1,
        name: 'Rodolfo',
      },
      {
        id: 2,
        name: 'Kayla',
      },
    ];
    const { getAllByTestId } = render(<PlayerList players={players} />);
    const playerNames = players.map(p => p.name);
    const renderedPlayers = getAllByTestId(/player/i).map(li => li.textContent);
    expect(renderedPlayers).toEqual(playerNames);
  });
});
