import { Footballers } from '../../model/footballers';

type Props = {
  info: Footballers;
};

export function Card({ info }: Props) {
  /* const { update } = useFootballers();

  const handleDeath = (id: string) => {
    update(id, { isAlive: false });
  }; */

  return (
    <li className="character col">
      <div className="card character__card">
        <img
          src={`${info.image}`}
          alt={info.name + ' '}
          className={`character__picture ${!info.age && 'card-img-top'}`}
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">{info.name}</h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {info.age} años</li>
              <li>
                Equipo:
                {' ' + info.team}
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <div className="character__actions">
              <button className="character__action btn">Detalles</button>
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
