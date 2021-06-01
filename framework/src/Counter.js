import React, {useEffect, useState} from 'react';

function Counter(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [filter, setFilter] = useState('');
  // object.field, object[field]

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setData([
        {id: 1, value: 'First'},
        {id: 2, value: 'Second'},
        {id: 5, value: 'Fifth'},
      ])
    }, 5000)
  });

  const handleFilterChange = evt => {
    setFilter(evt.target.value); // из поля ввода читаем текст
  };

  const handleRemove = () => {
    setData(prevData => prevData.filter((o, idx) => idx < prevData.length - 1));
  };

  if (loading) {
    return <><p style={{'color': props.color}}>Идёт загрузка</p></>
  }
  const filtered = data
    .filter(o => o.value.startsWith(filter));

  return (
    <>
      <input onChange={handleFilterChange} value={filter}/>
      <div>Количество заражённых короновирусом</div>
      {
        filtered.map(o => <div>{o.value}</div>)
      }
      <div>Итого: {filtered.length}</div>
      <button onClick={handleRemove}>Уберём строку</button>
    </>

  );
}

export default Counter;