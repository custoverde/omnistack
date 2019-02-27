import React from 'react';
import { connect } from 'react-redux';
import { Board, Card, VictoryDialog } from '../../components';

import { selectCard, closeVictoryDialog, startGame } from '../../store/actions';

// import React from 'react';
// import { Board, Card } from '../../components';

const GamePage = ({
  cards,
  onCardClick,
  isVictoryDialogOpen,
  onCloseVictoryDialog,
  onStartGame
}) => (
  <>
    <Board>
      {cards.map(card => (
        <Card
          key={card.key}
          name={card.name}
          isActive={card.isActive}
          onClick={() => {
            onCardClick(card.key);
          }}
        />
      ))}
    </Board>
    <VictoryDialog
      isOpen={isVictoryDialogOpen}
      onClose={onCloseVictoryDialog}
      onGameRestart={onStartGame}
    />
  </>
);

const mapStateToProps = state => ({
  cards: state.cards,
  isVictoryDialogOpen: state.isVictoryDialogOpen
});

// const mapDispatchToProps = dispatch => ({
//   onCardClick: card => {
//     //dispatch({ type: SELECT_CARD, key: card.key });
//     dispatch(selectCard(card.key));
//   }
// });

const mapDispatchToProps = {
  onCardClick: selectCard,
  onCloseVictoryDialog: closeVictoryDialog,
  onStartGame: startGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePage);
