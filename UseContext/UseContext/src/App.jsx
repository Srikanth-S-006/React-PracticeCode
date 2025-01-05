import { createContext } from 'react'
import A from './A.jsx';
import './App.css';

const data1 = createContext();
const data2 = createContext();
const data3 = createContext();
const data4 = createContext();
function App() {
  const name = "srikanth";
  const address = "bengaluru";
  const age = 21;
  const course = "fullStack";
  return (
    <div class="box">
      <h2> Sending app.js values in C component</h2>
      <data1.Provider value={name}>
        <data2.Provider value={address}>
          <data3.Provider value={age}>
            <data4.Provider value={course}>
              <A />
            </data4.Provider>
          </data3.Provider>
        </data2.Provider>
      </data1.Provider>

    </div>
  )

}

export default App
export { data1, data2, data3, data4 }
