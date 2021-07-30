import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { httpToHttps } from './../typography/url'
import { makeStyles, Card, Typography, CardMedia, CardActionArea, CardContent, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250
  },
  mediaContainer: {
    padding: theme.spacing(2)
  },
  media: {
    backgroundSize: '100% 100%',
    height: 200
  },
  content: {
    height: 150,
    wordBreak: 'break-word'
  },
  title: {
    minHeight: 60
  }
}))

export const TeamsCard = ({ team }) => {
  const history = useHistory()
  const classes = useStyles()


  return (
    <Link to={`/Teams/${team.id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <Container className={classes.mediaContainer}>
            <CardMedia className={classes.media} image={httpToHttps(team.crestUrl)} title={team.name} />
          </Container>
          <CardContent className={classes.content}>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">
              {team.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {team.venue}
            </Typography>
            <Link href={httpToHttps(team.website)} target="blank">{httpToHttps(team.website)}</Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

