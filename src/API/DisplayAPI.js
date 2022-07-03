import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [dataCollection, setDataCollection] = useState([]);
  let idCollection = dataCollection.length;

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      // setDataCollection(response.data.sort((a, b) => a.name.localeCompare(b.name)));
      setDataCollection(response.data);
      setLoading(false);
    };
    loadPost();
  }, []);
  console.log('cadjcbjda:', idCollection);

  const sortByKey = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setDataCollection(response.data.sort((a, b) => a.name.localeCompare(b.name)));
  };

  return (
    <>
      <div className="App">
        {loading ? (
          <h4 className="text-center">Get Data...</h4>
        ) : (
          <div className="flex flex-col justify-center items-center bg-Kalaplist text-white">
            <div className=" text-center pt-20">
              <a href="https://jsonplaceholder.typicode.com/users" className="bg-black py-2 px-4 hover:bg-white hover:text-black text-[15px]">
                View End Point API
              </a>
            </div>

            <div className=" w-[90%] overflow-x-auto overflow-y-auto max-h-[42vh] my-14 max-w-fit" key={dataCollection.id}>
              <table class="w-[100%]  table-auto border-collapse border border-slate-500 min-w-max">
                <thead className="bg-black text-white h-[60px]">
                  <tr className="sticky top-0 bg-black ">
                    <th className="w-[5%]">No</th>
                    {/* <th className="w-[15%]">
                      Nama <button onClick={sortByKey}>sort</button>
                    </th> */}
                    <th className="w-[15%]">Nama</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                  </tr>
                </thead>
                {dataCollection.map((data) => (
                  <tbody className="hover:bg-white hover:text-black cursor-pointer odd:bg-black even:bg-slate-800 ">
                    <tr className="h-[40px] ">
                      <td className="text-center border-r-2 ">{data.id}</td>
                      <td className="border-r-2 pl-2">{data.name} edit</td>
                      <td className="border-r-2 pl-2 text-center">{data.address.city}</td>
                      <td className="border-r-2 pl-2">{data.email}</td>
                      <td className="border-r-2 pl-2">{data.phone}</td>
                      <td className="border-r-2 pl-2">{data.website}</td>
                      <td className="border-r-2 pl-2">{data.company.name}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
              {/* User_Name: {item.username}, Full_Name: {item.name}, User_Email: {item.email} */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
