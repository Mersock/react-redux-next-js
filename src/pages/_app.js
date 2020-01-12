// _app.js
import React from 'react';
import { makeStore } from '../redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

const MyApp = ({ Component, pageProps, store }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
};

export default withRedux(makeStore)(MyApp);