import React from 'react';
import './App.css';
import List from './List';

function App(props) {
  const lists = props.store.lists;
  const listLists = lists.map(list => {
    const cards = list.cardIds.map(cardId =>
      props.store.allCards[cardId])
    return <List header={list.header} cards={cards} />
  })
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {listLists}
      </div>
    </main>
  );
}

export default App;