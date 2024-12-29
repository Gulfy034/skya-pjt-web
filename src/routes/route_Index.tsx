// @ts-nocheck
import { Suspense, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import Header from '@components/skya_header';
import Title from '@components/skya_title';
import Introduci from '@components/skya_introduci';
import Footer from '@components/skya_footer';
import Scrollbar from '@components/skya_scrollbar';
import Loading from '@components/skya_loading';

import '@styles/index.scss';

//TODO: i18n required

//const LazyBg = lazy(() => import('@components/skya_bgPart'));

export default function IndexPage() {
  useEffect(() => {
    document.title = 'Welcome-to-[SKYA-Project]-website!'
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>

        <header id='header'>
          <Header />
        </header>

        <ReactLenis root>

          <main>
            <Title />
            <Introduci />
          </main>

          <Footer />

          <Scrollbar />

        </ReactLenis>
      </Suspense>
    </>
  )
}