import React from 'react';
import './style.css';
import { TechniqueDetail } from '../../components/TechniqueDetail';

export const TechniquePage = () => {
  const details = [
    {
      title: '1. Správné držení prsu',
      description:
        'Držte prs tak, aby se vaše prsty nedotýkaly dvorce a aby byl prs podpírán zespodu všemi prsty kromě palce. Palec je položen vysoko nad dvorcem. Bradavku nabízejte připravenou, tj. vytvarovanou do špičky, tak jako když chcete odstříknout mléko. Bradavka ani dvorec nesmí být oteklý. V případě otoku ho rozmasírujte směrem nahoru krouživými pohyby. Abyste předešla otokům, noste podprsenku, je-li bradavka nejníže uloženou částí prsu. Prs nabídněte dítěti tak, aby uchopilo nejen bradavku, ale co možná největší část dvorce.',
      images: ['/img/spravne-drz-prs.jpeg', '/img/nespravne-drz-prs.jpeg'],
    },
    {
      title: '2. Správná vzájemná poloha matky a dítěte',
      description:
        'Zvolte pohodlnou pozici pro sebe i pro dítě, aby vás nikde nic netlačilo a nebolely záda. Obličej, hrudník, bříško i kolena miminka směřují k vám. Ucho, rameno a kyčle dítěte jsou v jedné linii. Přidržujte si rukou tělo miminka k sobě za ramena a záda, nikoliv za hlavičku. Mezi vámi a dítětem nesmí být žádná překážka (ručička, kus zavinovačky apod). Brada, tvář i nos miminka se dotýkají prsu. Dítě přikládáme k prsu, nikoliv prs k dítěti. Dítě nesmí křičet, kojení vás nesmí bolet. Pokud kojení bolí, odpojte dítě (malíčkem do koutku úst dítěte) a zkuste přiložit znovu.',
    },
    {
      title: '3. Správné přisátí dítěte',
      description:
        'Bradavka musí být vždy v úrovni úst dítěte. Drážděním úst miminka bradavkou vyvoláte hledací reflex a miminko správně široce otevře ústa jako při zívání. Při přisátí miminko uchopí nejen bradavku, ale i co největší část dvorce. Všechny vaše prsty, kromě palce by měly být pod bradavkou. Správně přisátému miminku se brada a nos dotýká prsu. Většina dvorce je v ústech dítěte. Více dvorce je vidět nad ústy miminka než pod nimi. Dolní ret je ohrnut ven, jazyk přesahuje dolní ret. Bradavka i s dvorcem je na jazyku. Tváře dítěte nevpadávají dovnitř. Při sání se pohybují spánky a uši dítěte. Platí zásada, že miminko kojíme na požádání a tak dlouho dokud se samo nepustí.',
    },
  ];

  return (
    <div className="technique__container">
      <h2 className="technique__title">Správná technika kojení</h2>
      <div className="download-link">
        <a href="/download/Spravna-technika-kojeni.pdf" download>
          Stáhnout PDF
        </a>
      </div>
      <div className="technique__list">
        {details.map((detail, index) => (
          <TechniqueDetail
            key={index}
            title={detail.title}
            description={detail.description}
            images={detail.images}
          />
        ))}
      </div>
    </div>
  );
};
