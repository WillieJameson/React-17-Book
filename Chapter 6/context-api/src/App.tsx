import React from 'react'
import IssueProvider from './Contexts/Issue'
import IssueComponent from './IssueComponent'

const App = () => {
  return (
    <IssueProvider url={`https://api.github.com/repos/ContentPI/ContentPI/issues`}>
      <IssueComponent/>
    </IssueProvider>
  )
}

export default App
