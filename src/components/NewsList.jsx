import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import useNews from '../hooks/useNews'
import Grid from '@mui/material/Grid'
import News from './News'

const NewsList = () => {
    const { news, totalResults, handleChangePage, page } = useNews()

    const totalPages = Math.ceil(totalResults / 20)

    return (
        <>
            <Typography
                textAlign='center'
                component='h2'
                variant='h3'
                marginY={5}
            >
                Últimas noticias
            </Typography>

            <Grid container spacing={2}>
                {news.map(news => (
                    <News
                        key={news.url}
                        news={news}
                    />
                ))}
            </Grid>

            <Stack
                spacing={2}
                direction='row'
                justifyContent='center'
                alignItems='center'
                sx={{
                    marginY: 5
                }}
            >
                <Pagination
                    count={totalPages}
                    color='primary'
                    onChange={handleChangePage}
                    page={page}
                />
            </Stack>
        </>
    )
}

export default NewsList