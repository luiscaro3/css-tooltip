import React from 'react'
import { viewport } from 'viewport-event' // External library with event listeners and multiple calls

export default function jsxSample() {
  return (
    <div class="my-container">
			<p>This is a static copy. The copy on the button is implemented with a standard jsx conditional.</p>
      
      <button>
        {viewport == 'mobile' ? 'Yes, I agree' : 'Yes, I read the agreement and I agree'}
      </button>
		</div>
  )
}
