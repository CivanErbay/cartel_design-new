export const getGridClasses = index => {
  const baseClasses = 'lg:col-span-6'
  const paddingClasses = index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'

  return `${baseClasses} ${paddingClasses}`
}

export const getGridClassesOffset = index => {
  if (index % 4 === 0) {
    return 'lg:col-start-2 lg:col-end-6'
  } else if (index % 4 === 1) {
    return 'lg:col-start-7 lg:col-end-13'
  } else if (index % 4 === 2) {
    return 'lg:col-start-2 lg:col-end-7'
  } else {
    return 'lg:col-start-8 lg:col-end-13'
  }
}