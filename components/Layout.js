import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>Weather</title>
            <link rel='stylesheet' href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/lux/bootstrap.min.css"/>
        </Head>
        <div className='container'>
            {props.children}
        </div>
    </div>
)
export default Layout;