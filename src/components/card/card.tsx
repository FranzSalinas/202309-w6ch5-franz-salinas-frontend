import { Link } from 'react-router-dom';
import { useFootballers } from '../../hooks/use.footballers';
import { Footballers } from '../../model/footballers';

type Props = {
  info: Footballers;
};

export function Card({ info }: Props) {
  /* Sera el update más adelante const { update } = useFootballers();

  const handleDeath = (id: string) => {
    update(id, { isAlive: false });
  }; */

  const { handleDetailsPage } = useFootballers();
  console.log('IMG', info);
  return (
    <li className="character col">
      <div className="card character__card">
        <Link to={'/details/' + info.id}>
          <img
            src={`${info.imageFootballer.url}`}
            alt={info.name + ' '}
            onClick={() => handleDetailsPage(info)}
            className={`character__picture ${!info.age && 'card-img-top'}`}
          />
        </Link>
        <div className="card-body">
          <h2 className="character__name card-title h4">{info.name}</h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Age: {info.age} años</li>
              <li>
                Team:
                {' ' + info.team}
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <div className="character__actions">
              {/* <button className="character__action btn">Detalles</button> */}
              {/*  <button
                className="character__action btn"
                onClick={() => handleDeath(info.id as string)}
              >
                muere
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
