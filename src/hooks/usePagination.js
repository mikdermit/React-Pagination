export const DOTS = "...";

function usePagination({ currentPage, pageSize, totalCount }) {
  const lastPage = Math.ceil(totalCount / pageSize)
  let pages = []

  if (lastPage <= 4) {
    for (let i = 1; i <= lastPage; i++) pages.push(i)
    return pages
  }
  
  else if (currentPage <= 3 ) {
    pages = [ 1, 2, 3, DOTS, lastPage]
    return pages
  }
  
  else {
    pages = [
      1,
      DOTS,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      DOTS,
      lastPage
    ]
    return pages
  }
}

export default usePagination;
