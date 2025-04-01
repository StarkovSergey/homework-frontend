export const setItem = (key: string, value: unknown) => {
  try {
    const jsonValue = JSON.stringify(value)
    localStorage.setItem(key, jsonValue)
  } catch (error) {
    console.error(`Error saving key "${key}" to localStorage:`, error)
  }
}

export const getItem = (key: string) => {
  try {
    const jsonValue = localStorage.getItem(key)
    return jsonValue !== null ? JSON.parse(jsonValue) : null
  } catch (error) {
    console.error(`Error reading key "${key}" from localStorage:`, error)
    return null
  }
}

export const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing key "${key}" from localStorage:`, error)
  }
}

export const clearStorage = () => {
  try {
    localStorage.clear()
  } catch (error) {
    console.error('Error clearing localStorage:', error)
  }
}
