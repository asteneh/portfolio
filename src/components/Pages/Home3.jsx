import React, { useEffect } from 'react';
import HeroStyle3 from '../Hero/HeroStyle3';
import { pageTitle } from '../../helpers/PageTitle';


export default function Home3() {
  pageTitle('Atseneh');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroStyle3
        heroBg="/images/Green_Svg.svg"
        // heroImg="https://media4.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif"
        heroImg="/images/large_a.svg"
        videoUrl="https://youtu.be/DFmhX5h6Lig"
        title="Hi, i'm ATSE"
        subTitle="Hi, I’m Atse, a passionate software developer with a strong focus on<br> creating efficient and scalable web and software solutions. "
        btnUrl="/contact"
        btnText="See My Works"
      />

     
    </>
  );
}
