// @ts-nocheck
import { useEffect } from 'react';
import Title from '@components/skya_title';
//import BgPart from '@components/skya_bgPart';
import { SkyaBtnErr } from '@components/skya_button';
import { GlitchSvg } from '@components/skya_filters';
import Footer from '@components/skya_footer';
//import DbgOutputStatus '@components/skya_debugging';


//TODO: i18n required
import '@styles/skya_404.scss';

export default function Error404Page() {
  useEffect(() => {
    document.title = 'Oh-HO 404!';
  }, []);

  return (
    <>
      <GlitchSvg />
      

      <header>
        <h1 className="title">~ Ey! Nothing here! ~</h1>
        <Title />
      </header>

      <main>

        <span>output:</span>
        <p className="output"><span>~#</span> can't found any pages matches you have typed !</p>
        <SkyaBtnErr />

      </main>

      <Footer />
    </>
  )
}