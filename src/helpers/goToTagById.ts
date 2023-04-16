const goToTagById = (id: string) => () => {
  const violation = document.getElementById(id)
  if (!violation) return console.log(!violation)

  window.scrollTo({
    top: violation.offsetTop,
    behavior: 'smooth',
  })
}

export default goToTagById
