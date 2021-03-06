export const objectMatchText = <T extends object>(obj: T, searchText = '') => {
  const valuesMerged = Object.values(obj)
    .filter((value) => typeof value === 'number' || typeof value === 'string')
    .join(' ');
  const normalizedString = valuesMerged.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const normalizedSearchText = searchText.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return normalizedString.toUpperCase().includes(normalizedSearchText.toUpperCase());
};
