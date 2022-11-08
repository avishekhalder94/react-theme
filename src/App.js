import { useEffect,useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllData } from './features/counterSlice'


function App() {

  const apidata = useSelector(state => state.counter.apidata);
  const dispatch = useDispatch();



  useEffect(() => {
    const fetchData = () => {
      fetch('https://api.publicapis.org/entries')
      // fetch('http://emailcampaign.frontpews.com/emailcampaign/public/api/smtp')
        .then((response) => {
          console.log(response.ok)
          console.log(response.status)
          console.log(response)
          return response.json()
        })
        .then((data) => {
          // console.log(data.entries);
          dispatch(setAllData(data.entries))
        });
    }
    fetchData();


  }, []);

  const inputEl = useRef(null);
  const onInputChange = (e) => {
    // `current` points to the mounted text input element
    // inputEl.current.focus();
    // console.log(e);
    console.log(inputEl) 
  };
  const allApi = apidata?.map((data, index) =>
    <li key={index}>{index + 1}-{data.API}</li>
  );
  return (
    // {allApi.length === 0 && (
    //   <p>Loding.....</p>
    // )}
    <div className='row'>
      <input type={"text"} ref={inputEl} onChange={onInputChange}/>
      {allApi.length === 0 && (
        <>
          <ul><li>Loding...</li></ul>
        </>
      )}
      <ul>{allApi}</ul>
    </div>
  );
}

export default App;
