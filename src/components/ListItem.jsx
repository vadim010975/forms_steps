import PropTypes from 'prop-types';

const ListItem = ({ item, edit, remove }) => {

  const getStrDate = (date) => {
    let day = new Date(date).getDate();
    day = day < 10 ? '0' + day : day.toString();
    let month = new Date(date).getMonth() + 1;
    month = month < 10 ? '0' + month : month.toString();
    return day + '.' + month +'.' + new Date(date).getFullYear();
  }

  return (
    <li className="list_item">
      <div className="list_item_date">{getStrDate(item.date)}</div>
      <div className="list_item_count">{item.count}</div>
      <div className="list_item_buttons">
        <button className="icon_btn edit_btn" onClick={() => {
          edit(item);
        }}></button>
        <button className="icon_btn remove_btn" onClick={() => {
          remove(item);
        }}></button>
      </div>
    </li>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.string,
    count: PropTypes.string,
  }),
  edit: PropTypes.func,
  remove: PropTypes.func,
}

export default ListItem;