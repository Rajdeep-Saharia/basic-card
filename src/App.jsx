import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
 

  const lists = [
    { label: 'Item 1', value: 'option1' },
    { label: 'Item 2', value: 'option2' },
    { label: 'Item 3', value: 'option3' }
  ]

  const arr = [
    { label: 'Item 4', value: 'option4' },
    { label: 'Item 5', value: 'option5' },
    { label: 'Item 6', value: 'option6' }
  ]

  const arr2 = [
    { label: 'Item 7', value: 'option4' },
    { label: 'Item 8', value: 'option5' },
    { label: 'Item 9', value: 'option6' }
  ]

  


  return (
    <>
      <div style={{display:'flex'}}>
      
      <Card title='Title1' description='Description 1' options={lists} label='First'></Card>
      <Card title='Title2' description='Description 2' options={arr} label='Second'></Card>
      <Card title='Title3' description='Description 3' options={arr2} label='Third'></Card>
      
</div>
     
      <Button></Button>
     
    </>
  )
}

export default App
