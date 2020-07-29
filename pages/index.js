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


export default function Index  ({data})  {
    console.log('data', data)
    return (
    <Layout>
        <div>
            <h1>Weather App</h1>
            <p>Welcome to the app!</p>
        </div>
        <Form/>
    </Layout>
    )
}


