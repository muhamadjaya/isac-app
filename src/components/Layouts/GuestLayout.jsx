import Head from 'next/head'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="font-sans antialiased">
                {children}
            </div>
        </div>
    )
}

export default GuestLayout
