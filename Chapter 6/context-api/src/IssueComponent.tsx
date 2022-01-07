import React,{FC, useContext} from 'react'

import { IssueContext, Issue } from './Contexts/Issue'

const IssueComponent:FC = () => {
  const {issues,url} = useContext(IssueContext)
  return (
    <>
      <h1>ContentPI Issues from Context</h1>

      {issues.map((issue:Issue) =>(
        <p key={`issue-${issue.number}`}>
          <strong>#{issue.number}</strong>{''}
          <a href={`${url}/${issue.number}`}>{issue.title}</a>{''}
          {issue.state}
        </p>
      ))}
    </>
  )
}

export default IssueComponent
