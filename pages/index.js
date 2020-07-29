import Layout from '../components/Layout'
import Form from '../components/Form'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const fetcher =  (url) => fetch(url).then((res) => res.json)

const defaultEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=london,uk&APPID=${API_KEY}`

export async function getServerSideProps() {
    const res = await fetch(defaultEndpoint)
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

function   handleSubmit (event)  {
    event.preventDefault();
    const {currentTarget = {} } = event;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find(field => field.name === 'city');

    const value = fieldQuery.value || '';
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=london,uk&APPID=${API_KEY}`
}


export default function Index  ({data})  {
    const {results = []} = data;
    console.log('data', data)
    return (
    <Layout>
        <div>
            <h1>Weather App</h1>
            <p>Welcome to the app!</p>
        </div>
        
        <form className="search" onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor = 'city'>City</label>
                <input type='text' name="city" className='form-control'/>
                <label htmlFor = 'country'>Country</label>
                <input type='text' name="country" className='form-control'/>        
            </div>
            <button type='submit' className="btn btn-primary" value="Submit" >Search Weather</button>
            </form>

        <ul className='grid'>
            {results.map(result => {
                const{id, name} = result;
                <li className='card'>
                <a href ='#'><h3>{name}</h3></a>
                </li>
            })}
            
        </ul>

    </Layout>
    )
}


