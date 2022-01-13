const trimTitle = (title) => {
  if (title.length > 106) {
    return title.substring(0, 106) + "...";
  } else {
    return title
  }
}

export default trimTitle;