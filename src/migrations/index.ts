import * as migration_20260825_183502_initial from './20260825_183502_initial';

export const migrations = [
  {
    up: migration_20260825_183502_initial.up,
    down: migration_20260825_183502_initial.down,
    name: '20260825_183502_initial'
  },
];
