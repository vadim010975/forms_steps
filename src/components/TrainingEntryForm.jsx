import PropTypes from 'prop-types';

const TrainingEntryForm = ({ onSubmit, data, onChange }) => {

  return (
    <form onSubmit={onSubmit} className="form">
      <label className="label_input_date">
        <p>Дата (ДД.ММ.ГГ)</p>
        <input type="date" name="date" className="input_date" value={data.date} onChange={onChange} required={true} />
      </label>
      <label className="label_input_count">
        <p>Пройдено КМ</p>
        <input type="text" name="count" className="input_count" value={data.count} onChange={onChange} required={true} />
      </label>
      <button className="form_btn">ОК</button>
    </form>
  );
}

TrainingEntryForm.propTypes = {
  onSubmit: PropTypes.func,
  data: PropTypes.shape({
    date: PropTypes.string,
    count: PropTypes.string,
  }),
  onChange: PropTypes.func,
}

export default TrainingEntryForm;