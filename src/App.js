
import './App.css';

import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
   
    </div>
  );
}


// function LoadsContries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])

//   return (
//     <div>
//       <h1>Have a tour of all the world!</h1>
//       <h1>Total country:{countries.length}</h1>
      
//       {
//        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }

export default App;
