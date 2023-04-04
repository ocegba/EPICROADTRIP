import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PrintIcon from '@mui/icons-material/Print';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CancelIcon from "@mui/icons-material/Cancel";
import ShareIcon from '@mui/icons-material/Share';
import Icon from "@mui/material/Icon";
import { green, red } from '@mui/material/colors';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItnCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {"Username"}
          </Avatar>
        }
        subheader={"Date"}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {"Itn"}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="print">
          <PrintIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <Icon>{true ? <CheckBoxIcon sx={{ color: green[500] }}/> : <CancelIcon sx={{ color: red[500] }}/>}</Icon>
          </Typography>
          <Typography paragraph>
            <Icon>{false ? <CheckBoxIcon sx={{ color: green[500] }}/> : <CancelIcon sx={{ color: red[500] }}/>}</Icon>
          </Typography>
          <Typography paragraph>
            <Icon>{true ? <CheckBoxIcon sx={{ color: green[500] }}/> : <CancelIcon sx={{ color: red[500] }}/>}</Icon>
          </Typography>
          <Typography paragraph>
            <Icon>{true ? <CheckBoxIcon sx={{ color: green[500] }}/> : <CancelIcon sx={{ color: red[500] }}/>}</Icon>
          </Typography>
          <Typography paragraph>
            <Icon>{true ? <CheckBoxIcon sx={{ color: green[500] }}/> : <CancelIcon sx={{ color: red[500] }}/>}</Icon>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
