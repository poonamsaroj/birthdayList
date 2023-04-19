import { useState } from 'react'
import data from './data/data'
import List from './components/List'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function App() {

  const [person, setPerson] = useState(data);

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Card sx={{ minWidth: 275, width: 500, mt:5 }} >
          
          <CardContent>
      
            <Typography variant="body1">
            
              {person.length} Birthdays Today
            
            </Typography>
            
            <List person={person} />      

          </CardContent>
          
          <CardActions>
      
            <Button  color="secondary" variant="contained">Clear List</Button>

          </CardActions>
        
        </Card>
      </Container>
    </div>
  )

}

export default App
