export const capitaliseTitle = (str) => {
  return str.toLowerCase()
     .split(" ")
     .map(word => {
       return word.charAt(0).toUpperCase() + word.substring(1)
     })
     .join(" ")
}