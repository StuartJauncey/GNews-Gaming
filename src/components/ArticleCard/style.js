import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  card: {
    margin: "10px 5px",
    padding: "15px",
    listStyle: "none",
    backgroundColor: "rgb(210, 210, 210)",
    boxShadow: "1px 1px 5px rgb(196, 194, 195)",
    borderRadius: "5px",
    display: "grid",
    gridTemplateColumns: "90% auto auto",
    gridTemplateRows: "auto auto auto auto auto",
    gridTemplateAreas: 
    `"title edit delete"
    "description description description"
    "contentText contentText contentText"
    "image image image"
    "time time time"`
  },
  title: {
    fontSize: "20px",
    gridArea: "title",
    textAlign: "left",
    margin: "0",
    paddingRight: "15px"
  },
  editButton: {
    margin: "0",
    gridArea: "edit",
    "&:hover": {
      color: "red"
    }
  },
  deleteButton: {
    margin: "0",
    gridArea: "delete",
    color: "red",
    "&:hover": {
      cursor: "pointer",
      color: "maroon"
    }
  },
  description: {
    alignSelf: "center",
    padding: "5px 10px",
    backgroundColor: "rgb(235, 233, 234)",
    boxShadow: "1px 1px 5px rgb(196, 194, 195)",
    borderRadius: "5px",
    fontStyle: "italic",
    fontSize: "17px",
    gridArea: "description"
  },
  content: {
    alignSelf: "center",
    padding: "5px 10px",
    backgroundColor: "rgb(235, 233, 234)",
    boxShadow: "1px 1px 5px rgb(196, 194, 195)",
    borderRadius: "5px",
    fontSize: "15px",
    gridArea: "contentText"
  },
  articleLink: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "rgb(35, 35, 150)"
    }
  },
  image: {
    backgroundColor: "rgb(235, 233, 234)",
    boxShadow: "1px 1px 5px rgb(196, 194, 195)",
    borderRadius: "5px",
    gridArea: "image",
    width: "80%",
    maxWidth: "200px",
    margin: "auto"
  },
  date: {
    alignSelf: "center",
    padding: "5px 10px",
    backgroundColor: "rgb(235, 233, 234)",
    boxShadow: "1px 1px 5px rgb(196, 194, 195)",
    borderRadius: "5px",
    gridArea: "time"
  },
  websiteLink: {
    textDecoration: "none"
  }
});