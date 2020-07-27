import Layout from '../components/Layout'
import Form from '../components/Form'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const fetcher =  (url) => fetch(url).then((res) => res.json)

const Index = () => (
    <Layout>
        <div>
            <h1>Weather App</h1>
            <p>Welcome to the app!</p>
        </div>
        <Form/>
    </Layout>

)

export default Index;