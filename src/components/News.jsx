import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

const News = ({ news }) => {
    const { urlToImage, url, title, description, source } = news

    return (
        <Grid item md={6} lg={4}>
            <Card>
                {urlToImage && (
                    <CardMedia
                        component='img'
                        alt={`Imagen de la noticia ${title}`}
                        image={urlToImage}
                        height={250}
                    />
                )}

                <CardContent>
                    <Typography variant='body1' color='error'>
                        {source.name}
                    </Typography>

                    <Typography variant='h5' component='div'>
                        {title}
                    </Typography>

                    <Typography variant='body2'>
                        {description}
                    </Typography>

                    <CardActions>
                        <Link
                            textAlign='center'
                            href={url}
                            target='_blank'
                            variant='button'
                            width='100%'
                            sx={{
                                textDecoration: 'none'
                            }}
                        >
                            Leer más
                        </Link>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default News