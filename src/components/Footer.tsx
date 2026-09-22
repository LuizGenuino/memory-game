import React from 'react';
import { GLOBAL_CONFIG } from '../config/globalConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// ⚓ Footer geral — aparece em TODAS as rotas
type props = {
    fontColor?: string
    fontColorHover?: string
}


export const Footer: React.FC = ({fontColor='black', fontColorHover='emerald-300'}: props) => {
  const f = GLOBAL_CONFIG.footer;

  return (
    <footer className="w-full py-4 flex flex-col items-center gap-1text-xs sm:text-sm">
      <span>
        {f.text}{' '}
        <a
          href={f.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-bold text-${fontColor} hover:text-${fontColorHover} transition-colors underline underline-offset-2`}
        >
          {f.brandName}
        </a>
      </span>
      <a
        href={f.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-1 text-${fontColor} hover:text-${fontColorHover} transition-colors`}
      >
        <FontAwesomeIcon icon={faInstagram} /> {f.instagramLabel}
      </a>
    </footer>
  );
};
