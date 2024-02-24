import { useState } from 'react';
import TrainingEntryForm from "./TrainingEntryForm";
import TrainingList from "./TrainingList";

const TrainingRecords = () => {

  const [state, setState] = useState({
    list: [],
    input: null,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData);
    const arr = [...state.list];
    const foundEl = arr.find(el => el.date === data.date);
    if (foundEl) {
      foundEl.count = (+foundEl.count + +data.count).toString();
    } else {
      arr.push(data);
      arr.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setState({
      ...state,
      list: arr,
      input: null,
    });

    
  }

  const edit = (item) => {
    setState({
      ...state,
      list: state.list.filter(el => el != item),
      input: {
        date: item.date,
        count: item.count,
      },
    });
  }

  const remove = (item) => {
    if (state.list.includes(item)) {
      setState({
        ...state,
        list: state.list.filter(el => el != item),
      });
    }
  }

  return (
    <div className="container">
      <TrainingEntryForm onSubmit={onSubmit} input={state.input} />
      <TrainingList
        list={state.list}
        edit={edit}
        remove={remove}
      />
    </div>
  )
}

export default TrainingRecords;