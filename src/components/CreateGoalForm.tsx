import React, { useState } from 'react'
import { IGoal } from '../types'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { randomIdGenerator } from '../utils';

export const CreateGoalForm: React.FC<{createHandler?: (goal: IGoal) => void}> = ({createHandler}) => {
  const [goal, setGoal] = useState<IGoal>({name: "", id: randomIdGenerator(), tasks: [], imgUrl: ""})
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createHandler?.(goal)
  }
  const saveImage = (image: React.ChangeEvent) => {
    //upload image to database
    //get image url
    //return the url
    return "arnold.png"
  }
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name of the goal</Form.Label>
        <Form.Control type="text" placeholder="Apply to OnSquare" onChange={(e) => {setGoal({...goal, name: e.target.value})}}/>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" onChange={(e) => setGoal({...goal, imgUrl: saveImage(e)})}/>
      </Form.Group>
      <Button type='submit'>Create!</Button>
    </Form>
  )
}
