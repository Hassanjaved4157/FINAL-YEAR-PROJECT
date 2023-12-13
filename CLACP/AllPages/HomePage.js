import React from 'react';
import HaderPart from '../Comonents/Hader';
import PagesMainContainer from '../Comonents/pagesMainContainer';
import FooterPart from '../Comonents/Footer';
import LawsMainContainer from '../Comonents/LawsMainContainer';
import LawsCardsFlatList from '../Comonents/LawsCards';
import HeaderParts from '../Comonents/HeaderParts';
import Navbar from '../Comonents/Navbar';

const HomePage = ({navigation}) => {
  const lawsData = [
    {
      key: '1',
      section: '324 - C',
      lawName: 'Attempt To Murder',
      description: `When the injuries are simple and nothing intervened to prevent the offender from committing the murder, the offence falls under section 324, PPC (DB) 1975 P.Cr.LJ 1210 Ramzan.
Attempt to kill. Although an act may be sufficient to cause death but it would not constitute an offence u/S.307 PPC if necessary intention or knowledge is not established. An attempt per se would not bring case u/S.307 PPC which should stem from specific intention to commit murder. Held, intention to kill cannot be inferred from the mere fact that the pistol shots were fired by the appellant. Appellants acquitted. PLJ 1993 Cr.C. (Kar.) 196, Qayyum Khan.
Injury and its site are not necessary ingredients of offence under section 307, P.P.C. Attack with open knives but blows landing on non-vital parts. No ground for quashing charge under section 307, P.P.C. PLD 1963 Lah. 442 Muhammad Nazir.
Simple injuries with dangerous weapons. Contention that the offence fell under section 324, and not under section 307, PPC Held, the use of dangerous weapons coupled with evidence regarding motive made it clear. In the circumstances, had the victim received fatal injuries accused would have been guilty of murder. Conviction under section 307, PPC held proper. (FC) 1969 P.Cr.LJ 1544 Roshan Akhtar etc. v. Crown.
None of the injuries grievous or dangerous to life or on any vital part of the body. Conviction u/S. 307, PPC altered to one u/S. 324, PPC PLJ 1991 Cr. C. (Lah.) 358 Muhammad Abbas. PLJ 1991 Cr. C. (Lah.) 359 Javed.
307, PPC and not 324, PPC. When three dagger blows were given on the neck although simple in nature the offence would be under section 307 and not 324, PPC. (SC) 1982 PSC 1476 Muhammad Khalid.
Natural consequence of the act. Accused inflicting knife blow only once on abdomen presumed to have not intended murder. Presumption that a man intends the natural consequences of his act, does not extend to consequences which have not occurred. PLD 1962 Kar. 269 Nawab Ali.`,
    },
    {
      key: '2',
      section: '4/4/79',
      lawName: 'The Prohibition Order',
      description: `Similarly when the offense is stated to be 4/4/79, it means that the accused has been charged with an offence under Article 4 of order 4 of 1979; Commonly known as The Prohibition Order. The Ordinance governs the Manufacturing, possession, transportation and sale etc of the drugs and intoxicants. The relevant section is reproduced hereunder.

Owing or Possessing Intoxicant Whoever owns, possesses or keeps in his custody any intoxicant shall be punished with imprisonment of either description for a term, which may extend to two years, or with whipping not exceeding thirty stripes, and shall also be liable to fine. Provided that nothing contained in this Article shall apply to a non-Muslim foreigner or to a non-Muslim citizen of Pakistan who keeps in his custody at or about time of ceremony prescribed by his religion a reasonable quantity of intoxicating liquor for the purpose of using it as a part of such ceremony.

Provided further that, if intoxicant in respect of which the offence is committed is heroin, raw opium or coca leaf, and the quantity exceeds ten grams in the case of heroin leaf, the offender shall be punishable with imprisonment for life or with imprisonment which is not less than two years and with whipping not exceeding thirty stripes.`,
    },
    // Add more items if needed
  ];

  return (
    <PagesMainContainer>
      {/* <Navbar navigation = {navigation}/> */}
      <HeaderParts />
      <LawsMainContainer>
        <LawsCardsFlatList lawsData={lawsData} />
      </LawsMainContainer>
      {/* <FooterPart /> */}
    </PagesMainContainer>
  );
};

export default HomePage;
