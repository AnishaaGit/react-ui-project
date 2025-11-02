import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1686244636601-d5a580b2513d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxvZmZpY2UlMjB3b3JraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600', 
      intro:'', 
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1579389083175-247ef703006f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxvZmZpY2UlMjB3b3JraW5nJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600', 
      intro:'', 
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG9mZmljZSUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600', 
      intro:'', 
      tag:'Underbanked'
    },
    {
      img:'https://images.unsplash.com/photo-1633113215883-a43e36bc6178?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxvZmZpY2UlMjB3b3JraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600', 
      intro:'', 
      tag:'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
