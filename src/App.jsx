import { Container, Grid, Typography } from '@mui/material'
import { NewsProvider } from './context/NewsProvider'
import NewsList from './components/NewsList'
import Form from './components/Form'

const App = () => {
  return (
    <NewsProvider>
      <header style={{
        backgroundColor: '#2196f3',
        paddingTop: '20px',
        paddingBottom: '20px',
        marginBottom: 50,
        borderBottom: '6px solid #176aae'
      }}
      >
        <Typography align='center' component='h1' variant='h2' color='white'>
          News App
          <i className="fa-solid fa-newspaper" style={{ marginLeft: 20 }} />
        </Typography>
      </header>

      <Container>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid item xs={12} md={6}>
            <Form />
          </Grid>
        </Grid>

        <NewsList />
      </Container>
    </NewsProvider>
  )
}

export default App
