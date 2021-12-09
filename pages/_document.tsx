import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <title>
            Aashish Bhatt || आशिष भट्ट || Web developer , React developer, Full
            stack developer from nepal
          </title>
          <meta
            name='title'
            content='Aashish Bhatt || आशिष भट्ट || Web developer , React developer, Full stack developer from nepal'
          />
          <meta
            name='description'
            content='Aashish Bhatt || आशिष भट्ट || Web developer , React developer, Full stack developer from nepal, TU IOE purwanchal campus dharan nepal, computer engineering student'
          />
          <meta
            name='keywords'
            content='react developer, web developer, front end developer, ioe dharan, ioe nepal, ioe tu, aashish bhatt , aashish bhatta, आशिष भट्ट '
          />
          <meta name='robots' content='index, follow' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta name='language' content='English' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
