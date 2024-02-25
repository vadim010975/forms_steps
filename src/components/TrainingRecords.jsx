import { useState } from 'react';
import TrainingEntryForm from "./TrainingEntryForm";
import TrainingList from "./TrainingList";

const TrainingRecords = () => {

  const [list, setList] = useState({
    listItems: [],
  });

  const [data, setData] = useState({
    date: '',
    count: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData);
    const arr = [...list.listItems];
    const foundEl = arr.find(el => el.date === data.date);
    if (foundEl) {
      foundEl.count = (+foundEl.count + +data.count).toString();
    } else {
      arr.push(data);
      arr.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setList({
      ...list,
      listItems: arr,
    });
    setData({
      ...data,
      date: '',
      count: '',
    });
  }

  const edit = (item) => {
    remove(item);
    setData({
      ...data,
      date: item.date,
      count: item.count,
    });
  }

  const remove = (item) => {
    if (list.listItems.includes(item)) {
      setList({
        ...list,
        listItems: list.listItems.filter(el => el != item),
      });
    }
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
    <div className="container">
      <TrainingEntryForm onSubmit={onSubmit} data={data} onChange={onChange} />
      <TrainingList
        list={list.listItems}
        edit={edit}
        remove={remove}
      />
    </div>
  )
}

export default TrainingRecords;