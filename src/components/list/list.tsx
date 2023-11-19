import { useEffect } from 'react';

import { Card } from '../card/card';

import { useFootballers } from '../../hooks/use.characters';

import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export function List() {
  const { loadFootballers, footballers } = useFootballers();
  const { footballerInitialState } = useSelector(
    (state: RootState) => state.footballersState
  );

  useEffect(() => {
    loadFootballers();
  }, [loadFootballers]);

  if (footballerInitialState === 'loading') {
    return <p className="loading"> LOADING </p>;
  }

  if (footballerInitialState === 'error') {
    return <p> Sorry bro</p>;
  }

  return (
    <>
      {footballers.length > 0 && (
        <ul className="characters-list row list-unstyled">
          {footballers.map((item) => (
            <Card info={item} key={item.id}></Card>
          ))}
        </ul>
      )}
    </>
  );
}
