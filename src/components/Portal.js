import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalExampleBasic() {
  const [open, setOpen] = React.useState(true)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button>Basic Modal</Button>}
      style={{Overflow:'hidden'}}
    >
      <Header icon>
          </Header>
      <Modal.Content>
        <p style={{textAlign:'center',fontSize:'20px'}}>
         מפה זו מציגה מקומות וזמנים בהם שהו חולי קורונה מאומתים ב-14 הימים האחרונים, לפני שנכנסו לבידוד. מקור המידע הוא חקירות אפידמיולוגיות המתבצעות על ידי משרד הבריאות. המפה לא מציגה כתובת מגורים או נתוני פרט של חולים, ואינה מייצגת את התפשטות המחלה.

 
        </p>
      </Modal.Content>
      <Modal.Actions>
        
        <Button color='green' style={{float:"left"}} inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> אישור
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleBasic