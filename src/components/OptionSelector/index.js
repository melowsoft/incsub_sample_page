import React from 'react'

import {Select} from "./styles"

export const OptionSelector = () => (
  <Select>
    <option value="select">I would describe my user type as</option>
     <option value="Premium">Premium</option>
    <option value="Basic">Basic</option>
  </Select>
)