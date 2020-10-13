import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
/** abbreviation
 * sc = styled components
 */

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet() // sc server-sided style rendering
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />)) // add wrapper for style
    const styleTags = sheet.getStyleElement() // get style tags under Head
    return { ...page, styleTags }
  }

  render () {
    return (
      <Html>
        <Head>
          <title>Best-Sellers-The New York Times</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
