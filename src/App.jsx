import { puppyList } from './data'
import { useState } from 'react';
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  console.log(featuredPup);
  console.log(puppies);
  return (
    <>
      <div className="App">
        {
          puppies.map((puppy) => {
            return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
        <div>
          <p>{featPupId && (
            <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
            </div>)}
        </p>
        </div>
      </div>
    </>
  )
}

export default App
