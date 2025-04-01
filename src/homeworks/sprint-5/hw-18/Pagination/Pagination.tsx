import s from './Pagination.module.css'

type PaginationProps = {
  totalCount: number
  pageSize: number
  pageNumber: number
  handlePageChange: (page: number) => void
  handlePageSizeChange: (pageSize: number) => void
}

export const Pagination = ({
  totalCount,
  pageSize,
  pageNumber,
  handlePageChange,
  handlePageSizeChange,
}: PaginationProps) => {
  // 📝 добавьте динамический расчет totalPages
  const totalPages = Math.floor(totalCount / pageSize)

  return (
    <div className={s.pagination}>
      <button
        id={'hw18-pagination-prev'}
        onClick={() => handlePageChange(pageNumber - 1)}
        // 📝 кнопка должна быть disabled на первой странице
        disabled={pageNumber === 1}
        className={s.button}>
        Prev
      </button>

      {Array(totalPages)
        .fill(null)
        .map((_, index) => {
          const page = index + 1

          return (
            <button
              id={`hw18-pagination-button-${page}`}
              key={page}
              onClick={() => handlePageChange(page)}
              className={`${s.button} ${pageNumber === page ? s.buttonActive : ''}`}>
              {page}
            </button>
          )
        })}

      <button
        id={'hw18-pagination-next'}
        onClick={() => handlePageChange(pageNumber + 1)}
        // 📝 кнопка должна быть disabled на последней странице
        disabled={totalPages === pageNumber}
        className={s.button}>
        Next
      </button>

      <select
        id={'hw18-pagination-select'}
        value={pageSize}
        onChange={(e) => {
          handlePageChange(1)
          handlePageSizeChange(Number(e.target.value))
        }}
        className={s.select}>
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
      </select>
    </div>
  )
}
