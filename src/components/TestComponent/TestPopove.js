import React from 'react';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBPopover size='lg' color='danger' btnChildren='Click to toggle popover' placement='right'>
      <MDBPopoverHeader>Popover title</MDBPopoverHeader>
      <MDBPopoverBody>
        
      </MDBPopoverBody>
    </MDBPopover>
  );
}