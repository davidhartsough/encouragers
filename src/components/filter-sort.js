const compareNum = (a, b) => a.num - b.num;
const compareNumDesc = (a, b) => b.num - a.num;
function compareNameDesc(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}
function compareNameAsc(a, b) {
  if (a.name < b.name) return 1;
  if (a.name > b.name) return -1;
  return 0;
}

export function filterSortItems(items, search, sort, ascending) {
  const query = search.trim().toUpperCase();
  let listItems = items;
  if (query.length > 1) {
    listItems = items.filter(p => p.name.toUpperCase().includes(query));
  }
  if (listItems.length) {
    const sortComparison =
      sort === "name"
        ? ascending
          ? compareNameAsc
          : compareNameDesc
        : ascending
        ? compareNum
        : compareNumDesc;
    listItems = listItems.sort(sortComparison);
  }
  return listItems;
}
