import React from 'react';

const CAPABILITIES = [
  'Blip Platform Specialist',
  'TypeScript & Node.js',
  'Clean Architecture & SOLID',
  'Automação Financeira (FGTS & Consignado)',
  'Cypress E2E Testing',
  'Bancos SQL: Oracle, Postgres, SQL Server, Firebird',
  'C# .NET & Delphi Legado',
  'Pós UTFPR Web & IA',
  'Design Conversacional de Alta Escala',
  'Microsserviços & APIs REST'
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-track">
        {CAPABILITIES.concat(CAPABILITIES).map((item, idx) => (
          <span key={idx} className="marquee-item">
            <b>·</b>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
