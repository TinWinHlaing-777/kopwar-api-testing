import React, { useState, useEffect } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Card,
  CardContent,
  CardActions,
  Grid,
  IconButton,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  pagetitle: {
    marginLeft: "auto",
    marginRight: "auto",
    textTransform: "uppercase",
  },
  uploadBtn: {
    float: "right",
    marginRight: "10%",
    marginTop: 50,
  },
  searchBtn: {
    marginLeft: "10%",
    marginTop: 50,
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  itemCard: {
    width: "90%",
    boxShadow: "0 5px 25px rgb(0 0 0/8%)",
    marginLeft: 20,
  },
  editBtn: {
    marginRight: "auto",
    color: "lightgreen",
  },
  delBtn: {
    paddingLeft: "auto",
    color: "red",
  },
}));

const datas = [
  {
    name: "Apple",
    price: 12000,
  },
  {
    name: "Apple",
    price: 12000,
  },

  {
    name: "Apple",
    price: 12000,
  },
  {
    name: "Apple",
    price: 12000,
  },
  {
    name: "Apple",
    price: 12000,
  },
];

const Home = () => {
  useEffect(() => {
    getData();
  }, []);
  const classes = useStyle();

  const [dialogopen, setDialogOpen] = useState(false);
  const [searchdialog, setSearchDialog] = useState(false);
  const [editdialog, setEdiaDialog] = useState(false);
  const [isdata, setData] = useState([]);

  const handleOpenPostDialog = () => {
    setDialogOpen(true);
  };

  const handleClosePostDialog = () => {
    setDialogOpen(false);
  };

  const handleOpenSearchDialog = () => {
    setSearchDialog(true);
  };

  const handleCloseSearchDialog = () => {
    setSearchDialog(false);
  };

  const handleOpenEditDialog = () => {
    setEdiaDialog(true);
  };

  const handleCloseEditDialog = () => {
    setEdiaDialog(false);
  };

  // Get Data from api
  const getData = () => {
    axios
      .get("https://kopwar.com.mm/webapp/api/new_api/index.php")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.pagetitle}>
            Kopwar Api Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        className={classes.searchBtn}
        onClick={handleOpenSearchDialog}
      >
        Search
      </Button>
      <Dialog open={searchdialog} onClose={handleCloseSearchDialog}>
        <DialogTitle id="form-dialog-title">Search data</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField margin="dense" id="name" label="Name" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseSearchDialog}
            color="primary"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleCloseSearchDialog();
            }}
            color="primary"
            variant="outlined"
          >
            Search
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        variant="contained"
        color="primary"
        startIcon={<CloudUploadIcon />}
        className={classes.uploadBtn}
        onClick={handleOpenPostDialog}
      >
        Post Data
      </Button>
      <Dialog open={dialogopen} onClose={handleClosePostDialog}>
        <DialogTitle id="form-dialog-title">Post data</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField margin="dense" id="name" label="Name" fullWidth />
          <TextField margin="dense" id="price" label="Price" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClosePostDialog}
            color="primary"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={handleClosePostDialog}
            color="primary"
            variant="outlined"
          >
            Post
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container className={classes.cardContainer} spacing={4}>
        {datas.map((data) => {
          return (
            <Grid item md={4}>
              <Card className={classes.itemCard}>
                <CardContent>
                  <Typography>{data.name}</Typography>
                  <Typography>{data.price}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    className={classes.editBtn}
                    onClick={() => {
                      handleOpenEditDialog();
                      alert(datas.indexOf(data));
                    }}
                  >
                    <EditOutlinedIcon />
                  </IconButton>
                  <IconButton className={classes.delBtn}>
                    <DeleteForeverIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Dialog open={editdialog} onClose={handleCloseEditDialog}>
        <DialogTitle id="form-dialog-title">Update data</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField margin="dense" id="name" label="Name" fullWidth />
          <TextField margin="dense" id="price" label="Price" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseEditDialog}
            color="primary"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={handleCloseEditDialog}
            color="primary"
            variant="outlined"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
