function groupBy<T, K extends keyof any>(arr: T[], key: (i: T) => K): Record<K, T[]> {
  return arr.reduce(
    (groups, item) => {
      const val = key(item);
      groups[val] = groups[val] || [];
      groups[val].push(item);
      return groups;
    },
    {} as Record<K, T[]>,
  );
}

// const groupedProducts = groupBy(products, product => product.category);
export const arrayHelper = {
  groupBy,
};
