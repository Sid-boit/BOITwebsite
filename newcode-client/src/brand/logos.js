/* Brand logos — swap ACTIVE to try candidates without hunting imports.
   Candidates live in src/assets/logos/:
     logo-a / mark-a  — earlier ribbon wordmark
     logo-b / mark-b  — second trial wordmark
     logo-c / mark-c  — latest trial wordmark
   Set ACTIVE to 'a' | 'b' | 'c', then refresh. */

import logoA from '../assets/logos/logo-a.png';
import markA from '../assets/logos/mark-a.png';
import logoB from '../assets/logos/logo-b.png';
import markB from '../assets/logos/mark-b.png';
import logoC from '../assets/logos/logo-c.png';
import markC from '../assets/logos/mark-c.png';

/** @type {'a' | 'b' | 'c'} */
export const ACTIVE = 'c';

const catalog = {
  a: { full: logoA, mark: markA, label: 'Logo A' },
  b: { full: logoB, mark: markB, label: 'Logo B' },
  c: { full: logoC, mark: markC, label: 'Logo C (latest)' },
};

const active = catalog[ACTIVE] || catalog.c;

export const logoFull = active.full;
export const logoMark = active.mark;
export const logoLabel = active.label;
export const logoCatalog = catalog;
