import React from 'react';

/**
 * Reusable SectionTitle component to maintain consistency across sections.
 * @param {string} number - The section identifier (e.g. "// 01")
 * @param {string} title - The visible title of the section
 */
export const SectionTitle = ({ number, title }) => {
  return (
    <div className="section-header">
      {number && <p className="section-label">{number}</p>}
      <h2 className="section-title">{title}</h2>
    </div>
  );
};
