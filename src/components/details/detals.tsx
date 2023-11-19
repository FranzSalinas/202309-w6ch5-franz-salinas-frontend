import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
export function Details() {
  const { currentFootballer } = useSelector(
    (state: RootState) => state.footballersState
  );
  return (
    <div className="details-container">
      <div className="title-container">
        <p className="details-main-name">{currentFootballer?.name}</p>
      </div>
      <div className="image-container">
        <img
          src={currentFootballer?.image}
          alt={currentFootballer?.name}
          height="300"
          width="200"
        />
      </div>
      <div className="info-container">
        <p className="details-parts">Team: {currentFootballer?.team}</p>
        <p className="details-parts">
          Nationality: {currentFootballer?.nationality}
        </p>
        <p className="details-parts">
          Preferred foot: {currentFootballer?.preferredFoot}
        </p>
        <p className="details-parts">Position: {currentFootballer?.position}</p>
        <p className="details-parts">Age: {currentFootballer?.age}</p>
      </div>
    </div>
  );
}
