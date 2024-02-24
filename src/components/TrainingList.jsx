import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import ListItem from "./ListItem";

const TrainingList = ({ list, ...props }) => {

  return (
    <div className="list_wrapper">
      <div className="list_header">
        <p className="list_header_date">Дата (ДД.ММ.ГГ)</p>
        <p className="list_header_count">Пройдено КМ</p>
        <p className="list_header_actions">Действия</p>
      </div>
      <ul className="list">
        {list.map(item => (
          <ListItem
            {...props}
            item={item}
            key={uuidv4()}
          />
        ))}
      </ul>
    </div>

  );
}

TrainingList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  edit: PropTypes.func,
  remove: PropTypes.func,
}

export default TrainingList;
