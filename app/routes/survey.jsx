import React from 'react'
import SurveyForm from '../components/SurveyForm'
import {addAnswer} from '../models/survey.server'
export const action = async ({request}) => {

  const formData = await request.formData()
  const data = Object.fromEntries(formData.entries())
  const entry = Object.entries(data)[0]

  const entryData = {
    question: entry[0],
    answer:  entry[1] 
  }

  const answer = await addAnswer(entryData);

  console.log({answer})

  return null
}

function survey() {
  return (
    <div>
      <SurveyForm />
    </div>

  )
}

export default survey