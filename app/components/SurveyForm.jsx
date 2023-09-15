import { Form } from '@remix-run/react'
import React from 'react'


function SurveyForm() {


  return (
    <>
      {/* <Form method="post" action="/survey">
        <fieldset>
          <p>How likely are you to recommend a friend to come get Wired with TD at GHC?</p>
          <label>
            <input type="radio" name="recommend" value="1"/> 1
            <div className="circle" />
          </label>
          <label>
            <input type="radio" name="recommend" value="2" /> 2
            <div className="circle" />
          </label>
          <label>
            <input type="radio" name="recommend" value="3" /> 3
            <div className="circle" />
          </label>
          <label>
            <input type="radio" name="recommend" value="4" /> 4
            <div className="circle" />
          </label>
          <label>
            <input type="radio" name="recommend" value="5" /> 5
            <div className="circle" />
          </label>
        </fieldset>

      </Form>
      <Form method="post" action="/survey">
        <fieldset>
          <p>How would you rate your interest in a career at TD after learning more about us today?</p>
          <label>
            <input type="radio" name="recommend" value="1" /> 1
            <div className="circle" />
          </label>
          <label>
            <input type="radio" name="recommend" value="2" /> 2
            <div className="circle" />
          </label>
          <label>
            <input type="radio" name="recommend" value="3" /> 3
            <div className="circle" />
          </label>
          <label>
            <input type="radio" name="recommend" value="4" /> 4
            <div className="circle" />
          </label>
          <label>
            <input type="radio" name="recommend" value="5" /> 5
            <div className="circle" />
          </label>
        </fieldset>
      </Form> */}
      <section className="survey">
        <h1>Rate Us</h1>
        <Form method="post" action="/survey">
          <h2>How likely are you to recommend a friend to come get Wired with TD at GHC?</h2>

          <div className="form-group">
            <button type="submit" name="recommend" value="1" className="circle red">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 feather feather-frown"><circle cx="12" cy="12" r="10" /><path d="M16 16s-1.5-2-4-2-4 2-4 2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
            </button>
            <button type="submit" name="recommend" value="2" className="circle light-red">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 feather feather-frown"><circle cx="12" cy="12" r="10" /><path d="M16 16s-1.5-2-4-2-4 2-4 2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
            </button>
            <button type="submit" name="recommend" value="3" className="circle yellow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 feather feather-meh"><circle cx="12" cy="12" r="10" /><line x1="8" y1="15" x2="16" y2="15" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
            </button>
            <button type="submit" name="recommend" value="4" className="circle light-green">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 feather feather-smile"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
            </button>
            <button type="submit" name="recommend" value="5" className="circle green">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 feather feather-smile"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
            </button>
          </div>
          <h2>How would you rate your interest in a career at TD after learning more about us today?</h2>

          <div className="form-group">
            <button type="submit" name="interested" value="1" className="circle red">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 feather feather-frown"><circle cx="12" cy="12" r="10" /><path d="M16 16s-1.5-2-4-2-4 2-4 2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
            </button>
            <button type="submit" name="interested" value="2" className="circle light-red">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 feather feather-frown"><circle cx="12" cy="12" r="10" /><path d="M16 16s-1.5-2-4-2-4 2-4 2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
            </button>
            <button type="submit" name="interested" value="3" className="circle yellow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 feather feather-meh"><circle cx="12" cy="12" r="10" /><line x1="8" y1="15" x2="16" y2="15" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
            </button>
            <button type="submit" name="interested" value="4" className="circle light-green">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 feather feather-smile"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
            </button>
            <button type="submit" name="interested" value="5" className="circle green">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 feather feather-smile"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
            </button>
          </div>
        </Form>
      </section>
    </>
  )
}

export default SurveyForm