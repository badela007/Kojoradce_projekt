import React from 'react';
import './style.css';
import { PositionDetail } from '../../components/PositonDetail';

export const PositionsPage = () => {
  const positions = [
    {
      title: 'Poloha vleže',
      description:
        'Oba ležíte na boku. Vy máte podloženou hlavu polštářem, aby se vyrovnala poloha hlavy s výší ramene. Miminko leží proti vám a vy ho lehce přidržujete.',
      imgSrc: '/img/v-leze-poloha.png',
      imgAlt: 'Matka kojí v leže na boku',
    },
    {
      title: 'Poloha vleže na zádech',
      description:
        'Ležíte opřená o polštáře. Miminko leží bříškem na vás obličejem dolů. Této poloze se také říká novorozenecká, obvykle se takto přikládá miminko hned po porodu. Poloha je vhodná pro skin-to-skin kontakt, kdy vy i miminko jste svlečení do půli těla.',
      imgSrc: '/img/vleze-na-zadech-poloha.png',
      imgAlt: 'Matka kojí v leže na zádech',
    },
    {
      title: 'Poloha vsedě (kolébka, madona)',
      description:
        'Miminko leží na boku v náručí, celým tělem k vám. Vaši ruka podpírá zadeček. Druhou rukou můžete přidržovat prs, spodní ruka dítěte je kolem pasu matky. Pod nohy si můžete dát stoličku a záda si můžete opřít, při této poloze se dá dobře využít kojící polštář. Polohu si můžete vyzkoušet také v pololehu a vypodložit si nohy pod koleny polštářem, pak bude poloha vhodná i pro maminky po císařském řezu.',
      imgSrc: '/img/kolebka-poloha.png',
      imgAlt: 'Matka kojí v sedě, dítě má v náruči',
    },
    {
      title: 'Fotbalová (boční) poloha',
      description:
        'Tato poloha je vhodná pro ženy s velkými prsy, s plochými bradavkami či po císařském řezu. Miminko leží na předloktí maminky, která rukou podpírá ramínka dítěte. Prsty podpírají hlavičku. Nohy dítěte jsou podél vašeho boku. Chodidla se nesmí o nic opírat. Vaše předloktí je podepřeno polštářem.',
      imgSrc: '/img/fotbalova-poloha.png',
      imgAlt: 'Matka kojí v sedě',
    },
  ];

  return (
    <>
      <div className="positions__intro">
        <h1 className="positions__title">Polohy při kojení</h1>
        <div className="positions__text">
          <p>
            Je důležité najít uvolněnou a pohodlnou polohu, aby vás nebolely
            bradavky a miminko efektivně sálo.
          </p>
          <p>
            Můžete vyzkoušet několik poloh během dne, ulevíte bradavkám a
            rovnoměrně vyprázdníte prsa.
          </p>
        </div>
        <div className="download-link">
          <a href="/download/Polohy-kojeni.pdf" download>
            Stáhnout PDF
          </a>
        </div>
      </div>

      <div className="positions__list">
        {positions.map((position, index) => (
          <PositionDetail
            key={index}
            title={position.title}
            description={position.description}
            imgSrc={position.imgSrc}
            imgAlt={position.imgAlt}
          />
        ))}
      </div>
    </>
  );
};
