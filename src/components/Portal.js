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
      style={{Overflow:'hidden'}}
    >
      <Header icon>
          </Header>
      <Modal.Content>
        <p style={{textAlign:'center',fontSize:'20px'}}>
        מפה זו מבוססת על נתוני משרד הבריאות, על בסיס המידע שנמסר מנבדקים שנמצאו חיוביים לוירוס הקורונה </p>
        <p  style={{textAlign:'center',fontSize:'20px'}}>
          המידע הכלול במפה הוא למטרות כלליות ולמתן מידע ראשוני בלבד, אינו בהכרח שלם ויתכן יחולו בו אי דיוקים
          המידע אינו מהווה תחליף להתייעצות רפואית או לטיפול רפואי ובכל מקרה של חשש יש לפנות לקבלת מידע נוסף במוקד משרד הבריאות או מוקד מד"א
          </p>
          <p  style={{textAlign:'center',fontSize:'20px'}}>
          בשימוש במפה, המשתמש מסכים לכך שכל הסתמכות על המידע המוצג במפה מעבר לידיעה כללית - הוא בשיקול דעתו ועל אחריותו הבלעדית של המשתמש
          </p>
          <p  style={{textAlign:'center',fontSize:'20px'}}>

          ככל שיש אי התאמה או סתירה בין המידע במפה לבין מידע שמפורסם לציבור באתר הרשמי של משרד הבריאות ועל ידי גורמי משרד רשמיים באצמעי התקשורת השונים - המידע שנמסר באתר הוא הנכון
 
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