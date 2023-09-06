// @ts-nocheck

import { Form } from '@remix-run/react'
import React from 'react'

function OrderForm({submitHandler}) {
  return (
    
    <Form action="/order" method="post">
      {/* get name and email address */}
      <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      </div>
      {/* get coffee temperature: hot or iced */}
      <div>
      <label htmlFor="hot">Hot</label>
      <input type="radio" name="temperature" id="hot" value="hot" />
      <label htmlFor="iced">Iced</label>
      <input type="radio" name="temperature" id="iced" value="iced" />
      </div>
      {/* customize coffee: Drip Cofee, Latte, Cappucino, Espresso Shot */}
      <div>
      <label htmlFor="drip">Drip Coffee</label>
      <input type="radio" name="coffee" id="drip" value="drip" />
      <label htmlFor="latte">Latte</label>
      <input type="radio" name="coffee" id="latte" value="latte" />
      <label htmlFor="cappucino">Cappucino</label>
      <input type="radio" name="coffee" id="cappucino" value="cappucino" />
      <label htmlFor="espresso">Espresso Shot</label>
      <input type="radio" name="coffee" id="espresso" value="espresso" />
      </div>
      {/* get milk options */}
      <div>
      <label htmlFor="wholeMilk">Whole Milk</label>
      <input type="radio" name="wholeMilk" id="wholeMilk" value="whole-milk" />
      <label htmlFor="skimMilk">Skim Milk</label>
      <input type="radio" name="skimMilk" id="skimMilk" value="skim-milk" />
      <label htmlFor="soyMilk">Soy Milk</label>
      <input type="radio" name="soyMilk" id="soyMilk" value="soy-milk" />
      <label htmlFor="almond">Almond Milk</label>
      <input type="radio" name="almond" id="almond" value="almond" />
      <label htmlFor="oat">Oat Milk</label>
      <input type="radio" name="oat" id="oat" value="oat" />
      <label htmlFor="noMilk">No Milk</label>
      <input type="radio" name="noMilk" id="noMilk" value="no-milk" />
      </div>
      {/* get syrup options */}
      <div>
      <label htmlFor="vanilla">Vanilla Syrup</label>
      <input type="radio" name="vanilla" id="vanilla" value="vanilla" />
      <label htmlFor="caramel">Caramel Syrup</label>
      <input type="radio" name="caramel" id="caramel" value="caramel" />
      <label htmlFor="mocha">Mocha Syrup</label>
      <input type="radio" name="mocha" id="mocha" value="mocha" />
      <label htmlFor="noSyrup">No Syrup</label>
      <input type="radio" name="noSyrup" id="noSyrup" value="no-syrup" />
      </div>
      <input type="submit" value="Submit" />
    </Form>

  )
}

export default OrderForm
