import { useState } from 'react';
import PropTypes from 'prop-types';

const TrainingEntryForm = ({ onSubmit, input }) => {

  const [data, setData] = useState({
    input: null,
    date: '',
    count: '',
  });

  if (input != data.input) {
    setData({
      ...data,
      date: input ? input.date : '',
      count: input ? input.count : '',
      input,
    });
  }

  const onChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
  }

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
  input: PropTypes.object,
}

export default TrainingEntryForm;